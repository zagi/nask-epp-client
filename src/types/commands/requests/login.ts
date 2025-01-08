import { Command } from "./command";

import { EppCommandSvcConfigType, EppCommandExtSvcConfigType, EppCommandLoginOptionsConfigType } from "../../";

import { CommandTypeEnum } from "../../enums";

export interface LoginCommand extends Command<CommandTypeEnum.LOGIN> {
    data: {
      clID: string;
      pw: string;
      options: EppCommandLoginOptionsConfigType;
      svcs: {
        objURI: EppCommandSvcConfigType[];
        svcExtension?: {
          extURI: EppCommandExtSvcConfigType[];
        };
      };
      clTRID: string;
    };
  }