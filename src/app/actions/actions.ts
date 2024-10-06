"use server";

import { getIronSession } from "iron-session";
import {
    defaultSession,
    sessionOptions,
    SessionData,
    User,
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
        username: session.username,
    };
}

export async function loginSessionSet(user: User): Promise<void> {
    const session = await getIronSession<SessionData>(
        cookies(),
        sessionOptions
    );

    try {
        const session = await getIronSession<SessionData>(
            cookies(),
            sessionOptions
        );

        if (session && Object.keys(session).length > 0) {
            session.isLoggedIn = true;
            session.userId = user.id;
            session.username = user.username;

            await session.save();

            return;
        }
    } catch (error) {
        console.error("Error getting session:", error);
        return;
    }
}

export async function logoutSession(): Promise<void> {
    const session = await getIronSession<SessionData>(
        cookies(),
        sessionOptions
    );
    session.destroy();
    return;
}
