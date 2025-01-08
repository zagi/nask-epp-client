import { Builder } from "xml2js";
import { EppConfig } from "./config";
import { Command } from "./types/commands/requests/command";
import {
  CommandTypeEnum,
  EppCommandExtSvcConfigKeysEnum,
  EppCommandSvcConfigKeysEnum
} from "./types/enums";
import { LoginCommand } from "./types/commands/requests/login";
import { generateClTRID } from "./utils";
import { EppCommandSvcConfig, EppCommandExtSvcConfig, EppCommandLoginConfig, EppCommandLoginOptionsConfig } from "./config";

const buildEppCommand = <T extends CommandTypeEnum, D>(
  command: Command<T, D>
): string => {
  const builder = new Builder();

  const eppObject: Record<string, any> = {
    epp: {
      $: EppConfig,
      ...(command.type === CommandTypeEnum.HELLO
        ? { hello: {} }
        : {
            command: {
              [command.type]: {
                ...command.data,
              },
            },
          }),
    },
  };

  return builder.buildObject(eppObject);
};

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
    clTRID: generateClTRID("login"),
  },
};

const loginXml = buildEppCommand(loginCommand);

console.log(loginXml);
