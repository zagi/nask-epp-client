import { Command } from "./";
import { CommandTypeEnum } from "@/types/enums";

export interface LogoutCommand extends Command<CommandTypeEnum.LOGOUT> {
  data: {};
}
