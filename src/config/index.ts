import {
  EppConfigKeysEnum,
  EppCommandSvcConfigKeysEnum,
  EppCommandExtSvcConfigKeysEnum,
} from "@/types/enums";

export const EppConfig = {
  [EppConfigKeysEnum.XMLNS]: process.env.XMLNS,
  [EppConfigKeysEnum.XMLNS_XSI]: process.env.XMLNS_XSI,
  [EppConfigKeysEnum.XSI_SCHEMA_LOCATION]: process.env.XSI_SCHEMA_LOCATION,
} as const;

export const EppCommandSvcConfig = {
  [EppCommandSvcConfigKeysEnum.CONTACT]: process.env.SVC_CONTACT,
  [EppCommandSvcConfigKeysEnum.HOST]: process.env.SVC_HOST,
  [EppCommandSvcConfigKeysEnum.DOMAIN]: process.env.SVC_DOMAIN,
  [EppCommandSvcConfigKeysEnum.FUTURE]: process.env.SVC_FUTURE,
} as const;

export const EppCommandExtSvcConfig = {
  [EppCommandExtSvcConfigKeysEnum.EXT_CON]: process.env.EXT_SVC_CONTACT,
  [EppCommandExtSvcConfigKeysEnum.EXT_DOM]: process.env.EXT_SVC_DOMAIN,
} as const;
