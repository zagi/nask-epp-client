import { Command } from "../";
import {
  CommandTypeEnum,
  ConfigKeysEnum,
  DomainFieldsEnum,
} from "@/types/enums";

export interface DomainCheckCommand
  extends Command<CommandTypeEnum.DOMAIN_CHECK> {
  data: {
    [CommandTypeEnum.DOMAIN_CHECK]: {
      $: {
        [ConfigKeysEnum.XMLNS_DOMAIN]: string;
        [ConfigKeysEnum.XSI_SCHEMA_LOCATION]: string;
      };
      [DomainFieldsEnum.DOMAIN_NAME]: string[];
    };
  };
}
