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
    const DEFAULT_IMAGE_PATH = "/default_avatar.jpg"; // Update with your default image path
    return (
        <div className="flex flex-col h-auto bg-white rounded-xl shadow-lg p-2 text-sm font-light transition-transform transform hover:scale-105">
            <div className="grid grid-cols-6 gap-4 p-1">
                <div className="col-start-1 col-span-2">
                    <Link href={`tutors/${id}`}>
                        <Image
                            src={!avatarUrl ? DEFAULT_IMAGE_PATH : avatarUrl}
                            alt={`${surname} ${name} ${patronym}`}
                            width={64}
                            height={64}
                            className="aspect-square rounded-full object-cover mr-auto h-full w-1/2 sm:w-full"
                        />
                    </Link>
                </div>
                <div className="col-start-3 col-span-4 flex flex-row sm:flex-col flex-wrap font-bold items-start gap-2">
                    <p>{surname}</p>
                    <p>{name}</p>
                    <p>{patronym}</p>
                </div>
            </div>
            <hr className="my-2 border-gray-300" />
            <div className=" p-2 text-xs">
                <div className="flex flex-col gap-3">
                    <a href={`tel:${phone}`}>{phone}</a>
                    <a href={`mailto:${email}`}>{email}</a>
                    <a
                        className="font-bold"
                        href={`https://t.me/${telegram}`}>
                        {telegram}
                    </a>
                    <p className="mt-3">
                        С нами с {new Date(joinDate).toLocaleDateString("ru")}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default TutorCard;
