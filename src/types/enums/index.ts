export enum CommandTypeEnum {
  HELLO = "hello",
  LOGIN = "login",
  LOGOUT = "logout",
  POLL = "poll",
  DOMAIN_CHECK = "domain:check",
}

export enum ConfigKeysEnum {
  XMLNS = "xmlns",
  XMLNS_XSI = "xmlns:xsi",
  XSI_SCHEMA_LOCATION = "xsi:schemaLocation",
  XMLNS_DOMAIN = "xmlns:domain",
}

export enum SvcConfigKeysEnum {
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
}
