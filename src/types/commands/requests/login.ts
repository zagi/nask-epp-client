import { Command } from "./";

import type {
  SvcConfigType,
  ExtSvcConfigType,
  LoginOptionsConfigType,
} from "@/types";

import { CommandTypeEnum } from "@/types/enums";

export interface LoginCommand extends Command<CommandTypeEnum.LOGIN> {
  data: {
    clID: string;
    pw: string;
    options: LoginOptionsConfigType;
    svcs: {
      objURI: SvcConfigType[];
      svcExtension?: {
        extURI: ExtSvcConfigType[];
      };
    };
  };
}
