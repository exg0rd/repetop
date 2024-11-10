"use client";
import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { comforta } from "@/app/layout";
import { Plus, Search } from "lucide-react";
import { ITutorCardProps, TutorCard } from "./TutorCard";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Button } from "@/ui/button";
import { usePOST } from "@/hooks/usePOST";

interface Props {
    children: React.ReactElement;
}

const DATA: ITutorCardProps[] = [
    {
        id: "1",
        name: "Иван",
        surname: "Иванов",
        patronym: "Иванович",
        phone: "+7 (999) 123-45-67",
        avatarUrl: "",
        telegram: "@Ivanov_Ivan",
        joinDate: "2020-01-15T10:00:00Z",
        email: "ivanov@example.com",
    },
    {
        id: "2",
        name: "Марина",
        surname: "Петрова",
        patronym: "Николаевна",
        phone: "+7 (888) 987-65-43",
        avatarUrl: "",
        telegram: "@Petrova_Marina",
        joinDate: "2019-05-20T12:30:00Z",
        email: "petrova@example.com",
    },
    {
        id: "3",
        name: "Алексей",
        surname: "Сидоров",
        patronym: "Вячеславович",
        phone: "+7 (777) 456-78-90",
        avatarUrl: "",
        telegram: "@Sidorov_Alexey",
        joinDate: "2021-11-03T09:15:00Z",
        email: "sidorov@example.com",
    },
    {
        id: "4",
        name: "Ольга",
        surname: "Кузнецова",
        patronym: "Семёновна",
        phone: "+7 (666) 555-44-33",
        avatarUrl: "",
        telegram: "@Kuznetsova_Olga",
        joinDate: "2022-02-28T14:25:00Z",
        email: "kuznetsova@example.com",
    },
    {
        id: "5",
        name: "Сергей",
        surname: "Васильев",
        patronym: "Тимофеевич",
        phone: "+7 (111) 222-33-44",
        avatarUrl: "",
        telegram: "@Vasiliev_Sergey",
        joinDate: "2021-08-17T18:40:00Z",
        email: "vasiliev@example.com",
    },
    {
        id: "6",
        name: "Елена",
        surname: "Орлова",
        patronym: "Владимировна",
        phone: "+7 (333) 444-55-66",
        avatarUrl: "",
        telegram: "@Orlova_Elena",
        joinDate: "2020-04-12T16:50:00Z",
        email: "orlova@example.com",
    },
    {
        id: "7",
        name: "Андрей",
        surname: "Николаев",
        patronym: "Андреевич",
        phone: "+7 (777) 000-99-88",
        avatarUrl: "",
        telegram: "@Nikolaev_Andrey",
        joinDate: "2022-06-19T13:35:00Z",
        email: "nikolaev@example.com",
    },
    {
        id: "8",
        name: "Анна",
        surname: "Федорова",
        patronym: "Олеговна",
        phone: "+7 (999) 888-77-66",
        avatarUrl: "",
        telegram: "@Fedorova_Anna",
        joinDate: "2020-07-23T22:10:00Z",
        email: "fedorova@example.com",
    },
];

export const TutorsContent: React.FC<Props> = () => {

    const INVITE_URL_SCHEME = `${process.env.API_URL}/invite/`;

    const [inviteLink, setInviteLink] = useState('');

    const sortByFIO = (a, b) => {
        if (a.surname < b.surname) return -1;
        if (a.surname > b.surname) return 1;
      
        if (a.name < b.name) return -1;
        if (a.name > b.name) return 1;
      
        if (a.patronymic < b.patronymic) return -1;
        if (a.patronymic > b.patronymic) return 1;
      
        return 0;
    }

    const { postRequest, res, isLoading, error } = usePOST({url: '/api/auth/invite', body: {}});

    const onCreateInviteLink = async () => {
        await postRequest({});
    }

    useEffect(() => {
        if (res && res.inviteLink) {
            setInviteLink(INVITE_URL_SCHEME + res.inviteLink);
        }
    }, [res]);

    return (
        <div className={cn(comforta.className, "mx-auto mx-4 my-4")}>
            <div className="bg-white rounded-xl shadow-md p-4 text-sm md:text-md lg:text-lg">
                <div className="flex flex-row flex-wrap items-center justify-between gap-3">
                    <p className="text-center font-extrabold">
                        Преподаватели проекта
                    </p>
                    <div className="rounded-xl p-3 border shadow-sm text-center text-xs sm:text-sm relative w-full">
                        <Search className="absolute text-sm left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                        <input
                            placeholder="Поиск преподавателя..."
                            className="pl-8 focus:outline-none focus:ring focus:border-blue-500 w-full"
                        />
                    </div>
                </div>
                
            </div>
            <div className="bg-white flex justify-items-center items-center gap-3 flex-row rounded-xl shadow-md p-6 text-lg mt-4">
                <h2>Добавить</h2>
                <Select>
                    <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="light">Ученика</SelectItem>
                        <SelectItem value="dark">Преподавателя</SelectItem>
                    </SelectContent>
                </Select>
                <Button onClick={onCreateInviteLink}><Plus/></Button>
                <p>{inviteLink}</p>
            </div>
            <div className="grid mx-auto my-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {DATA.sort(sortByFIO).map((tutor, index) => (
                    <TutorCard
                        key={index}
                        {...DATA[index]}
                    />
                ))}
            </div>
        </div>
    );
};

export default TutorsContent;
