import { Command } from "./command.ts";
import { CommandTypeEnum } from "../../enums";

export interface HelloCommand extends Command<CommandTypeEnum.Hello> {
    data: {};
}