"use server";

import { getSession } from "@/app/actions/actions";
import { genRandomString } from "@/app/actions/auth";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(req: any, res: any) {
    if (req.method === "POST") {
        const body = await req.json();
        const session = await getSession();

        if ((session.role === 'admin' || session.role === 'tutor') && session.userId) {
            const inviteLink = await prisma.invite.create({
                data: {
                    link: genRandomString(16),
                    createdById: session.userId,
                    userRole: (session.role === 'admin' ? 'tutor' : 'student'),
                },
            });
            return NextResponse.json(
                {   inviteLink : inviteLink.link}, 
                { status: 200 }
            );
        } else {
            return NextResponse.json(
                { errors: "Доступ запрещён" },
                { status: 401 }
            );
        }
    }
}
