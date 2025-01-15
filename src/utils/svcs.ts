// config
import { EppCommandSvcConfig, EppCommandExtSvcConfig } from "@/config";
////

import {
  EppCommandExtSvcConfigKeysEnum,
  EppCommandSvcConfigKeysEnum,
} from "@/types/enums";

export const buildSvcsObject = () => {
  return {
    objURI: [
      EppCommandSvcConfig[EppCommandSvcConfigKeysEnum.CONTACT],
      EppCommandSvcConfig[EppCommandSvcConfigKeysEnum.DOMAIN],
      EppCommandSvcConfig[EppCommandSvcConfigKeysEnum.HOST],
    ],
    svcExtension: {
      extURI: [
        EppCommandExtSvcConfig[EppCommandExtSvcConfigKeysEnum.EXT_CON],
        EppCommandExtSvcConfig[EppCommandExtSvcConfigKeysEnum.EXT_DOM],
      ],
    },
  };
};
