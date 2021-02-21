package providers

import (
	"bytes"
	"net/http"
	"time"

	"github.com/domgolonka/threatdefender/app/models"

	"github.com/domgolonka/threatdefender/app/entity"

	"github.com/sirupsen/logrus"
)

type TxtDomains struct {
	iplist     []models.DisposableEmail
	logger     logrus.FieldLogger
	lastUpdate time.Time
}

func NewTxtDomains(logger logrus.FieldLogger) *TxtDomains {
	logger.Debug("starting TxtDomains")
	return &TxtDomains{
		logger: logger,
	}
}
func (*TxtDomains) Name() string {
	return "text_domain"
}

func (c *TxtDomains) Load(body []byte) ([]models.DisposableEmail, error) {

	// don't need to update this more than once a day!
	if time.Now().Unix() >= c.lastUpdate.Unix()+(82800) {
		c.iplist = make([]models.DisposableEmail, 0)
	}

	f := entity.Feed{
		Logger: c.logger,
	}
	feed, err := f.ReadFile("email_disposable.json")
	if err != nil {
		return nil, err
	}
	ips := make(map[string]entity.DomainAnalysis)
	for _, activeFeed := range feed {
		c.logger.Printf("[INFO] Importing data feed %s", activeFeed.Name)
		feedResultsDomains, err := activeFeed.FetchString()
		if err == nil {
			for k, e := range feedResultsDomains { // k is the ip string,  e is the
				if _, ok := ips[k]; ok {
					ip := ips[k]
					ip.Type = e.Type
					ip.Score = ip.Score + e.Score
					ip.Lists = append(ip.Lists, e.Lists[0])
					ips[k] = ip
				} else {
					ips[k] = e
				}

				disposableEmail := models.DisposableEmail{
					Domain: ips[k].Domain,
				}
				c.iplist = append(c.iplist, disposableEmail)

			}

			c.logger.Printf("[INFO] Imported %d domains from data feed %s\n", len(feedResultsDomains),
				len(feedResultsDomains), activeFeed.Name)
		} else {
			c.logger.Printf("[ERROR] Importing data feed %s\n failed : %s", activeFeed.Name, err)
		}
	}

	c.lastUpdate = time.Now()
	return c.iplist, nil

}
func (c *TxtDomains) MakeRequest(urlList string) ([]byte, error) {
	var body bytes.Buffer

	req, err := http.NewRequest(http.MethodGet, urlList, nil)
	if err != nil {
		return nil, err
	}

	var client = NewClient()

	resp, err := client.Do(req)
	if resp != nil {
		defer resp.Body.Close()
	}

	if err != nil {
		return nil, err
	}

	_, err = body.ReadFrom(resp.Body)
	if err != nil {
		return nil, err
	}

	return body.Bytes(), err
}

func (c *TxtDomains) List() ([]models.DisposableEmail, error) {
	return c.Load(nil)
}
