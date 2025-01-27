import { EPPCommand } from "./";
import { CommandTypeEnum } from "@/types/enums";

export type HelloCommand = EPPCommand<CommandTypeEnum.HELLO, {}>;
