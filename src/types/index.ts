import { EppCommandSvcConfig, EppCommandExtSvcConfig } from "@/config";
import { EppCommandLoginOptionsConfig } from "@/config/commands/login";

export type EppCommandSvcConfigType =
  (typeof EppCommandSvcConfig)[keyof typeof EppCommandSvcConfig];
export type EppCommandExtSvcConfigType =
  (typeof EppCommandExtSvcConfig)[keyof typeof EppCommandExtSvcConfig];
export type EppCommandLoginOptionsConfigType =
  typeof EppCommandLoginOptionsConfig;
