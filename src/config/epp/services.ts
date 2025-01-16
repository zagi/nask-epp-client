// enums
import {
  ConfigKeysEnum,
  SvcConfigKeysEnum,
  ExtSvcConfigKeysEnum,
} from "@/types/enums";
////

export const EppConfig = {
  [ConfigKeysEnum.XMLNS]: process.env.XMLNS,
  [ConfigKeysEnum.XMLNS_XSI]: process.env.XMLNS_XSI,
  [ConfigKeysEnum.XSI_SCHEMA_LOCATION]: process.env.XSI_SCHEMA_LOCATION,
} as const;

export const SvcConfig = {
  [SvcConfigKeysEnum.CONTACT]: process.env.SVC_CONTACT,
  [SvcConfigKeysEnum.HOST]: process.env.SVC_HOST,
  [SvcConfigKeysEnum.DOMAIN]: process.env.SVC_DOMAIN,
  [SvcConfigKeysEnum.FUTURE]: process.env.SVC_FUTURE,
} as const;

export const ExtSvcConfig = {
  [ExtSvcConfigKeysEnum.EXT_CON]: process.env.EXT_SVC_CONTACT,
  [ExtSvcConfigKeysEnum.EXT_DOM]: process.env.EXT_SVC_DOMAIN,
} as const;
