import { axiosClient } from "@/core/client/axios";
import { parseEppResponse } from "./parser";
import { logger } from "@/utils/logger";
import { EppResponse } from "@/types/commands/responses";

export class EppError extends Error {
  constructor(
    message: string,
    public readonly code?: string,
    public readonly details?: any,
  ) {
    super(message);
    this.name = "EppError";
  }
}

export const sendEppCommand = async (
  xmlCommand: string,
): Promise<EppResponse> => {
  try {
    const response = await axiosClient.post(
      process.env.EPP_SERVER_PATH!,
      xmlCommand,
    );

    const parsedResponse = await parseEppResponse(response.data);
    logger.debug("EPP response parsed successfully", { parsedResponse });

    return parsedResponse;
  } catch (error: any) {
    logger.error("EPP command failed:", error);
    throw new EppError(
      error.message,
      error.response?.data?.epp?.response?.result?.[0]?.$.code,
      error.response?.data,
    );
  }
};
