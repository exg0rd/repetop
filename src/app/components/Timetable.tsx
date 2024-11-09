"use client";
import { Button } from "@/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import React, { useState } from "react";

import { comforta } from "@/app/layout";
import { cn } from "@/lib/utils";
import { TimetableEntry } from "./TimetableEntry";
import useMediaQuery from "@/hooks/useMediaQuery";

// сделать выбор дня по клику для мобилки
// рендерить занятия в рамках одного дня, фильтруя массив по дню недели и дополняя до ячеек пустыми дивами

const schedule = [
    {
        day: 0, // 0 - monday to 6 - sunday
        start: 12,
        end: 13,
        description: "ОГЭ физика",
        student: "Лиза",
        id: "1",
    },
    {
        day: 0, // 0 - monday to 6 - sunday
        start: 13,
        end: 14,
        description: "ОГЭ физика",
        student: "Лиза",
        id: "2",
    },
    {
        day: 0, // 0 - monday to 6 - sunday
        start: 15,
        end: 16,
        description: "ОГЭ информатика",
        student: "Лиза",
        id: "2",
    },
    {
        day: 1, // 1 - monday to 6 - sunday
        start: 13.5,
        end: 14.5,
        description: "ОГЭ информатика",
        student: "Саша",
        id: "2",
    },
    {
        day: 2, // 0 - monday to 6 - sunday
        start: 10.5,
        end: 12,
        description: "ОГЭ русский язык",
        student: "Дима",
        id: "3",
    },
    {
        day: 4, // 1 - monday to 7 - sunday
        start: 12,
        end: 13,
        description: "ОГЭ информатика",
        student: "Антон",
        id: "4",
    },
    {
        day: 5, // 1 - monday to 7 - sunday
        start: 18,
        end: 19,
        description: "ОГЭ английский язык",
        student: "Таня",
        id: "5",
    },
    {
        day: 6, // 1 - monday to 7 - sunday
        start: 20,
        end: 21,
        description: "ОГЭ химия",
        student: "Маша",
        id: "6",
    },
];

export default function Timetable() {
    const [currentWeekStart, setCurrentWeekStart] = useState(
        getStartOfWeek(new Date())
    );
    const [currentDay, setCurrentDay] = useState(new Date().getDate());
    const isMobile = !useMediaQuery("(min-width: 768px)");

    const filteredSchedule = schedule.filter((entry) => {
        return currentWeekStart.getDate() + entry.day === currentDay;
    });

    const DAYSTART = 9;

    function hourToString(hours: number) {
        const fullHours = Math.floor(hours);
        const minutes = Math.floor((hours - fullHours) * 60);
        return `${fullHours}:${minutes > 0 ? minutes : "00"}`;
    }

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
        <div className={cn(comforta.className, "container mx-auto p-1")}>
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
            <div className="rounded-full bg-white grid grid-cols-7 md:grid-cols-8 mx-auto w-full font-semibold text-xs md:text-md text-center items-center mt-4">
                {isMobile ? <></> : <p>Время</p>}
                {daysInWeek.map((day) => (
                    <div
                        onClick={() => setCurrentDay(day.getDate())}
                        key={day.toISOString()}
                        className={`rounded-full ${
                            day.getDate() === currentDay
                                ? "bg-blue-700 text-white"
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
            {isMobile ? (
                <div className="bg-white flex flex-col gap-3 text-xs text-center mt-4">
                    {filteredSchedule.map((lesson, index) => (
                        <TimetableEntry
                            key={index}
                            style={{
                                gridColumnStart: 2,
                                gridColumnEnd: 4,
                                gridRowStart: 2 * (lesson.start - DAYSTART) + 1,
                                gridRowEnd: `span ${
                                    2 * (lesson.end - lesson.start) + 1
                                }`,
                            }}
                            {...lesson}
                            duration={`${hourToString(
                                lesson.start
                            )} - ${hourToString(lesson.end)}`}
                        />
                    ))}
                    {filteredSchedule.length === 0 ? (
                        <p>Сегодня занятий нет</p>
                    ) : (
                        <></>
                    )}
                </div>
            ) : (
                <div className="max-h-[400px] overflow-y-scroll border border-blue-400 bg-white grid grid-flow-dense grid-cols-8 text-sm text-center mt-4">
                    {timeSlots.map((slot) => (
                        <>
                            <div className="text-md px-3 border col-start-1">
                                <p
                                    key={slot}
                                    className={"text-left"}
                                    style={{
                                        fontVariantNumeric: "tabular-nums",
                                    }}>
                                    {slot}
                                </p>
                            </div>

                            {schedule.map((lesson, index) => (
                                <TimetableEntry
                                    style={{
                                        gridColumnStart: lesson.day + 1 + 1,
                                        gridRowStart:
                                            2 * (lesson.start - DAYSTART) + 1,
                                        gridRowEnd: `span ${
                                            2 * (lesson.end - lesson.start) + 1
                                        }`,
                                    }}
                                    {...lesson}
                                    duration={`${hourToString(
                                        lesson.start
                                    )} - ${hourToString(lesson.end)}`}
                                />
                            ))}
                        </>
                    ))}
                    {Array.from(
                        {
                            length:
                                (timeSlots.length - 1) * (daysInWeek.length) - schedule.reduce((acc, cur) => 2 * (cur.end - cur.start) + acc, 0)
                        },
                        (_, index) => (
                            <div
                                key={index}
                                className="border"></div>
                        )
                    )}
                </div>
            )}
        </div>
    );
}
