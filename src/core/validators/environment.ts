import { REQUIRED_ENV_VARS } from "@/config/constants";
import { logger } from "@/utils/logger";

export class EnvironmentError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "EnvironmentError";
  }
}

export const validateEnvironment = (): void => {
  const missingVars = REQUIRED_ENV_VARS.filter(
    (envVar) => !process.env[envVar],
  );

  if (missingVars.length > 0) {
    const errorMessage = `Missing required environment variables:\n${missingVars.join("\n")}`;
    logger.error(errorMessage);
    throw new EnvironmentError(errorMessage);
  }
};
