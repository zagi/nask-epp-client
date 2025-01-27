import { Builder } from "xml2js";
import { EPPCommand } from "@/types/commands";
import { RESOURCE_COMMAND_MAP } from "@/types/commands/requests/const";
import { CommandTypeEnum } from "@/types/enums";
import { EppConfig } from "@/config/epp";
import { isUnwrappedCommand } from "@/utils/is-unwrapped";

export const buildEppCommand = <T extends CommandTypeEnum, D>(
  command: EPPCommand<T, D>,
): string => {
  const builder = new Builder();
  const isWrapped = !isUnwrappedCommand(command.type);

  const commandMapping = RESOURCE_COMMAND_MAP[command.type];

  const commandData = isWrapped
    ? {
        command: {
          [commandMapping.command]: {
            [`${commandMapping.resource}:${commandMapping.command}`]:
              command.data,
          },
        },
      }
    : {
        command: {
          [commandMapping.command]: command.data,
        },
      };

  const eppObject = {
    epp: {
      $: EppConfig,
      ...(command.type === CommandTypeEnum.HELLO ? { hello: {} } : commandData),
    },
  };

  return builder.buildObject(eppObject);
};
