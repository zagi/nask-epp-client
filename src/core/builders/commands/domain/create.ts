import {
  CommandTypeEnum,
  DomainFieldsEnum,
  DomainUnitEnum,
} from "@/types/enums";
import type {
  DomainCreateCommand,
  DomainAuthInfo,
  DomainContact,
} from "@/types/commands/requests/domain";
import { buildEppCommand } from "../../xml";
import { generateClTRID } from "@/utils/transactions";

import { EPP_DEFAULTS } from "@/config/constants/epp";

import { DomainCommandConfig } from "./";

export const buildDomainCreateCommand = (
  domainName: string,
  domainNs: string[],
  registrant: string,
  domainAuthInfo: DomainAuthInfo,
  contacts?: DomainContact[],
): string => {
  const domainCheckCommand: DomainCreateCommand = {
    type: CommandTypeEnum.DOMAIN_CREATE,
    data: {
      $: DomainCommandConfig,
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
      ...(contacts.length > 0 && {
        [DomainFieldsEnum.DOMAIN_CONTACT]: contacts,
      }),
    },
    clTRID: generateClTRID(CommandTypeEnum.DOMAIN_CREATE),
  };

  return buildEppCommand(domainCheckCommand);
};
