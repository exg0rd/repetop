"use server";

import { loginSessionSet } from "@/app/actions/actions";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(req: any, res: any) {

    if (req.method === "POST") {
        const body = await req.json();
        const { email, password } = body;

        const existingUser = await prisma.user.findFirst({
            omit: {
                password: true,
            },
            where: {
                email: email,
            },
        });
        if (
            existingUser &&
            (await bcrypt.compare(password, existingUser.password))
        ) {
            const session = await loginSessionSet(existingUser);
            await prisma.$disconnect();
            return NextResponse.json({ user: existingUser }, { status: 200 });
        } else {
            console.log(password, await bcrypt.hash(password, 10))
            return NextResponse.json(
                { errors: "Неправильный логин или пароль" },
                { status: 401 }
            );
        }
    }
}
