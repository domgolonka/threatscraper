package providers

import (
	"bytes"
	"io"
	"net/http"
	"regexp"
	"time"

	"github.com/domgolonka/threatdefender/app/models"

	"github.com/sirupsen/logrus"
)

type TorIps struct {
	torlist    []models.Tor
	logger     logrus.FieldLogger
	lastUpdate time.Time
}

const torExitNodes = "https://check.torproject.org/exit-addresses"

func NewTorIps(logger logrus.FieldLogger) *TorIps {
	logger.Debug("starting Tor")
	return &TorIps{
		logger: logger,
	}
}
func (*TorIps) Name() string {
	return "tor"
}

func (c *TorIps) Load(body []byte) ([]models.Tor, error) {

	// don't need to update this more than once a day!
	if time.Now().Unix() >= c.lastUpdate.Unix()+(82800) {
		c.torlist = make([]models.Tor, 0)
	}

	allbody, err := c.MakeRequest()
	if err != nil {
		return nil, err
	}

	reExitNode := regexp.MustCompile(`ExitAddress (\d+\.\d+\.\d+\.\d+)`)
	for _, node := range reExitNode.FindAllStringSubmatch(string(allbody), -1) {
		tor := models.Tor{
			IP: node[1],
		}
		c.torlist = append(c.torlist, tor)
		//torlist = append(torlist, node[1])
	}

	c.lastUpdate = time.Now()
	//c.torlist = torlist
	return c.torlist, nil
}

func (c *TorIps) MakeRequest() ([]byte, error) {
	var client = NewClient()
	client.Transport.(*http.Transport).Proxy = http.ProxyFromEnvironment

	resp, err := client.Get(torExitNodes)
	if resp != nil {
		defer resp.Body.Close()
	}

	if err != nil {
		return nil, err
	}

	var body bytes.Buffer
	if _, err := io.Copy(&body, resp.Body); err != nil {
		return nil, err
	}

	return body.Bytes(), nil
}

func (c *TorIps) List() ([]models.Tor, error) {
	return c.Load(nil)
}
