import { CommandTypeEnum } from "../../enums";

export interface Command<T extends CommandTypeEnum, D = Record<string, any>> {
    type: T;
    data: D;
    clTRID?: string,
}
