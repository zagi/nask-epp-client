import { Command } from "./";

import {
  EppCommandSvcConfigType,
  EppCommandExtSvcConfigType,
  EppCommandLoginOptionsConfigType,
} from "@/types";

import { CommandTypeEnum } from "@/types/enums";

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
  };
}
