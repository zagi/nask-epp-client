import { Command } from "./command.ts";
import { ExtSvcEnum, SvcEnum } from "../../enums/";
import { CommandTypeEnum } from "../../enums";

export interface LoginCommand extends Command<CommandTypeEnum.Login> {
    data: {
      clID: string;
      pw: string;
      options: {
        version: string;
        lang: string;
      };
      svcs: {
        objURI: SvcEnum[];
        svcExtension?: {
          extURI: ExtSvcEnum[];
        };
      };
      clTRID: string;
    };
  }