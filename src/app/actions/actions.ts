"use server";

import { getIronSession } from "iron-session";
import {
    sessionOptions,
    SessionData,
    defaultSession,
} from "../../lib/definitions";
import { cookies } from "next/headers";

export async function getSession(): Promise<Partial<SessionData>> {
    const session = await getIronSession<SessionData>(
        cookies(),
        sessionOptions
    );

    if (!session.isLoggedIn) {
        session.isLoggedIn = defaultSession.isLoggedIn;
    }

    return {
        isLoggedIn: session.isLoggedIn,
        userId: session.userId,
        role: session.role,
    };
}

export async function loginSessionSet(user): Promise<void> {
    console.log(user);
    try {
        const session = await getIronSession<SessionData>(
            cookies(),
            sessionOptions
        );

        session.isLoggedIn = true;
        session.userId = user.id;
        session.role = user.role;

        await session.save();
    } catch (error) {
        console.error("Error getting session:", error);
        return;
    }
    return;
}

export async function logoutSession(): Promise<void> {
    const session = await getIronSession<SessionData>(
        cookies(),
        sessionOptions
    );
    session.destroy();
    return;
}
