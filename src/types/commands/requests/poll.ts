import { Command } from "./";
import { CommandTypeEnum, EppCommandPollOperationEnum } from "@/types/enums";

export interface PollCommand extends Command<CommandTypeEnum.POLL> {
  data: {
    $: {
      op: EppCommandPollOperationEnum;
      msgID?: string;
    };
  };
}
