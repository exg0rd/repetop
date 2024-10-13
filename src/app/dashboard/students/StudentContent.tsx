import React from "react";
import StudentCard, { IStudentCardProps } from "../StudentCard";
import { cn } from "@/lib/utils";
import { comforta } from "@/app/layout";
import { Search } from "lucide-react";

interface Props {
    children: React.ReactElement;
}



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
                <StudentCard {...DATA} />
                <StudentCard {...DATA} />
                <StudentCard {...DATA} />
                <StudentCard {...DATA} />
            </div>
        </div>
    );
};
