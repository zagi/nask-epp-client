import { CommandTypeEnum } from "@/types/enums";
import type { LoginCommand } from "@/types/commands/requests/login";
import {
  EppCommandLoginConfig,
  EppCommandLoginOptionsConfig,
} from "@/config/epp";
import { buildSvcsObject } from "@/utils/svcs";
import { buildEppCommand } from "../xml";
import { generateClTRID } from "@/utils/transactions";

export const buildLoginCommand = (): string => {
  const svcs = buildSvcsObject();

  const loginCommand: LoginCommand = {
    type: CommandTypeEnum.LOGIN,
    data: {
      ...EppCommandLoginConfig,
      options: EppCommandLoginOptionsConfig,
      svcs,
    },
    clTRID: generateClTRID(CommandTypeEnum.LOGIN),
  };

  return buildEppCommand(loginCommand);
};
