// enums
import {
  ConfigKeysEnum,
  CommandResourceEnum,
  ExtSvcConfigKeysEnum,
} from "@/types/enums";
////

export const EppConfig = {
  [ConfigKeysEnum.XMLNS]: process.env.XMLNS,
  [ConfigKeysEnum.XMLNS_XSI]: process.env.XMLNS_XSI,
  [ConfigKeysEnum.XSI_SCHEMA_LOCATION]: process.env.XSI_SCHEMA_LOCATION,
} as const;

export const SvcConfig = {
  [CommandResourceEnum.CONTACT]: process.env.SVC_CONTACT,
  [CommandResourceEnum.HOST]: process.env.SVC_HOST,
  [CommandResourceEnum.DOMAIN]: process.env.SVC_DOMAIN,
  [CommandResourceEnum.FUTURE]: process.env.SVC_FUTURE,
} as const;

export const ExtSvcConfig = {
  [ExtSvcConfigKeysEnum.EXT_CON]: process.env.EXT_SVC_CONTACT,
  [ExtSvcConfigKeysEnum.EXT_DOM]: process.env.EXT_SVC_DOMAIN,
} as const;
