// config
import { SvcConfig, ExtSvcConfig } from "@/config";
////

// enums
import { CommandResourceEnum, ExtSvcConfigKeysEnum } from "@/types/enums";
////

export const buildSvcsObject = () => {
  return {
    objURI: [
      SvcConfig[CommandResourceEnum.CONTACT],
      SvcConfig[CommandResourceEnum.DOMAIN],
      SvcConfig[CommandResourceEnum.HOST],
    ],
    svcExtension: {
      extURI: [
        ExtSvcConfig[ExtSvcConfigKeysEnum.EXT_CON],
        ExtSvcConfig[ExtSvcConfigKeysEnum.EXT_DOM],
      ],
    },
  };
};
