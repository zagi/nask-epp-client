import { UnwrappedCommands } from "@/types/commands";
import { CommandTypeEnum } from "@/types/enums";

export const isUnwrappedCommand = (
  type: CommandTypeEnum,
): type is UnwrappedCommands => {
  return [
    CommandTypeEnum.LOGIN,
    CommandTypeEnum.LOGOUT,
    CommandTypeEnum.POLL,
    CommandTypeEnum.HELLO,
  ].includes(type);
};
