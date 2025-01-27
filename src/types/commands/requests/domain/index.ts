import { EPPCommand } from "../";
import {
  CommandTypeEnum,
  ConfigKeysEnum,
  DomainFieldsEnum,
  DomainUnitEnum,
  DomainContactTypeEnum,
  DomainNameInfoHostsEnum,
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
  _: string;
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

export interface DomainNameInfo {
  _: string;
  $: {
    hosts?:
      | DomainNameInfoHostsEnum.ALL
      | DomainNameInfoHostsEnum.DEL
      | DomainNameInfoHostsEnum.SUB
      | DomainNameInfoHostsEnum.NONE;
  };
}

type DomainInfoData = DomainCommandBase & {
  [DomainFieldsEnum.DOMAIN_NAME]: DomainNameInfo;
  [DomainFieldsEnum.DOMAIN_AUTH_INFO]?: DomainAuthInfo;
};

type DomainCommandData = {
  [CommandTypeEnum.DOMAIN_CHECK]: DomainCheckData;
  [CommandTypeEnum.DOMAIN_CREATE]: DomainCreateData;
  [CommandTypeEnum.DOMAIN_INFO]: DomainInfoData;
};

export type DomainCommand<
  T extends
    | CommandTypeEnum.DOMAIN_CHECK
    | CommandTypeEnum.DOMAIN_CREATE
    | CommandTypeEnum.DOMAIN_INFO,
> = EPPCommand<T, DomainCommandData[T]>;

export * from "./check";
export * from "./create";
export * from "./info";
