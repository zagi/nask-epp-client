import { CommandTypeEnum, DomainFieldsEnum } from "@/types/enums";
import type { DomainCheckCommand } from "@/types/commands/requests/domain";
import { buildEppCommand } from "../../xml";
import { generateClTRID } from "@/utils/transactions";
import { DomainCommandConfig } from "./";

export const buildDomainCheckCommand = (domainNames: string[]): string => {
  const domainCheckCommand: DomainCheckCommand = {
    type: CommandTypeEnum.DOMAIN_CHECK,
    data: {
      $: DomainCommandConfig,
      [DomainFieldsEnum.DOMAIN_NAME]: domainNames,
    },
    clTRID: generateClTRID(CommandTypeEnum.DOMAIN_CHECK),
  };

  return buildEppCommand(domainCheckCommand);
};
