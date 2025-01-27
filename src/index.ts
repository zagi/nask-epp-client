import "dotenv/config";
import { validateEnvironment } from "@/core/validators/environment";
import { logger } from "@/utils/logger";
import { buildLoginCommand } from "@/core/builders/commands/login";
import { buildDomainCreateCommand } from "@/core/builders/commands/domain/create";
import { sendEppCommand } from "@/services/epp/commands";

const main = async () => {
  try {
    validateEnvironment();
    logger.info("Environment validated successfully");

    const loginXml = buildLoginCommand();
    logger.debug("Login command built successfully", { loginXml });

    const domainCreateXml = buildDomainCreateCommand(
      "example.com",
      ["ns1.example.com", "ns2.example.com"],
      "registrant",
      {
        "domain:pw": "password",
      },
    );
    logger.debug("Create command built successfully", { domainCreateXml });
    console.log(domainCreateXml);
    // const response = await sendEppCommand(loginXml);
    // logger.info("EPP command executed successfully", { response });

    // return response;
  } catch (error) {
    logger.error("Application error:", error);
    throw error;
  }
};

export default main;

(async () => {
  await main();
})();
