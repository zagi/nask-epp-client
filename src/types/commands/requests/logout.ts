import { EPPCommand } from "./";
import { CommandTypeEnum } from "@/types/enums";

export type LogoutCommand = EPPCommand<CommandTypeEnum.LOGOUT, {}>;
