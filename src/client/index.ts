import fs from "fs";
import axios from "axios";
import { HttpsCookieAgent } from "http-cookie-agent/http";
import { CookieJar } from "tough-cookie";

const sslCert = fs.readFileSync(process.env.SSL_CERT_PATH);
const sslKey = fs.readFileSync(process.env.SSL_KEY_PATH);
const caBundle = fs.readFileSync(process.env.CA_BUNDLE_PATH);

const cookieJar = new CookieJar();

const httpsAgent = new HttpsCookieAgent({
  cookies: { jar: cookieJar },
  cert: sslCert,
  key: sslKey,
  ca: caBundle,
  rejectUnauthorized: false,
});

const client = axios.create({
  baseURL: process.env.EPP_SERVER_URL,
  httpsAgent,
  withCredentials: true,
  headers: {
    "Content-Type": "application/xml",
  },
});

export { client, cookieJar };
