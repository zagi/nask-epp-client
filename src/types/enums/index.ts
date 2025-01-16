export enum CommandTypeEnum {
  HELLO = "hello",
  LOGIN = "login",
  LOGOUT = "logout",
  POLL = "poll",
}

export enum EppConfigKeysEnum {
  XMLNS = "xmlns",
  XMLNS_XSI = "xmlns:xsi",
  XSI_SCHEMA_LOCATION = "xsi:schemaLocation",
}

export enum EppCommandSvcConfigKeysEnum {
  CONTACT = "contact",
  HOST = "host",
  DOMAIN = "domain",
  FUTURE = "future",
}

export enum EppCommandExtSvcConfigKeysEnum {
  EXT_CON = "extcon",
  EXT_DOM = "extdom",
}

export enum EppCommandLoginKeysEnum {
  CLIENT_ID = "clID",
  PASSWORD = "pw",
}

export enum EppCommandLoginOptionsKeysEnum {
  VERSION = "version",
  LANG = "lang",
}

export enum EppCommandPollOperationEnum {
  REQ = "req",
  ACK = "ack",
}
