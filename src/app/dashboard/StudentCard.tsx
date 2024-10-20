import { Button } from "@/ui/button";
import Link from "next/link";
import React from "react";

export interface IStudentCardProps {
    id: string;
    name: string;
    surname: string;
    phone: string;
    grade: number;
    avatarUrl: string;
    parentName: string;
    parentPhone: string;
    subject: string;
}

export const StudentCard: React.FC<IStudentCardProps> = ({
    id,
    name,
    surname,
    phone,
    avatarUrl,
    parentName,
    parentPhone,
    subject,
    grade,
}): React.JSX.Element => {
    return (
        <div className="flex flex-col h-auto bg-white rounded-xl shadow-lg p-4 text-sm font-light transition-transform transform hover:scale-105">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-2">
                <div className="flex flex-col items-start gap-2">
                    <p className="text-xl font-bold">{name}</p>
                    <p className="text-xl font-bold">{surname}</p>
                </div>
                <div className="text-right">
                    <p className="text-lg font-semibold">{grade} класс</p>
                    <p className="text-gray-600">{subject}</p>
                </div>
            </div>
            <hr className="my-2 border-gray-300" />
            <div className="grid grid-cols-2 gap-4 p-2 text-xs">
                <div>
                    <p className="font-bold mb-1">Контактные данные:</p>
                    <p>{phone}</p>
                </div>
                <div>
                    <p className="font-bold mb-1 min-h-[30px]">Родитель: {parentName}</p>
                    <p>{parentPhone}</p>
                </div>
                <div>
                    <Link href={`students/${id}`}></Link>
                    <img
                        src={avatarUrl}
                        className="w-[128px] h-[128px] rounded-full object-cover mx-auto"
                    />
                </div>
                <div className="flex flex-col justify-items-center my-auto gap-3">
                    <Button className="text-xs">
                        <Link href={`students/${id}/tests`}>Тесты</Link>
                    </Button>
                    <Button className="text-xs">
                        <Link href={`students/${id}/stats`}>Статистика</Link>
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default StudentCard;
