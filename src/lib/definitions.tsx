import { z } from "zod";
import { SessionOptions } from "iron-session";

export const LoginFormSchema = z.object({
    email: z.string().email().trim().email(),
    password: z.string().trim().min(8),
});

const phoneRegex = new RegExp(
    /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/
);

export const inviteFormValidateSchema = z
    .object({
        name: z
            .string()
            .trim()
            .min(2, { message: "Имя не может быть короче 2 букв" }),
        surname: z
            .string()
            .trim()
            .min(2, { message: "Фамилия не может быть короче 2 букв" }),
        patronym: z.string().trim(),
        email: z.string().trim().email(),
        phone: z
            .string()
            .trim()
            .regex(phoneRegex, "Введите корректный номер телефона!"),
        password: z
            .string()
            .trim()
            .min(8, { message: "Пароль должен быть не короче 8 символов" })
            .regex(/[A-Z]/, {
                message: "Пароль должен содержать 1 заглавную букву",
            })
            .regex(/[a-z]/, {
                message: "Пароль должен содержать 1 прописную букву",
            })
            .regex(/[0-9]/, {
                message: "Пароль должен содержать цифру",
            })
            .regex(/[^A-Za-z0-9]/, {
                message: "Пароль должен содержать специальный символ",
            }),

        repeatpassword: z.string().trim(),
    })
    .superRefine(({ repeatpassword, password }, ctx) => {
        if (repeatpassword !== password) {
            ctx.addIssue({
                code: "custom",
                message: "Пароли не совпадают",
                path: ["password"],
            });
        }
    });

export type FormState =
    | {
          errors?: {
              password?: string[];
          };
          message?: string;
      }
    | undefined;

export interface SessionData {
    userId?: number;
    isLoggedIn?: boolean;
    role?: string;
}

export const defaultSession: SessionData = {
    isLoggedIn: false,
};

export const sessionOptions: SessionOptions = {
    password: process.env.SESSION_SECRET!,
    cookieName: "repetop-session",
    cookieOptions: {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
    },
};
