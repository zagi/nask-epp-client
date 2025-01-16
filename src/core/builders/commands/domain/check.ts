import {
  CommandTypeEnum,
  ConfigKeysEnum,
  DomainFieldsEnum,
} from "@/types/enums";
import type { DomainCheckCommand } from "@/types/commands/requests/domain";
import { buildEppCommand } from "../../xml";
import { generateClTRID } from "@/utils/transactions";
import { DomainConfig } from "@/config/epp/commands";

export const buildDomainCheckCommand = (domainNames: string[]): string => {
  const domainCheckCommand: DomainCheckCommand = {
    type: CommandTypeEnum.DOMAIN_CHECK,
    data: {
      [CommandTypeEnum.DOMAIN_CHECK]: {
        $: {
          [ConfigKeysEnum.XMLNS_DOMAIN]:
            DomainConfig[ConfigKeysEnum.XMLNS_DOMAIN],
          [ConfigKeysEnum.XSI_SCHEMA_LOCATION]:
            DomainConfig[ConfigKeysEnum.XSI_SCHEMA_LOCATION],
        },
        [DomainFieldsEnum.DOMAIN_NAME]: domainNames,
      },
    },
    clTRID: generateClTRID(CommandTypeEnum.DOMAIN_CHECK),
  };

  return buildEppCommand(domainCheckCommand);
};
