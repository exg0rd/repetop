import React from "react";
import { cn } from "@/lib/utils";
import { comforta } from "../layout";
import { Button } from "@/ui/button";

interface Props {
    className?: string;
}

const tests = [
    {
        name: "Тест 1",
        theme: "Основы программирования",
        questions: 10,
        deadline: "2023-03-15T10:00:00.000Z",
        grade: "",
        description: `Для того чтобы пройти данный тест по программированию, тебе потребуется выполнить несколько заданий, которые помогут оценить твои знания и навыки в области программирования. Тест включает вопросы различной сложности, начиная от основ синтаксиса языков программирования и заканчивая решением практических задач.

Мы рекомендуем внимательно прочитать каждое задание и постараться дать наиболее полный и правильный ответ. Если возникнут трудности, не стесняйся обратиться за помощью к своему репетитору.

Желаю удачи и успешного прохождения теста!`
    },
];

export const Test: React.FC<Props> = ({ className }) => {
    return (
        <div
            className={cn(
                comforta.className,
                "container mx-auto md:mt-3 p-4 shadow-md min-h-500"
            )}>
            <div className="flex gap-3 p-3">
                <h1 className="text-2xl font-extrabold mr-3">Тест по теме: </h1>
                <p className="text-2xl">{tests[0].theme}</p>
            </div>
            <div className="grid grid-cols-3 mt-3">
                <div className="flex flex-col mt-3 gap-3 col-span-2">
                    <div>
                        <p>Вопросов: </p>
                        <p className="font-bold text-blue-400">
                            {tests[0].questions}
                        </p>
                    </div>
                    <div>
                        <p>Сделать до: </p>
                        <p className="font-bold text-blue-400">
                            {new Date(tests[0].deadline).toLocaleString("ru", {
                                dateStyle: "full",
                            })}
                        </p>
                    </div>
                    <hr className="border border-xl"></hr>
                    <div className="flex flex-col mt-2 gap-5 font-light pr-10 whitespace-pre text-pretty">
                           {tests[0].description}
                    </div>
                </div>
                <div className="rounded-xl p-3 shadow-md">
                    <img
                        className="object-cover aspect-square"
                        src="https://uploads.dailydot.com/2018/10/olli-the-polite-cat.jpg"></img>
                </div>
            </div>
            <Button className="grow-0 my-6">Начать тест</Button>
        </div>
    );
};

export default Test;
