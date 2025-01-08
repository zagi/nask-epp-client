import dotenv from 'dotenv'

import { EppConfigKeysEnum, EppCommandSvcConfigKeysEnum, EppCommandExtSvcConfigKeysEnum, EppCommandLoginKeysEnum, EppCommandLoginOptionsKeysEnum } from '../types/enums';

dotenv.config()

export const EppConfig = {
    [EppConfigKeysEnum.XMLNS]: "http://www.dns.pl/nask-epp-schema/epp-2.1",
    [EppConfigKeysEnum.XMLNS_XSI]: "http://www.w3.org/2001/XMLSchema-instance",
    [EppConfigKeysEnum.XSI_SCHEMA_LOCATION]: "http://www.dns.pl/nask-epp-schema/epp-2.1 epp-2.1.xsd",
  } as const;

export const EppCommandSvcConfig = {
    [EppCommandSvcConfigKeysEnum.CONTACT]: process.env.SVC_CONTACT || "http://www.dns.pl/nask-epp-schema/contact-2.1", 
    [EppCommandSvcConfigKeysEnum.HOST]: process.env.SVC_HOST || "http://www.dns.pl/nask-epp-schema/host-2.1",
    [EppCommandSvcConfigKeysEnum.DOMAIN]: process.env.SVC_DOMAIN || "http://www.dns.pl/nask-epp-schema/domain-2.1",
    [EppCommandSvcConfigKeysEnum.FUTURE]: process.env.SVC_FUTURE || "http://www.dns.pl/nask-epp-schema/future-2.1",
} as const

export const EppCommandExtSvcConfig = {
    [EppCommandExtSvcConfigKeysEnum.EXT_CON]: process.env.EXT_SVC_CONTACT || "http://www.dns.pl/nask-epp-schema/extcon-2.1",
    [EppCommandExtSvcConfigKeysEnum.EXT_DOM]: process.env.EXT_SVC_DOMAIN || "http://www.dns.pl/nask-epp-schema/extdom-2.1",
} as const

export const EppCommandLoginConfig = {
    [EppCommandLoginKeysEnum.CLIENT_ID]: process.env.CLIENT_ID || "test",
    [EppCommandLoginKeysEnum.PASSWORD]: process.env.PASSWORD || "foo-BAR2",
} as const

export const EppCommandLoginOptionsConfig = {
    [EppCommandLoginOptionsKeysEnum.VERSION]: process.env.OPTIONS_VERSION || "1.0",
    [EppCommandLoginOptionsKeysEnum.LANG]: process.env.OPTIONS_LANG || "pl",
} as const