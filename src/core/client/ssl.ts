import fs from "fs";
import { logger } from "@/utils/logger";

export const getSSLConfig = () => {
  try {
    const sslCert = fs.readFileSync(process.env.SSL_CERT_PATH);
    const sslKey = fs.readFileSync(process.env.SSL_KEY_PATH);
    const caBundle = fs.readFileSync(process.env.CA_BUNDLE_PATH);

    return { sslCert, sslKey, caBundle };
  } catch (error) {
    logger.error("Failed to load SSL certificates:", error);
    throw new Error("SSL configuration failed");
  }
};
