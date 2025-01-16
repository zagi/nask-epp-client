// config
import { SvcConfig, ExtSvcConfig } from "@/config";
////

// enums
import { SvcConfigKeysEnum, ExtSvcConfigKeysEnum } from "@/types/enums";
////

export const buildSvcsObject = () => {
  return {
    objURI: [
      SvcConfig[SvcConfigKeysEnum.CONTACT],
      SvcConfig[SvcConfigKeysEnum.DOMAIN],
      SvcConfig[SvcConfigKeysEnum.HOST],
    ],
    svcExtension: {
      extURI: [
        ExtSvcConfig[ExtSvcConfigKeysEnum.EXT_CON],
        ExtSvcConfig[ExtSvcConfigKeysEnum.EXT_DOM],
      ],
    },
  };
};
