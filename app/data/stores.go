package data

import (
	"fmt"

	"github.com/domgolonka/threatdefender/app/data/sqlite3"
	"github.com/domgolonka/threatdefender/app/models"
	"github.com/jmoiron/sqlx"
)

////////////////////////////
/// ipaddress
///////////////////////////
type ProxyStore interface {
	Find(id int) (*models.Proxy, error)
	FindAll() (*[]models.Proxy, error)
	FindByIP(ipaddress string) (*models.Proxy, error)
	Create(ip, port, types string) (*models.Proxy, error)
	Delete(id int) (bool, error)
}

func NewProxyStore(db sqlx.Ext) (ProxyStore, error) {
	switch db.DriverName() {
	case "sqlite3":
		return &sqlite3.ProxyStore{Ext: db}, nil
	default:
		return nil, fmt.Errorf("unsupported driver: %v", db.DriverName())
	}
}

type VpnStore interface {
	FindByIP(ipaddress string) (*models.Vpn, error)
	Find(id int) (*models.Vpn, error)
	FindAll() (*[]string, error)
	Create(ip, port, source string) (*models.Vpn, error)
	Delete(id int) (bool, error)
}

func NewVpnStore(db sqlx.Ext) (VpnStore, error) {
	switch db.DriverName() {
	case "sqlite3":
		return &sqlite3.VpnStore{Ext: db}, nil
	default:
		return nil, fmt.Errorf("unsupported driver: %v", db.DriverName())
	}
}

type SpamStore interface {
	FindByIP(ipaddress string) (*models.Spam, error)
	Find(id int) (*models.Spam, error)
	FindAll() (*[]string, error)
	Create(url string, sub bool) (*models.Spam, error)
	Delete(id int) (bool, error)
}

func NewSpamStore(db sqlx.Ext) (SpamStore, error) {
	switch db.DriverName() {
	case "sqlite3":
		return &sqlite3.SpamStore{Ext: db}, nil
	default:
		return nil, fmt.Errorf("unsupported driver: %v", db.DriverName())
	}
}

type TorStore interface {
	FindByIP(ipaddress string) (*models.Tor, error)
	Find(id int) (*models.Tor, error)
	FindAll() (*[]string, error)
	Create(ip) (*models.Tor, error)
	Delete(id int) (bool, error)
}

func NewTorStore(db sqlx.Ext) (TorStore, error) {
	switch db.DriverName() {
	case "sqlite3":
		return &sqlite3.TorStore{Ext: db}, nil
	default:
		return nil, fmt.Errorf("unsupported driver: %v", db.DriverName())
	}
}

////////////////////////////
/// email
///////////////////////////
type DisposableStore interface {
	FindByURL(url string) (*models.DisposableEmail, error)
	Find(id int) (*models.DisposableEmail, error)
	FindAll() (*[]string, error)
	Create(url string) (*models.DisposableEmail, error)
	Delete(id int) (bool, error)
}

func NewDisposableStore(db sqlx.Ext) (DisposableStore, error) {
	switch db.DriverName() {
	case "sqlite3":
		return &sqlite3.DisposableStore{Ext: db}, nil
	default:
		return nil, fmt.Errorf("unsupported driver: %v", db.DriverName())
	}
}

type FreeEmailStore interface {
	FindByURL(url string) (*models.FreeEmail, error)
	Find(id int) (*models.FreeEmail, error)
	FindAll() (*[]string, error)
	Create(url string) (*models.FreeEmail, error)
	Delete(id int) (bool, error)
}

func NewFreeEmailStore(db sqlx.Ext) (FreeEmailStore, error) {
	switch db.DriverName() {
	case "sqlite3":
		return &sqlite3.FreeEmailStore{Ext: db}, nil
	default:
		return nil, fmt.Errorf("unsupported driver: %v", db.DriverName())
	}
}

type SpamEmailStore interface {
	FindByURL(url string) (*models.SpamEmail, error)
	Find(id int) (*models.SpamEmail, error)
	FindAll() (*[]string, error)
	Create(url string) (*models.SpamEmail, error)
	Delete(id int) (bool, error)
}

func NewSpamEmailStore(db sqlx.Ext) (SpamEmailStore, error) {
	switch db.DriverName() {
	case "sqlite3":
		return &sqlite3.SpamEmailStore{Ext: db}, nil
	default:
		return nil, fmt.Errorf("unsupported driver: %v", db.DriverName())
	}
}
