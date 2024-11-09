import { Button } from "@/ui/button";
import Link from "next/link";
import React from "react";
import Image from "next/image";

export interface ITutorCardProps {
    id: string;
    name: string;
    surname: string;
    patronym: string;
    phone: string;
    avatarUrl: string;
    telegram: string;
    joinDate: string;
    email: string;
}

export const TutorCard: React.FC<ITutorCardProps> = ({
    id,
    name,
    surname,
    patronym,
    phone,
    avatarUrl,
    telegram,
    joinDate,
    email,
}): React.JSX.Element => {
    const DEFAULT_IMAGE_PATH = "/default_avatar.jpg"; // Default image path
    return (
        <div className="flex items-center justify-between bg-white rounded-lg shadow-md p-3 text-sm font-light transition-transform transform hover:scale-105">
            <div className="flex items-center">
                <Link href={`/tutors/${id}`}>
                    <Image
                        src={!avatarUrl ? DEFAULT_IMAGE_PATH : avatarUrl}
                        width={48}
                        height={48}
                        className="aspect-square rounded-full object-cover" alt={""}                    />
                </Link>
                <div className="ml-3 flex flex-col">
                    <span>{surname} {name}</span>
                    <span>{patronym}</span>
                </div>
            </div>
            <div className="text-xs gap-1 flex flex-col items-end">
                <a href={`tel:${phone}`} className="text-gray-700 hover:text-blue-500">{phone}</a>
                <a
                    className="font-bold text-gray-700 hover:text-blue-500"
                    href={`https://t.me/${telegram}`}
                >
                    {telegram}
                </a>
                <p className="text-xs text-gray-500">
                    С нами с {new Date(joinDate).toLocaleDateString("ru")}
                </p>
            </div>
        </div>
    );
};