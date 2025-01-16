import { CommandTypeEnum, PollOperationEnum } from "@/types/enums";
import type { PollCommand } from "@/types/commands/requests/poll";
import { buildEppCommand } from "../xml";
import { generateClTRID } from "@/utils/transactions";

export const buildPollCommand = (
  operation: PollOperationEnum,
  msgID?: string,
): string => {
  const pollCommand: PollCommand = {
    type: CommandTypeEnum.POLL,
    data: {
      $: {
        op: operation,
        ...(msgID && { msgID }),
      },
    },
    clTRID: generateClTRID(CommandTypeEnum.POLL),
  };

  return buildEppCommand(pollCommand);
};
