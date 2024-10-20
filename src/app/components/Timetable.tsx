"use client";
import { Button } from "@/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import React, { useState } from "react";

import { comforta } from "@/app/layout";
import { cn } from "@/lib/utils";
import { TimetableEntry } from "./TimetableEntry";

// берем занятие с 10:00 по 11:00
// в каждом ряду проверяем при маппинге занятия по дню
// если время ряда совпадает с началом или концом или лежит внутри закрашиваем

const schedule = [
    {
        day: 2, // 1 - monday to 7 - sunday
        start: 12,
        end: 13,
        description: "ОГЭ физика",
        student: "Лиза",
        id: "1",
    },
    {
        day: 2, // 1 - monday to 7 - sunday
        start: 13.5,
        end: 14.5,
        description: "ОГЭ информатика",
        student: "Саша",
        id: "1",
    },
    {
        day: 3, // 1 - monday to 7 - sunday
        start: 10.5,
        end: 12,
        description: "ОГЭ русский язык",
        student: "Дима",
        id: "2",
    },
    {
        day: 4, // 1 - monday to 7 - sunday
        start: 12,
        end: 13,
        description: "ОГЭ информатика",
        student: "Антон",
        id: "3",
    },
    {
        day: 5, // 1 - monday to 7 - sunday
        start: 18,
        end: 19,
        description: "ОГЭ английский язык",
        student: "Таня",
        id: "4",
    },
    {
        day: 6, // 1 - monday to 7 - sunday
        start: 20,
        end: 21,
        description: "ОГЭ химия",
        student: "Маша",
        id: "5",
    },
];

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
            <div className="border rounded-full border-blue-400 bg-white grid grid-cols-8 mx-auto w-full font-semibold text-md text-center mt-4">
                <p>Время</p>
                {daysInWeek.map((day) => (
                    <div
                        key={day.toISOString()}
                        className={`border-blue-400 ${
                            day.getDate() === currentDay
                                ? "bg-blue-400 text-white"
                                : ""
                        }`}>
                        <p>
                            {day.toLocaleString("ru-RU", {
                                weekday: "short",
                            })}
                        </p>
                        <p className="">{day.getDate()}</p>
                    </div>
                ))}
            </div>
            <div className="border border-blue-400 bg-white grid grid-cols-8 mx-auto font-semibold text-md text-center mt-4">
                {timeSlots.map((slot, index) => (
                    <>
                        {" "}
                        <p
                            key={slot}
                            className={`text-left p-1 col-start-1 ${
                                index % 2 === 0
                                    ? "bg-white"
                                    : " bg-blue-400 text-white"
                            }`}>
                            {slot}
                        </p>
                        {schedule.map((lesson, index) => (
                            <TimetableEntry {...lesson} />
                        ))}
                    </>
                ))}
            </div>
        </div>
    );
}
