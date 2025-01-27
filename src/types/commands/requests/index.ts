import {
  CommandTypeEnum,
  CommandResourceEnum,
  CommandEnum,
} from "@/types/enums";

export type UnwrappedCommands = Extract<
  CommandTypeEnum,
  | CommandTypeEnum.HELLO
  | CommandTypeEnum.LOGIN
  | CommandTypeEnum.LOGOUT
  | CommandTypeEnum.POLL
>;

export type WrappedCommands = Exclude<CommandTypeEnum, UnwrappedCommands>;

export interface SecDNSDsData {
  "secDNS:keyTag": string;
  "secDNS:alg": string;
  "secDNS:digestType": string;
  "secDNS:digest": string;
}

export interface SecDNSCreate {
  $: {
    xmlns: string;
    schemaLocation: string;
  };
  "secDNS:dsData": SecDNSDsData;
}

interface CommandExtension {
  extension?: {
    "secDNS:create"?: SecDNSCreate;
  };
}

// Final EPP command type
export type EPPCommand<T extends CommandTypeEnum, D> = {
  type: T;
  data: T extends WrappedCommands ? D & CommandExtension : D;
  clTRID?: string;
};
