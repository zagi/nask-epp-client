// dependencies
import axios from "axios";
import { HttpsCookieAgent } from "http-cookie-agent/http";
////

// config
import { EPP_DEFAULTS } from "@/config";
import { getSSLConfig } from "./ssl";
////

// others
import { cookieJar } from "./cookie";
import { logger } from "@/utils/logger";
////

const { sslCert, sslKey, caBundle } = getSSLConfig();

const httpsAgent = new HttpsCookieAgent({
  cookies: { jar: cookieJar },
  cert: sslCert,
  key: sslKey,
  ca: caBundle,
  rejectUnauthorized: false,
});

export const axiosClient = axios.create({
  baseURL: process.env.EPP_SERVER_URL,
  httpsAgent,
  withCredentials: true,
  headers: {
    "Content-Type": "application/xml",
  },
  timeout: EPP_DEFAULTS.TIMEOUT,
});

axiosClient.interceptors.request.use(
  (config) => {
    logger.debug("Outgoing request:", {
      url: config.url,
      method: config.method,
    });
    return config;
  },
  (error) => {
    logger.error("Request error:", error);
    return Promise.reject(error);
  },
);

axiosClient.interceptors.response.use(
  (response) => {
    logger.debug("Response received:", { status: response.status });
    return response;
  },
  (error) => {
    logger.error("Response error:", error);
    return Promise.reject(error);
  },
);
