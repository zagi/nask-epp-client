import winston from "winston";

const myFormat = winston.format.printf((info) => {
  if (info.meta && info.meta instanceof Error) {
    return `[${info.level}][${info.timestamp}] ${info.message}: ${info.meta.stack}`;
  }
  return `[${info.level}][${info.timestamp}]: ${info.message}`;
});

export const logger = winston.createLogger({
  level: process.env.LOG_LEVEL || "info",
  format: winston.format.combine(
    winston.format.colorize(),
    winston.format.timestamp(),
    winston.format.splat(),
    myFormat,
  ),
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: `logs/error.log`, level: "error" }),
    new winston.transports.File({ filename: `logs/debug.log` }),
  ],
});
