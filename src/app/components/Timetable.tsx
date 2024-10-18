"use client";
import { Button } from "@/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import React, { useState } from "react";

import { comforta } from "@/app/layout";
import { cn } from "@/lib/utils";

// берем занятие с 10:00 по 11:00
// в каждом ряду проверяем при маппинге занятия по дню
// если время ряда совпадает с началом или концом или лежит внутри закрашиваем

export default function Timetable() {
    const [currentWeekStart, setCurrentWeekStart] = useState(
        getStartOfWeek(new Date())
    );
    const [currentDay, setCurrentDay] = useState(new Date().getDate());

    function getStartOfWeek(date) {
        const day = date.getUTCDay(); // Получаем день недели (0 - воскресенье, 1 - понедельник и т.д.)
        const diff = date.getDate() - day; // Разница между текущей датой и началом недели
        return new Date(date.setDate(diff)); // Возвращаем дату начала недели
    }

    const daysInWeek = Array.from({ length: 7 }, (_, i) => {
        const day = new Date(currentWeekStart);
        day.setDate(currentWeekStart.getDate() + i);
        return day;
    });

    const nextWeek = () => {
        const nextWeekStart = new Date(currentWeekStart);
        nextWeekStart.setDate(currentWeekStart.getDate() + 7);
        setCurrentWeekStart(nextWeekStart);
    };

    const prevWeek = () => {
        const prevWeekStart = new Date(currentWeekStart);
        prevWeekStart.setDate(currentWeekStart.getDate() - 7);
        setCurrentWeekStart(prevWeekStart);
    };

    const timeSlots = [];
    for (let hour = 9; hour <= 23; hour++) {
        timeSlots.push(`${hour}:00`);
        timeSlots.push(`${hour}:30`);
    }

    return (
        <div className={cn(comforta.className, "container mx-auto p-4")}>
            <div className="flex justify-between w-full">
                <Button
                    onClick={prevWeek}
                    className="px-4 py-2 text-white rounded">
                    <ArrowLeft />
                </Button>
                <h2 className="text-lg font-bold">
                    {currentWeekStart.toLocaleString("ru-RU", {
                        month: "long",
                        year: "numeric",
                    })}
                </h2>
                <Button
                    onClick={nextWeek}
                    className="px-4 py-2 text-white rounded">
                    <ArrowRight />
                </Button>
            </div>
            <div className="border border-blue-300 bg-white p-2 grid grid-cols-8 mx-auto w-full font-semibold text-md text-center mt-4">
                <div className="border-2 border-blue-700 flex items-center justify-center">
                    <p>Время</p>
                </div>
                {daysInWeek.map((day) => (
                    <div
                        key={day.toISOString()}
                        className={`border-2 border-blue-700 py-4 ${
                            day.getDate() === currentDay
                                ? "border-2 bg-blue-700 text-white"
                                : ""
                        }`}>
                        <p>
                            {day.toLocaleString("ru-RU", { weekday: "short" })}
                        </p>
                        <p className="">{day.getDate()}</p>
                    </div>
                ))}
                {timeSlots.map((slot, index) => (
                    <React.Fragment key={slot}>
                        <div className={index % 2 === 0 ? "border-blue-300 flex items-center justify-center" : "bg-blue-700 text-white flex items-center justify-center"}>
                            <p>{slot}</p>
                        </div>

                        {/* Dummy content for each day */}
                        {daysInWeek.map(() => (
                            <div className="flex items-center justify-center border-x border-blue-300">
                                <p>task</p>
                            </div>
                        ))}
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
}
