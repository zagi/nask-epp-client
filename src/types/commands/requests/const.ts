import {
  CommandEnum,
  CommandResourceEnum,
  CommandTypeEnum,
} from "@/types/enums";

export const RESOURCE_COMMAND_MAP = {
  [CommandTypeEnum.DOMAIN_CHECK]: {
    resource: CommandResourceEnum.DOMAIN,
    command: CommandEnum.CHECK,
  },
  [CommandTypeEnum.DOMAIN_CREATE]: {
    resource: CommandResourceEnum.DOMAIN,
    command: CommandEnum.CREATE,
  },
  [CommandTypeEnum.DOMAIN_INFO]: {
    resource: CommandResourceEnum.DOMAIN,
    command: CommandEnum.INFO,
  },
  [CommandTypeEnum.HELLO]: { command: CommandEnum.HELLO, resource: null },
  [CommandTypeEnum.LOGIN]: { command: CommandEnum.LOGIN, resource: null },
  [CommandTypeEnum.LOGOUT]: { command: CommandEnum.LOGOUT, resource: null },
  [CommandTypeEnum.POLL]: { command: CommandEnum.POLL, resource: null },
} as const;
