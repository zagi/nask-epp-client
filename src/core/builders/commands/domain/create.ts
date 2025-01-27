import {
  CommandTypeEnum,
  ConfigKeysEnum,
  DomainFieldsEnum,
  DomainUnitEnum,
} from "@/types/enums";
import type {
  DomainCreateCommand,
  DomainAuthInfo,
} from "@/types/commands/requests/domain";
import { buildEppCommand } from "../../xml";
import { generateClTRID } from "@/utils/transactions";
import { DomainConfig } from "@/config/epp/commands";
import { EPP_DEFAULTS } from "@/config/constants/epp";

export const buildDomainCreateCommand = (
  domainName: string,
  domainNs: string[],
  registrant: string,
  domainAuthInfo: DomainAuthInfo,
): string => {
  const domainCheckCommand: DomainCreateCommand = {
    type: CommandTypeEnum.DOMAIN_CREATE,
    data: {
      $: {
        [ConfigKeysEnum.XMLNS_DOMAIN]:
          DomainConfig[ConfigKeysEnum.XMLNS_DOMAIN],
        [ConfigKeysEnum.XSI_SCHEMA_LOCATION]:
          DomainConfig[ConfigKeysEnum.XSI_SCHEMA_LOCATION],
      },
      [DomainFieldsEnum.DOMAIN_NAME]: domainName,
      [DomainFieldsEnum.DOMAIN_PERIOD]: {
        $: {
          unit: DomainUnitEnum.YEAR,
        },
        _: EPP_DEFAULTS.PERIOD,
      },
      [DomainFieldsEnum.DOMAIN_NS]: domainNs,
      [DomainFieldsEnum.DOMAIN_REGISTRANT]: registrant,
      [DomainFieldsEnum.DOMAIN_AUTH_INFO]: domainAuthInfo,
    },
    clTRID: generateClTRID(CommandTypeEnum.DOMAIN_CHECK),
  };

  return buildEppCommand(domainCheckCommand);
};
