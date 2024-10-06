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
        <div className="grid grid-rows-2 border shadow-md divide-y items-center">
            <div className="grid grid-cols-4 justify-items-start font-bold p-3 items-center">
                <p>Тема:</p>
                <p>Вопросов:</p>
                <p>Сделать до:</p>
                <p>Оценка:</p>
            </div>
            <div className="grid grid-cols-4 justify-items-start p-3 items-center">
                <p>{theme}</p>
                <p>{questions}</p>
                <p>{new Date(deadline).toLocaleString("ru")}</p>
                <div className="flex flex-row justify-between gap-2 items-center">
                    { !grade? (<Button>Начать тест</Button>) : <Button>Результаты</Button> }
                </div>
            </div>
        </div>
    );
};
