import { Command } from "./command";
import { CommandTypeEnum } from "../../enums";

export interface HelloCommand extends Command<CommandTypeEnum.HELLO> {
    data: {};
}