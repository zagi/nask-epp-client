//enums
import {
  ConfigKeysEnum,
  LoginKeysEnum,
  LoginOptionsKeysEnum,
} from "@/types/enums";
////
// defaults
import { EPP_DEFAULTS } from "@/config/constants/epp";
////

export const LoginConfig = {
  [LoginKeysEnum.CLIENT_ID]: process.env.CLIENT_ID,
  [LoginKeysEnum.PASSWORD]: process.env.PASSWORD,
} as const;

export const LoginOptionsConfig = {
  [LoginOptionsKeysEnum.VERSION]:
    process.env.OPTIONS_VERSION ?? EPP_DEFAULTS.VERSION,
  [LoginOptionsKeysEnum.LANG]: process.env.OPTIONS_LANG ?? EPP_DEFAULTS.LANG,
} as const;

export const DomainCheckConfig = {
  [ConfigKeysEnum.XMLNS_DOMAIN]: process.env.XMLNS_DOMAIN,
  [ConfigKeysEnum.XSI_SCHEMA_LOCATION]: process.env.XSI_SCHEMA_LOCATION_DOMAIN,
};
