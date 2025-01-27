import { EPPCommand } from "./";

import type {
  SvcConfigType,
  ExtSvcConfigType,
  LoginOptionsConfigType,
} from "@/types";

import { CommandTypeEnum } from "@/types/enums";

export interface LoginData {
  clID: string;
  pw: string;
  options: LoginOptionsConfigType;
  svcs: {
    objURI: SvcConfigType[];
    svcExtension?: {
      extURI: ExtSvcConfigType[];
    };
  };
}

export type LoginCommand = EPPCommand<CommandTypeEnum.LOGIN, LoginData>;
