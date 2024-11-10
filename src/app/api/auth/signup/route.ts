'use server'

import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';
import { NextResponse } from 'next/server';
import { loginSessionSet } from '@/app/actions/actions';

const prisma = new PrismaClient()

export async function POST(req: any, res: any) {
    if (req.method === 'POST') {

        const data = await req.json();

        const { name, surname, patronym, password, email, phone, INVITE_LINK } = data;

        try {
            const inviteLinkInDB = await prisma.invite.findFirst({
                where: {
                   link: INVITE_LINK,
                }
            });

            const saltRounds = 10;
            const hashedPassword = await bcrypt.hash(password, saltRounds);

            const newUser = await prisma.user.create({
                data: {
                    name: name,
                    surname: surname,
                    patronym: patronym,
                    email: email,
                    password: hashedPassword,
                    role: inviteLinkInDB?.userRole,
                    phone: phone,
                }
            })

            const session = await loginSessionSet(newUser);
            await prisma.invite.delete({
                where: {
                    link: inviteLinkInDB?.link,
                }
            })
            await prisma.$disconnect();
            return NextResponse.json({success: true}, { status: 200});
    
        } catch (error) {
            return NextResponse.json({errors: error}, { status: 401});
        }
    
    } else {
        return NextResponse.json({error: 'METHOD UNALLOWED.'}, { status: 405});
    }
}
