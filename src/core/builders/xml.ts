import { Builder } from "xml2js";
import { Command } from "@/types/commands";
import { CommandTypeEnum } from "@/types/enums";
import { EppConfig } from "@/config/epp";

export const buildEppCommand = <T extends CommandTypeEnum, D>(
  command: Command<T, D>,
): string => {
  const builder = new Builder();
  const eppObject: Record<string, any> = {
    epp: {
      $: EppConfig,
      ...(command.type === CommandTypeEnum.HELLO
        ? { hello: {} }
        : { command: { [command.type]: { ...command.data } } }),
    },
  };
  return builder.buildObject(eppObject);
};
