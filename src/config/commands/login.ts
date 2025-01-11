import {
  EppCommandLoginKeysEnum,
  EppCommandLoginOptionsKeysEnum,
} from "@/types/enums";

export const EppCommandLoginConfig = {
  [EppCommandLoginKeysEnum.CLIENT_ID]: process.env.CLIENT_ID,
  [EppCommandLoginKeysEnum.PASSWORD]: process.env.PASSWORD,
} as const;

export const EppCommandLoginOptionsConfig = {
  [EppCommandLoginOptionsKeysEnum.VERSION]: process.env.OPTIONS_VERSION,
  [EppCommandLoginOptionsKeysEnum.LANG]: process.env.OPTIONS_LANG,
} as const;
