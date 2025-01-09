// config
import {
  EppCommandSvcConfig,
  EppCommandExtSvcConfig,
} from "@/config";

import {
    EppCommandLoginConfig,
    EppCommandLoginOptionsConfig,
} from "@/config/commands/login";
////
// enums
import {
  CommandTypeEnum,
  EppCommandExtSvcConfigKeysEnum,
  EppCommandSvcConfigKeysEnum,
} from "@/types/enums";
// types
import type { LoginCommand } from "@/types/commands/requests/login";
////
// other
import { buildEppCommand } from "@/builders";
import { generateClTRID } from "@/utils";
////\

const loginCommand: LoginCommand = {
  type: CommandTypeEnum.LOGIN,
  data: {
    ...EppCommandLoginConfig,
    options: EppCommandLoginOptionsConfig,
    svcs: {
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
    },
  },
  clTRID: generateClTRID(CommandTypeEnum.LOGIN),
};

export const loginCommandXml = buildEppCommand(loginCommand);
