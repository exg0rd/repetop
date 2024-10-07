import { Button } from "@/ui/button";
import React from "react";

export interface TestListViewProps {
    theme: string;
    questions: number;
    deadline: string;
    grade: number;
}

export const TestListView: React.FC<TestListViewProps> = ({
    theme,
    questions,
    deadline,
    grade,
}) => {
    return (
        <div className="border shadow-md p-3">
            <p className="font-bold mb-3">{theme}</p>
            <div className="grid grid-rows-2 grid-cols-3 gap-y-2 md:gap-y-6 justify-items-start items-center text-pretty">
                <p>Вопросов:</p>
                <p>Сделать до:</p>
                <p>Оценка: {grade}</p>
                <p>{questions}</p>
                <p>
                    {new Date(deadline).toLocaleString("ru", {
                        dateStyle: "short",
                        timeStyle: "short",
                    })}
                </p>

                {!grade ? (
                    <Button className="flex text-xs justify-self-end">Начать</Button>
                ) : (
                    <Button className="flex text-xs justify-self-end">Результаты</Button>
                )}
            </div>
        </div>
    );
};
