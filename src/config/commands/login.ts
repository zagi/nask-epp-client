import { EppCommandLoginKeysEnum, EppCommandLoginOptionsKeysEnum } from "@/types/enums";

export const EppCommandLoginConfig = {
    [EppCommandLoginKeysEnum.CLIENT_ID]: process.env.CLIENT_ID || "test",
    [EppCommandLoginKeysEnum.PASSWORD]: process.env.PASSWORD || "foo-BAR2",
} as const

export const EppCommandLoginOptionsConfig = {
    [EppCommandLoginOptionsKeysEnum.VERSION]: process.env.OPTIONS_VERSION || "1.0",
    [EppCommandLoginOptionsKeysEnum.LANG]: process.env.OPTIONS_LANG || "pl",
} as const
