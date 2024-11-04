"use server";

import { getSession } from "@/app/actions/actions";
import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

export async function POST(req: any, res: any) {
    if (req.method === "POST") {
        const session = await getSession();
        const userId = session.userId;
        const userRole = session.role;
                
        const body = await req.json();
        const { name, surname, patronym, email, phone } = body;

        console.log(name, surname, patronym, email, phone);

        if (userRole !== 'admin') {
            return NextResponse.json({error: 'Доступ запрещён'}, { status: 401});
        }
        try {
            const role = 'tutor'
            const password = await bcrypt.hash(email, 10);
            const task = await prisma.user.create({
                data: {
                    name, surname, patronym, email, phone, password, role
                }
            })
            return NextResponse.json({success: true, task : task}, { status: 200});
        } catch(error) {
            console.log(error);
            return NextResponse.json({error: error}, { status: 500});
        }
    }
}
