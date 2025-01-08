// dependencies
import 'dotenv/config';
////
// config
import { EppCommandSvcConfig, EppCommandExtSvcConfig, EppCommandLoginConfig, EppCommandLoginOptionsConfig } from "./config";
////
// enums
import {
  CommandTypeEnum,
  EppCommandExtSvcConfigKeysEnum,
  EppCommandSvcConfigKeysEnum
} from "./types/enums";
// types
import type { LoginCommand } from "./types/commands/requests/login";
////
// other
import { buildEppCommand } from "./builders";
import { generateClTRID } from "./utils";
import { sendEppRequest } from "./services/request";
////\

//dotenv.config()

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

const loginXml = buildEppCommand(loginCommand);
console.log(loginXml);
(async () => {
  console.log("Sending login command...");
  await sendEppRequest(loginXml);
})();
