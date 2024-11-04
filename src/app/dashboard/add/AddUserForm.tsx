import { comforta } from "@/app/layout";
import { cn } from "@/lib/utils";
import { Search } from "lucide-react";
import React from "react";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

export const AddUserForm: React.FC = () => {
    return (
        <div className={cn(comforta.className, "mx-auto mx-4 my-4")}>
            <div className="bg-white rounded-xl shadow-md p-6 text-lg">
                <div className="flex flex-row align-items-center justify-between">
                    <h1 className="font-extrabold text-2xl">
                        Панель добавления пользователей
                    </h1>
                    <div className="rounded-xl p-2 border shadow-sm text-center text-xs sm:text-sm relative">
                        <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                        <input
                            placeholder="Поиск"
                            className="pl-8 focus:outline-none focus:ring focus:border-blue-500"
                        />
                    </div>
                </div>
            </div>
            <div className="bg-white flex justify-items-center items-center gap-3 flex-row rounded-xl shadow-md p-6 text-lg mt-4">
                <h2>Добавить</h2>
                <Select>
                    <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder=""/>
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="light">Ученика</SelectItem>
                        <SelectItem value="dark">Преподавателя</SelectItem>
                    </SelectContent>
                </Select>
            </div>
        </div>
    );
};

export default AddUserForm;
