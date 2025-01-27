import {
  CommandTypeEnum,
  DomainFieldsEnum,
  DomainNameInfoHostsEnum,
} from "@/types/enums";
import type { DomainInfoCommand } from "@/types/commands/requests/domain";
import { buildEppCommand } from "../../xml";
import { generateClTRID } from "@/utils/transactions";
import { DomainCommandConfig } from "./";

export const buildDomainCheckCommand = (
  domainName: string,
  host?: DomainNameInfoHostsEnum,
): string => {
  const domainCheckCommand: DomainInfoCommand = {
    type: CommandTypeEnum.DOMAIN_INFO,
    data: {
      $: DomainCommandConfig,
      [DomainFieldsEnum.DOMAIN_NAME]: {
        $: {
          ...(host && { hosts: host }),
        },
        _: domainName,
      },
    },
    clTRID: generateClTRID(CommandTypeEnum.DOMAIN_INFO),
  };

  return buildEppCommand(domainCheckCommand);
};
