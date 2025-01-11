import { Command } from "./";
import { CommandTypeEnum } from "@/types/enums";

export interface HelloCommand extends Command<CommandTypeEnum.HELLO> {
  data: {};
}
