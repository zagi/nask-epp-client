import { parseString } from "xml2js";
import { promisify } from "util";
import { EppResponse } from "@/types/commands/responses";
import { logger } from "@/utils/logger";

const parseXmlString = promisify(parseString);

export const parseEppResponse = async (
  xmlResponse: string,
): Promise<EppResponse> => {
  try {
    const parsed = await parseXmlString(xmlResponse);
    return parsed as EppResponse;
  } catch (error) {
    logger.error("Failed to parse EPP response:", error);
    throw new Error("Failed to parse EPP response");
  }
};
