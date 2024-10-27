import { z } from 'zod'
import { SessionOptions } from "iron-session";
 
export const LoginFormSchema = z.object({
  username: z
    .string()
    .trim(),
  password: z
    .string()
    .trim(),
})
 
export type FormState =
  | {
      errors?: {
        password?: string[]
      }
      message?: string
    }
  | undefined

  export interface SessionData {
    userId?: number;
    username?: string;
    isLoggedIn: boolean;
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