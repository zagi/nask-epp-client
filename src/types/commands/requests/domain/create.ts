import { DomainCommand } from "./";
import { CommandTypeEnum } from "@/types/enums";

export type DomainCreateCommand = DomainCommand<CommandTypeEnum.DOMAIN_CREATE>;
