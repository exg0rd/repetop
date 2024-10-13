import React from "react";
import StudentCard, { IStudentCardProps } from "../StudentCard";
import { cn } from "@/lib/utils";
import { comforta } from "@/app/layout";
import { Search } from "lucide-react";

interface Props {
    children: React.ReactElement;
}

const DATA: IStudentCardProps[] = [
    {
        id: "u481-3fe3-53cc-1212",
        name: "Витя",
        surname: "Горохов",
        phone: "+79218517333",
        avatarUrl:
            "https://media.istockphoto.com/id/1337144146/ru/%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%BD%D0%B0%D1%8F/%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80-%D0%B7%D0%BD%D0%B0%D1%87%D0%BA%D0%B0-%D0%BF%D1%80%D0%BE%D1%84%D0%B8%D0%BB%D1%8F-%D0%B0%D0%B2%D0%B0%D1%82%D0%B0%D1%80%D0%B0-%D0%BF%D0%BE-%D1%83%D0%BC%D0%BE%D0%BB%D1%87%D0%B0%D0%BD%D0%B8%D1%8E.jpg?s=612x612&w=0&k=20&c=fHyhvKma_mzzlFxVsuAoB7juqZOWt-ZUO56PRvkAO_c=",
        parentName: "Семён Павлович",
        parentPhone: "+7958382422",
        subject: "ОГЭ физика",
        grade: 9,
    },
    {
        id: "u561-3ae3-53ac-1212",
        name: "Анна",
        surname: "Борисова",
        phone: "+79854196506",
        avatarUrl:
        "https://media.istockphoto.com/id/1337144146/ru/%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%BD%D0%B0%D1%8F/%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80-%D0%B7%D0%BD%D0%B0%D1%87%D0%BA%D0%B0-%D0%BF%D1%80%D0%BE%D1%84%D0%B8%D0%BB%D1%8F-%D0%B0%D0%B2%D0%B0%D1%82%D0%B0%D1%80%D0%B0-%D0%BF%D0%BE-%D1%83%D0%BC%D0%BE%D0%BB%D1%87%D0%B0%D0%BD%D0%B8%D1%8E.jpg?s=612x612&w=0&k=20&c=fHyhvKma_mzzlFxVsuAoB7juqZOWt-ZUO56PRvkAO_c=",
        parentName: "Александр",
        parentPhone: "+79168107914",
        subject: "ОГЭ математика",
        grade: 9,
    },
    {
        id: "u481-3ff3-53cd-1212",
        name: "Николай",
        surname: "Петров",
        phone: "+79854196507",
        avatarUrl:
            "https://media.istockphoto.com/id/1337144146/ru/%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%BD%D0%B0%D1%8F/%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80-%D0%B7%D0%BD%D0%B0%D1%87%D0%BA%D0%B0-%D0%BF%D1%80%D0%BE%D1%84%D0%B8%D0%BB%D1%8F-%D0%B0%D0%B2%D0%B0%D1%82%D0%B0%D1%80%D0%B0-%D0%BF%D0%BE-%D1%83%D0%BC%D0%BE%D0%BB%D1%87%D0%B0%D0%BD%D0%B8%D1%8E.jpg?s=612x612&w=0&k=20&c=fHyhvKma_mzzlFxVsuAoB7juqZOWt-ZUO56PRvkAO_c=",
        parentName: "Татьяна",
        parentPhone: "+79168107915",
        subject: "ОГЭ русский язык",
        grade: 9,
    },
    {
        id: "u481-3fd3-53ce-1212",
        name: "Виктория",
        surname: "Михайлова",
        phone: "+79854196508",
        avatarUrl:
            "https://media.istockphoto.com/id/1337144146/ru/%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%BD%D0%B0%D1%8F/%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80-%D0%B7%D0%BD%D0%B0%D1%87%D0%BA%D0%B0-%D0%BF%D1%80%D0%BE%D1%84%D0%B8%D0%BB%D1%8F-%D0%B0%D0%B2%D0%B0%D1%82%D0%B0%D1%80%D0%B0-%D0%BF%D0%BE-%D1%83%D0%BC%D0%BE%D0%BB%D1%87%D0%B0%D0%BD%D0%B8%D1%8E.jpg?s=612x612&w=0&k=20&c=fHyhvKma_mzzlFxVsuAoB7juqZOWt-ZUO56PRvkAO_c=",
        parentName: "Игорь",
        parentPhone: "+79168107916",
        subject: "ОГЭ информатика",
        grade: 9,
    },
    {
        id: "u481-3fc3-53cf-1212",
        name: "Яна",
        surname: "Белова",
        phone: "+79854196509",
        avatarUrl:
        "https://media.istockphoto.com/id/1337144146/ru/%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%BD%D0%B0%D1%8F/%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80-%D0%B7%D0%BD%D0%B0%D1%87%D0%BA%D0%B0-%D0%BF%D1%80%D0%BE%D1%84%D0%B8%D0%BB%D1%8F-%D0%B0%D0%B2%D0%B0%D1%82%D0%B0%D1%80%D0%B0-%D0%BF%D0%BE-%D1%83%D0%BC%D0%BE%D0%BB%D1%87%D0%B0%D0%BD%D0%B8%D1%8E.jpg?s=612x612&w=0&k=20&c=fHyhvKma_mzzlFxVsuAoB7juqZOWt-ZUO56PRvkAO_c=",
        parentName: "Елена",
        parentPhone: "+79168107917",
        subject: "ОГЭ английский",
        grade: 9,
    },
    {
        id: "u481-3fb3-53d0-1212",
        name: "Марк",
        surname: "Романов",
        phone: "+79854196510",
        avatarUrl:
        "https://media.istockphoto.com/id/1337144146/ru/%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%BD%D0%B0%D1%8F/%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80-%D0%B7%D0%BD%D0%B0%D1%87%D0%BA%D0%B0-%D0%BF%D1%80%D0%BE%D1%84%D0%B8%D0%BB%D1%8F-%D0%B0%D0%B2%D0%B0%D1%82%D0%B0%D1%80%D0%B0-%D0%BF%D0%BE-%D1%83%D0%BC%D0%BE%D0%BB%D1%87%D0%B0%D0%BD%D0%B8%D1%8E.jpg?s=612x612&w=0&k=20&c=fHyhvKma_mzzlFxVsuAoB7juqZOWt-ZUO56PRvkAO_c=",
        parentName: "Екатерина",
        parentPhone: "+79168107918",
        subject: "ОГЭ химия",
        grade: 9,
    },
];

export const StudentContent: React.FC<Props> = () => {
    return (
        <div className={cn(comforta.className, "mx-auto mx-4 my-4")}>
            <div className="bg-white rounded-xl shadow-md p-8 text-lg">
                <div className="flex flex-row align-items-center justify-between">
                    <h1 className="font-extrabold text-2xl">Мои ученики</h1>
                    <div className="rounded-xl p-2 border shadow-sm text-center text-sm relative">
                        <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                        <input
                            placeholder="Поиск ученика..."
                            className="pl-8 focus:outline-none focus:ring focus:border-blue-500"
                        />
                    </div>
                </div>
            </div>
            <div className="grid mx-auto my-4 grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {DATA.map((student, index) => (
                    <StudentCard
                        key={index}
                        {...DATA[index]}
                    />
                ))}
            </div>
        </div>
    );
};
