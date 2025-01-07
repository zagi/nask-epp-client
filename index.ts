import { Builder } from "xml2js";
import { GLOBAL_CONFIG } from "./config";
import { Command } from "./types/commands/requests/command";
import { CommandTypeEnum, SvcEnum, ExtSvcEnum } from "./types/enums";
import { LoginCommand } from "./types/commands/requests/login";
import { generateClTRID } from "./utils";

const buildEppCommand = <T extends CommandTypeEnum, D>(command: Command<T, D>): string => {
  const builder = new Builder();

  const eppObject: Record<string, any> = {
    epp: {
      $: GLOBAL_CONFIG,
      ...(command.type === "hello"
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
}

const loginCommand: LoginCommand = {
    type: CommandTypeEnum.Login,
    data: {
      clID: "test",
      pw: "foo-BAR2",
      options: {
        version: "1.0",
        lang: "pl",
      },
      svcs: {
        objURI: [SvcEnum.Contact, SvcEnum.Domain, SvcEnum.Host],
        svcExtension: {
          extURI: [ExtSvcEnum.ExtCon, ExtSvcEnum.ExtDom],
        },
      },
      clTRID: generateClTRID("login"),
    },
  };
  
  const loginXml = buildEppCommand(loginCommand);
  
  console.log(loginXml);