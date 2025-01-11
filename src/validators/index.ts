// consts
import { REQUIRED_ENV_VARS } from "./consts";
////
export const validateEnvVars = () => {
  const missingVars = REQUIRED_ENV_VARS.filter(
    (envVar) => !process.env[envVar],
  );

  if (missingVars.length > 0) {
    throw new Error(
      `Missing required environment variables: \n${missingVars.join(", \n")}`,
    );
  }
};
