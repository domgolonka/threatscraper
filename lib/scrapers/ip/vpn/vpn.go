package vpn

import (
	"github.com/domgolonka/threatscraper/app/data"
	"github.com/domgolonka/threatscraper/lib/scrapers/ip/vpn/providers"
	"github.com/sirupsen/logrus"

	"reflect"
	"sync"
)

var (
	instance *VPN
	once     sync.Once
)

type VPN struct {
	providers []Provider
	//hosts     chan []string
	store  data.VpnStore
	logger logrus.FieldLogger
}

func (p *VPN) isProvider(provider Provider) bool {
	for _, pr := range p.providers {
		if reflect.TypeOf(pr) == reflect.TypeOf(provider) {
			return true
		}
	}
	return false
}
func (p *VPN) AddProvider(provider Provider) {
	if !p.isProvider(provider) {
		p.providers = append(p.providers, provider)
	}
}
func (p *VPN) load() {
	for _, provider := range p.providers {
		hosts, err := provider.List()

		if err != nil {
			p.logger.Errorln(err)
		}
		p.logger.Println(provider.Name(), len(hosts))
		//p.hosts <- hosts
		for i := 0; i < len(hosts); i++ {
			p.createOrIgnore(hosts[i])
		}
	}
}
func (p *VPN) createOrIgnore(vpn string) bool {
	_, err := p.store.Create(vpn)
	return err == nil
}

func (p *VPN) run() {
	go p.load()
}

func (p *VPN) Get() (*[]string, error) {
	return p.store.FindAll()

}
func NewVPN(store data.VpnStore, logger logrus.FieldLogger) *VPN {
	once.Do(func() {
		instance = &VPN{
			logger: logger,
			store:  store,
		}
		logger.Debug("starting VPN")
		instance.AddProvider(providers.NewOpenVpn(logger))
		instance.AddProvider(providers.NewTxtDomains(logger))
		go instance.run()
	})
	return instance
}
