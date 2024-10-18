import React from "react";
import { cn } from "@/lib/utils";
import { comforta } from "@/app/layout";
import Timetable from "@/app/components/Timetable";

interface Props {
    children: React.ReactElement;
}

export const TimetableContent: React.FC<Props> = () => {
    return (
        <div className={cn(comforta.className, "mx-4 my-4")}>
            <div className="bg-white rounded-xl shadow-md p-8 text-lg">
                <div className="flex flex-row align-items-center justify-between">
                    <h1 className="font-extrabold text-2xl">
                        Расписание занятий
                    </h1>
                    <div className="rounded-xl p-2 border shadow-sm text-center text-xs sm:text-sm relative">
                        <p>
                            {new Date().toLocaleDateString("ru", {
                                dateStyle: "full",
                            })}
                        </p>
                    </div>
                </div>
            </div>
            <div className="bg-white rounded-xl shadow-md p-8 my-4 text-lg">
                <Timetable />
            </div>
        </div>
    );
};

export default TimetableContent;
