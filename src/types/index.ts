import { EppCommandSvcConfig, EppCommandExtSvcConfig } from "@/config";
import { EppCommandLoginOptionsConfig } from "@/config";

export type EppCommandSvcConfigType =
  (typeof EppCommandSvcConfig)[keyof typeof EppCommandSvcConfig];
export type EppCommandExtSvcConfigType =
  (typeof EppCommandExtSvcConfig)[keyof typeof EppCommandExtSvcConfig];
export type EppCommandLoginOptionsConfigType =
  typeof EppCommandLoginOptionsConfig;
