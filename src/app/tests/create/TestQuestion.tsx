"use client";
import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { comforta } from "@/app/layout";
import { Button } from "@/ui/button";
import AnswerComponent from "./AnswerComponent";
import { addStyles } from "react-mathquill";

interface answerInterface {
    answerText: string;
    correct: boolean;
}

type questionState = {
    index: number;
    preview: boolean;

    taskContent: string;
    textAreaHeight: number;

    answerNumber: number;
    multipleAnswers: boolean;
    inputAnswers: boolean;

    answers: Map<number, answerInterface>;
};

export const TestQuestionCreate: React.FC = ({
    nextQuestionIndex,
    handleContinue,
}) => {
    addStyles();

    const [questionState, setQuestionState] = useState({
        index: nextQuestionIndex,
        preview: false,
        taskContent: "",
        textAreaHeight: 100,
        answerNumber: 1,
        multipleAnswers: false,
        inputAnswers: false,

        answers: new Map(),
    });

    const updateTaskContent = (content: string) => {
        setQuestionState((prevState) => ({
            ...prevState,
            taskContent: textareaRef?.current.value,
        }));
    };

    const togglePreview = () => {
        setQuestionState((prevState) => ({
            ...prevState,
            preview: !prevState.preview,
        }));
    };

    const updateTextAreaHeight = (height: number) => {
        setQuestionState((prevState) => ({
            ...prevState,
            textAreaHeight: height,
        }));
    };

    const updateAnswerNumber = (number: string) => {
        setQuestionState((prevState) => ({
            ...prevState,
            answerNumber: Number(number),
            answers: new Map(
                Array(Number(number))
                    .fill(null)
                    .map((_, index) => [
                        index,
                        { answerText: "", correct: false },
                    ])
            ),
        }));
    };

    const toggleMultipleAnswers = () => {
        const variant = selectTypeRef.current?.value;

        setQuestionState((prevState) => ({
            ...prevState,
            multipleAnswers: variant === "SINGLE" ? false : true,
            correctAnswers: Array.from(new Set()),
        }));
    };

    const toggleInputAnswers = () => {
        const variant = selectAnswerInputTypeRef.current?.value;
        setQuestionState((prevState) => ({
            ...prevState,
            inputAnswers: variant === "SELECT" ? false : true,
        }));
    };

    const updateAnswerText = (index: number, value: string) => {
        setQuestionState((prevState) => ({
            ...prevState,
            answers: new Map(
                prevState.answers.set(index, {
                    answerText: value,
                    correct: prevState.answers.get(index)?.correct ?? false,
                })
            ),
        }));
    };

    const updateCorrectAnswer = (index: number) => {
        setQuestionState((prevState) => {
            const updatedAnswers = new Map(prevState.answers);
            const currentAnswer = updatedAnswers.get(index);
            if (currentAnswer) {
                updatedAnswers.set(index, {
                    answerText: currentAnswer.answerText,
                    correct: !currentAnswer.correct,
                });
            }
            return {
                ...prevState,
                answers: updatedAnswers,
            };
        });
    };

    const textareaRef = useRef<HTMLTextAreaElement>(null);
    const selectTypeRef = useRef<HTMLSelectElement>(null);
    const selectAnswerInputTypeRef = useRef<HTMLSelectElement>(null);
    const answerNumberRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        window.MathJax.typeset();
    }, [questionState.preview, nextQuestionIndex]);

    useEffect(() => {
        if (textareaRef.current) {
            textareaRef.current.style.scrollHeight = `${questionState.textAreaHeight}px`;
        }
    }, [questionState.textAreaHeight, nextQuestionIndex]);

    const handleInputChange = (e) => {
        updateTaskContent(e.target.value);
    };

    const handleChangeToPreview = () => {
        if (!questionState.preview) {
            updateTaskContent(textareaRef.current.value);
            updateTextAreaHeight(textareaRef.current?.scrollHeight);
        }

        togglePreview();
    };

    const memoizedAnswerComponents = React.useMemo(
        () =>
            Array(questionState.answerNumber)
                .fill("")
                .map((_, index) => (
                    <AnswerComponent
                        key={index}
                        areMultipleCorrect={questionState.multipleAnswers}
                        isInputAnswer={questionState.inputAnswers}
                        answerText={
                            questionState.answers.get(index)?.answerText ?? ""
                        }
                        index={index}
                        setText={(value) => updateAnswerText(index, value)}
                        updateCorrectAnswer={updateCorrectAnswer}
                        active={
                            questionState.answers.get(index)?.correct ?? false
                        }
                    />
                )),
        [
            questionState.preview,
            questionState.multipleAnswers,
            questionState.inputAnswers,
            questionState.answerNumber,
        ]
    );

    const handleSaveAndNext = () => {
        handleContinue({
            description: questionState.taskContent,
            multiple: questionState.multipleAnswers,
            inputAnswers: questionState.inputAnswers,
            index: questionState.index,
            answers: questionState.answers,
        });
    };

    return (
        <div
            className={cn(
                comforta.className,
                "m-4 text-sm md:text-md lg:text-lg min-h-screen"
            )}>
            <div className="bg-white rounded-xl shadow-md p-4 text-lg font-extrabold">
                Вопрос {questionState.index}
            </div>
            <div className="flex flex-col gap-3 bg-white rounded-xl shadow-md p-4 mt-4 text-left h-full">
                <h1 className="font-bold text-blue-600 mr-3">Условие: </h1>
                {questionState.preview ? (
                    <div>{questionState.taskContent}</div>
                ) : (
                    <textarea
                        ref={textareaRef}
                        className="border border-black w-full resize-y"
                        value={questionState.taskContent}
                        style={{ height: questionState.textAreaHeight }}
                        onChange={handleInputChange}
                    />
                )}
                <div className="flex flex-col gap-3 mt-3">
                    <div className="flex flex-row flex-wrap gap-3 items-center">
                        <div>
                            <p className="font-bold text-blue-600 mb-2">
                                Вариантов ответа:
                            </p>
                            <input
                                className="border border-black"
                                type="number"
                                min={1}
                                max={99}
                                value={questionState.answerNumber}
                                ref={answerNumberRef}
                                inputMode="numeric"
                                onChange={(e) =>
                                    updateAnswerNumber(e.target.value)
                                }
                            />
                        </div>
                        <div>
                            <p className="font-bold text-blue-600 mb-2">
                                Тип ответов:
                            </p>
                            <select
                                ref={selectTypeRef}
                                onChange={toggleMultipleAnswers}>
                                <option value={"SINGLE"}>Один ответ</option>
                                <option value={"MULTIPLE"}>
                                    Множественный выбор
                                </option>
                            </select>
                            <select
                                ref={selectAnswerInputTypeRef}
                                onChange={toggleInputAnswers}>
                                <option value={"SELECT"}>Выбор ответа</option>
                                <option value={"INPUT"}>Ввод ответа</option>
                            </select>
                        </div>
                        <Button
                            className="w-auto ml-auto"
                            onClick={handleChangeToPreview}>
                            Предпросмотр в виде формул
                        </Button>
                    </div>

                    <hr className="border border-xl"></hr>
                    <div className="flex flex-row justify-between">
                        <span className="font-bold text-blue-600">
                            Изображения к заданию
                        </span>
                        <span className="font-bold text-blue-600">Ответы</span>
                    </div>

                    <div className="flex flex-row gap-4 flex-wrap justify-between px-4">
                        <div className="border w-[200px] aspect-square object-cover border-black h-auto">
                            <input
                                type="file"
                                className="w-[200px]"
                            />
                        </div>
                        {questionState.answerNumber > 0 && (
                            <form className="w-full border border-gray-200 flex flex-col gap-3 p-4 resize rounded-xl resize-both">
                                <label>
                                    {"Введите верный ответ / ответы / варианты"}
                                </label>
                                <fieldset>
                                    {questionState.answerNumber > 0 &&
                                        memoizedAnswerComponents}
                                </fieldset>
                            </form>
                        )}
                    </div>
                </div>

                <Button
                    className="w-fit"
                    onClick={() => handleSaveAndNext(questionState)}>
                    Сохранить и продолжить
                </Button>
            </div>
        </div>
    );
};

export default TestQuestionCreate;
