import { SvcConfig, ExtSvcConfig } from "@/config";
import { LoginOptionsConfig } from "@/config";

export type SvcConfigType = (typeof SvcConfig)[keyof typeof SvcConfig];
export type ExtSvcConfigType = (typeof ExtSvcConfig)[keyof typeof ExtSvcConfig];
export type LoginOptionsConfigType = typeof LoginOptionsConfig;
