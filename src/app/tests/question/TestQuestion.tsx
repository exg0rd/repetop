import React from "react";

import { robotoslab } from "../../layout";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import TableAnswer from "./TableAnswer";

export interface QuestionProps {
    questionNumber: number;
    questionType: "default" | "code" | "two-col-table";
    questionContent: string;
    answerNumber: number;
    imgURL: string;
    totalQuestions: number;
    onNextQuestion: () => void;
    onPrevQuestion: () => void;
    questionDescription: string;
}

export const TestQuestion: React.FC<QuestionProps> = ({
    questionNumber,
    questionType,
    questionContent,
    imgURL,
    totalQuestions,
    onNextQuestion,
    onPrevQuestion,
    answerNumber,
    questionDescription,
}) => {
    return (
        <div
            className={cn(
                robotoslab.className,
                "container mx-auto md:mt-3 p-4 shadow-md min-h-[650px] mb-10"
            )}>
            <div className="flex gap-3 flex-row p-3 justify-between items-center">
                <h1 className="text-2xl font-extrabold mr-3">
                    Вопрос {questionNumber} \ {totalQuestions}
                </h1>
                <Button
                    className="ml-auto"
                    onClick={onPrevQuestion}>
                    <ArrowLeft />
                </Button>
                <Button onClick={onNextQuestion}>
                    <ArrowRight />
                </Button>
            </div>
            <hr className="border border-xl"></hr>
            <p className="mt-2 p-2 text-xl">{questionDescription}</p>
            <div className="flex flex-col mt-3 gap-3 place-items-center">
                {imgURL ? (
                    <div className="rounded-xl p-3 shadow-md">
                        {" "}
                        <img
                            className="object-cover min-h-[200px] min-w-[200px]"
                            src={imgURL}></img>{" "}
                    </div>
                ) : (
                    <></>
                )}

                <hr className="border border-xl mt-3 w-full"></hr>
                <div className="flex col-span-2">
                    {questionType === "two-col-table" ? (
                        <div className="grid grid-cols-2 mt-2 gap-5 font-light whitespace-pre text-xs md:text-lg justify-items-center text-pretty">
                            <p>{questionContent[0]}</p>
                            <p>{questionContent[1]}</p>
                        </div>
                    ) : (
                        <div className="flex flex-col mt-2 gap-5 font-light whitespace-pre text-pretty">
                            <p>{questionContent}</p>
                        </div>
                    )}
                </div>
            </div>
            {answerNumber === 1 ? (
                <div className="flex my-5 p-3">
                    <label
                        htmlFor=""
                        className="block mb-2 text-lg font-extrabold text-blue-700"></label>
                    <input
                        id=""
                        name=""
                        type="text"
                        placeholder="Ваш ответ"
                        required
                        className="bg-gray-50 border border-blue-300 text-blue-900 text-sm rounded-lg focus:ring-blue-400 focus:border-blue-500 block w-full p-2.5"
                    />
                </div>
            ) : (
                <TableAnswer answerNumber={answerNumber} />
            )}
        </div>
    );
};

export default TestQuestion;
