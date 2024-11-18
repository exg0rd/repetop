'use client'
import React, { useCallback, useState } from "react";
import { cn } from "@/lib/utils";
import { comforta } from "@/app/layout";
import { Button } from "@/ui/button";
import TestQuestionCreate from "./TestQuestion";

interface Props {
    className?: string;
    onStart: () => void;
}

// const tests = [
//     {
//         name: "Тест 1",
//         theme: "Основы программирования",
//         questions: 10,
//         deadline: "2023-03-15T10:00:00.000Z",
//         grade: "",
//         description: `Для того чтобы пройти данный тест по программированию, тебе потребуется выполнить несколько заданий, которые помогут оценить твои знания и навыки в области программирования. Тест включает вопросы различной сложности, начиная от основ синтаксиса языков программирования и заканчивая решением практических задач.

// Мы рекомендуем внимательно прочитать каждое задание и постараться дать наиболее полный и правильный ответ. Если возникнут трудности, не стесняйся обратиться за помощью к своему репетитору.

// Желаю удачи и успешного прохождения теста!`,
//     },
// ];

export const Test: React.FC<Props> = ({ className }) => {
    const [questionIndex, setQuestionIndex] = useState(0);
    const [testData, setTestData] = useState([])

    const handleContinueCreatingTest = (newQuestionData) => {
        setTestData(prevData => [...prevData, newQuestionData]);
        setQuestionIndex(questionIndex + 1);
    };

    if (questionIndex > 0) return <TestQuestionCreate nextQuestionIndex={questionIndex} handleContinue={handleContinueCreatingTest}/>
    return (
        <div
            className={cn(
                comforta.className,
                "m-4 text-sm md:text-md lg:text-lg min-h-screen"
            )}>
            <div className="bg-white rounded-xl shadow-md p-4 text-lg font-extrabold">
                Создание теста
            </div>
            <div className="flex flex-col gap-3 bg-white rounded-xl shadow-md p-4 mt-4 text-left h-full">
                <h1 className="font-bold text-blue-600 mr-3">Тест по теме: </h1>
                <input className="border border-black w-1/3" />
                <div className="flex flex-col gap-3 mt-3">
                    <div>
                        <p className="font-bold text-blue-600">Вопросов: </p>
                        <input
                            className="border border-black"
                            type="number"
                            min={1}
                            max={99}
                        />
                    </div>
                    <div>
                        <p className="font-bold text-blue-600">Сделать до: </p>
                        <input type="datetime-local" />
                    </div>
                    <div>
                        <p className="font-bold text-blue-600">Ограничение по времени: </p>
                        <input type="time" />
                    </div>
                    <hr className="border border-xl"></hr>
                    <p>Описание</p>
                    <div className="flex flex-row">
                        <textarea className="w-1/2 border border-black" />
                        <div className="border h-auto aspect-square object-cover border-black w-auto p-1/2 m-auto">
                            <input type="file" />
                        </div>
                    </div>
                </div>

                <Button className="w-fit" onClick={handleContinueCreatingTest}>Продолжить создание теста</Button>
            </div>
        </div>
    );
};

export default Test;
