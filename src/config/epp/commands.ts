//types
import {
  EppCommandLoginKeysEnum,
  EppCommandLoginOptionsKeysEnum,
} from "@/types/enums";
////
// defaults
import { EPP_DEFAULTS } from "@/config/constants/epp";
////

export const EppCommandLoginConfig = {
  [EppCommandLoginKeysEnum.CLIENT_ID]: process.env.CLIENT_ID,
  [EppCommandLoginKeysEnum.PASSWORD]: process.env.PASSWORD,
} as const;

export const EppCommandLoginOptionsConfig = {
  [EppCommandLoginOptionsKeysEnum.VERSION]:
    process.env.OPTIONS_VERSION ?? EPP_DEFAULTS.VERSION,
  [EppCommandLoginOptionsKeysEnum.LANG]:
    process.env.OPTIONS_LANG ?? EPP_DEFAULTS.LANG,
} as const;
