import { EPPCommand } from "../";
import {
  CommandTypeEnum,
  ConfigKeysEnum,
  DomainFieldsEnum,
  DomainUnitEnum,
  DomainContactTypeEnum,
} from "@/types/enums";

type DomainCommandBase = {
  $: {
    [ConfigKeysEnum.XMLNS_DOMAIN]: string;
    [ConfigKeysEnum.XSI_SCHEMA_LOCATION]: string;
  };
};

interface DomainPeriod {
  $: {
    unit: DomainUnitEnum.YEAR | DomainUnitEnum.MONTH;
  };
  _: string;
}

export interface DomainAuthInfo {
  [DomainFieldsEnum.DOMAIN_PW]: string;
}

export interface DomainContact {
  $: {
    type:
      | DomainContactTypeEnum.ADMIN
      | DomainContactTypeEnum.BILLING
      | DomainContactTypeEnum.TECH;
  };
}

type DomainCheckData = DomainCommandBase & {
  [DomainFieldsEnum.DOMAIN_NAME]: string[];
};

type DomainCreateData = DomainCommandBase & {
  [DomainFieldsEnum.DOMAIN_NAME]: string[] | string;
  [DomainFieldsEnum.DOMAIN_PERIOD]: DomainPeriod;
  [DomainFieldsEnum.DOMAIN_NS]: string[];
  [DomainFieldsEnum.DOMAIN_REGISTRANT]: string;
  [DomainFieldsEnum.DOMAIN_AUTH_INFO]: DomainAuthInfo;

  [DomainFieldsEnum.DOMAIN_CONTACT]?: DomainContact[];
};

type DomainCommandData = {
  [CommandTypeEnum.DOMAIN_CHECK]: DomainCheckData;
  [CommandTypeEnum.DOMAIN_CREATE]: DomainCreateData;
};

export type DomainCommand<
  T extends CommandTypeEnum.DOMAIN_CHECK | CommandTypeEnum.DOMAIN_CREATE,
> = EPPCommand<T, DomainCommandData[T]>;

export * from "./check";
export * from "./create";
