import { Command } from "../";
import {
  CommandTypeEnum,
  ConfigKeysEnum,
  DomainFieldsEnum,
} from "@/types/enums";

interface DomainCommandBase {
  $: {
    [ConfigKeysEnum.XMLNS_DOMAIN]: string;
    [ConfigKeysEnum.XSI_SCHEMA_LOCATION]: string;
  };
}

interface DomainPeriod {
  $: {
    unit: "y" | "m";
  };
  _: string;
}

export interface DomainAuthInfo {
  [DomainFieldsEnum.DOMAIN_PW]: string;
}

interface DomainCheckData extends DomainCommandBase {
  [DomainFieldsEnum.DOMAIN_NAME]: string[];
}

interface DomainCreateData extends DomainCommandBase {
  [DomainFieldsEnum.DOMAIN_NAME]: string[] | string;
  [DomainFieldsEnum.DOMAIN_PERIOD]: DomainPeriod;
  [DomainFieldsEnum.DOMAIN_NS]: string[];
  [DomainFieldsEnum.DOMAIN_REGISTRANT]: string;
  [DomainFieldsEnum.DOMAIN_AUTH_INFO]: DomainAuthInfo;
}

type DomainCommandData = {
  [CommandTypeEnum.DOMAIN_CHECK]: DomainCheckData;
  [CommandTypeEnum.DOMAIN_CREATE]: DomainCreateData;
};

export type DomainCommand<
  T extends CommandTypeEnum.DOMAIN_CHECK | CommandTypeEnum.DOMAIN_CREATE,
> = Command<
  T,
  {
    [K in T]: DomainCommandData[K];
  }
>;

export * from "./check";
export * from "./create";
