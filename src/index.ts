import "dotenv/config";
import { validateEnvironment } from "@/core/validators/environment";
import { logger } from "@/utils/logger";
import { buildLoginCommand } from "@/core/builders/commands/login";
import { sendEppCommand } from "@/services/epp/commands";

const main = async () => {
  try {
    validateEnvironment();
    logger.info("Environment validated successfully");

    const loginXml = buildLoginCommand();
    logger.debug("Login command built successfully", { loginXml });
    console.log(loginXml);
    const response = await sendEppCommand(loginXml);
    logger.info("EPP command executed successfully", { response });

    return response;
  } catch (error) {
    logger.error("Application error:", error);
    throw error;
  }
};

export default main;

(async () => {
  await main();
})();
