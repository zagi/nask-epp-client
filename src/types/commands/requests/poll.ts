import { EPPCommand } from "./";
import { CommandTypeEnum, PollOperationEnum } from "@/types/enums";

export interface PollData {
  $: {
    op: PollOperationEnum;
    msgID?: string;
  };
}

export type PollCommand = EPPCommand<CommandTypeEnum.POLL, PollData>;
