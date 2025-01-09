import { Command } from "./";
import { CommandTypeEnum } from "../../enums";

export interface LogoutCommand extends Command<CommandTypeEnum.LOGOUT> {
    data: {};
}