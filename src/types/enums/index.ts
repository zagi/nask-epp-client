export enum CommandTypeEnum {
  HELLO = "hello",
  LOGIN = "login",
  LOGOUT = "logout",
  POLL = "poll",
  DOMAIN_CHECK = "domain:check",
  DOMAIN_CREATE = "domain:create",
}

export enum ConfigKeysEnum {
  XMLNS = "xmlns",
  XMLNS_XSI = "xmlns:xsi",
  XSI_SCHEMA_LOCATION = "xsi:schemaLocation",
  XMLNS_DOMAIN = "xmlns:domain",
}

export enum CommandResourceEnum {
  CONTACT = "contact",
  HOST = "host",
  DOMAIN = "domain",
  FUTURE = "future",
}

export enum ExtSvcConfigKeysEnum {
  EXT_CON = "extcon",
  EXT_DOM = "extdom",
}

export enum LoginKeysEnum {
  CLIENT_ID = "clID",
  PASSWORD = "pw",
}

export enum LoginOptionsKeysEnum {
  VERSION = "version",
  LANG = "lang",
}

export enum PollOperationEnum {
  REQ = "req",
  ACK = "ack",
}

export enum DomainFieldsEnum {
  DOMAIN_NAME = "domain:name",
  DOMAIN_PERIOD = "domain:period",
  DOMAIN_NS = "domain:ns",
  DOMAIN_REGISTRANT = "domain:registrant",
  DOMAIN_AUTH_INFO = "domain:authInfo",
  DOMAIN_PW = "domain:pw",
  DOMAIN_CONTACT = "domain:contact",
}

export enum CommandEnum {
  CHECK = "check",
  CREATE = "create",
  DELETE = "delete",
  UPDATE = "update",
  INFO = "info",
  RENEW = "renew",
  TRANSFER = "transfer",

  LOGIN = "login",
  LOGOUT = "logout",
  POLL = "poll",
  HELLO = "hello",
}

export enum DomainUnitEnum {
  YEAR = "y",
  MONTH = "m",
}

export enum DomainContactTypeEnum {
  ADMIN = "admin",
  BILLING = "billing",
  TECH = "tech",
}
