import { ConfigKeysEnum } from "@/types/enums";
import { DomainConfig } from "@/config/epp/commands";

export const DomainCommandConfig = {
  [ConfigKeysEnum.XMLNS_DOMAIN]: DomainConfig[ConfigKeysEnum.XMLNS_DOMAIN],
  [ConfigKeysEnum.XSI_SCHEMA_LOCATION]:
    DomainConfig[ConfigKeysEnum.XSI_SCHEMA_LOCATION],
};
