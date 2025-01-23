import { Command } from "./";
import { CommandTypeEnum, PollOperationEnum } from "@/types/enums";

export interface PollCommand extends Command<CommandTypeEnum.POLL> {
  data: {
    $: {
      op: PollOperationEnum;
      msgID?: string;
    };
  };
}
