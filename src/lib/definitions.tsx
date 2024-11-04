import { z } from "zod";
import { SessionOptions } from "iron-session";

export const LoginFormSchema = z.object({
    username: z.string().emoji().trim().min(6),
    password: z.string().emoji().trim().min(8),
});

const phoneRegex = new RegExp(
  /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/
);

export const addTutorSchema = z.object({
    name: z.string().trim().emoji().min(3),
    surname: z.string().trim().emoji().min(3),
    patronym: z.string().trim().emoji().min(3),
    email: z.string().trim().email(),
    phone: z.string().trim().regex(phoneRegex, 'Введите корректный номер телефона!')
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
    username?: string;
    isLoggedIn: boolean;
    role: string;
}

export const defaultSession: SessionData = {
    isLoggedIn: false,
    role: 'student',
};

export const sessionOptions: SessionOptions = {
    password: process.env.SESSION_SECRET!,
    cookieName: "repetop-session",
    cookieOptions: {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
    },
};
