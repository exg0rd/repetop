"use server";

import { getSession } from "@/app/actions/actions";
import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { genRandomString } from "@/app/actions/auth";

const prisma = new PrismaClient();

export async function POST(req: any, res: any) {
    if (req.method === "POST") {
        // const session = await getSession();
        // const userId = session.userId;
        // const userRole = session.role;

        const userRole = 'admin'
                
        const body = await req.json();
        const { name, surname, patronym, email, phone } = body;

        if (userRole !== 'admin') {
            return NextResponse.json({error: 'Доступ запрещён'}, { status: 401});
        }
        try {
            const role = 'tutor' // fix
            const generatedPassword = genRandomString();
            const password = await bcrypt.hash(generatedPassword, 10);
            const userData = await prisma.user.create({
                data: {
                    name, surname, patronym, email, phone, password, role
                }
            })
            console.log(userData)
            return NextResponse.json({success: true, userData : {...userData, password: generatedPassword}}, { status: 200});
        } catch(error) {
            console.log(error);
            return NextResponse.json({error: error}, { status: 500});
        }
    }
}
