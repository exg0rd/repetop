import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { comforta } from "@/app/layout";
import { Button } from "@/ui/button";
import AnswerComponent from "./AnswerComponent";

/*ЧТО СДЕЛАТЬ
1) ДЕСЕЛЕКТ РАДИОКНОПОК ПРИ ВЫБОРЕ ОДНОЙ
2) ЕСЛИ ОТВЕТ РАЗВЕРНУТЫЙ ТО ОСТАВИТЬ ПОМЕТКУ ВЕРНОГО ИЛИ ВЕРНЫХ В ЗАВИСИМОСТИ ОТ КОНДИЦИЙ
СОБСТВЕННО ДА В РАЗВЕРНУТОМ ОТВЕТЕ БУДЕТ ПОЛЕ ДЛЯ ВВОДА А ИНАЧЕ ПРОСТО ТЕКСТ ВАРИАНТА ОТВЕТА*/

export const TestQuestionCreate: React.FC = () => {
    const [preview, setPreview] = useState(false);
    const [taskContent, setTaskContent] = useState("");
    const [resizeHeight, setResizeHeight] = useState(100);
    const [answerNumber, setAnswerNumber] = useState(0);
    const textareaRef = useRef<HTMLTextAreaElement>(null);
    const selectRef = useRef<HTMLSelectElement>(null);

    useEffect(() => {
        window.MathJax.typeset();
    }, [preview]);

    useEffect(() => {
        if (textareaRef.current) {
            textareaRef.current.style.scrollHeight = `${resizeHeight}px`;
        }
    }, [resizeHeight]);

    const handleInputChange = (e) => {
        setTaskContent(e.target.value);
    };

    const handleChangeToPreview = () => {
        if (!preview) {
            setTaskContent(textareaRef.current.value);
            setResizeHeight(textareaRef.current?.scrollHeight);
        }

        setPreview(!preview);
    };

    const handleAddAnswers = (e) => {
        alert(e.target.value);
        setAnswerNumber(Number(e.target.value));
    };

    const memoizedAnswerComponents = React.useMemo(
        () =>
            Array(answerNumber)
                .fill(0)
                .map((_, index) => (
                    <AnswerComponent
                        key={index}
                        variant={"RADIO"}
                        answerText=""
                        index={index + 1}
                    />
                )),
        [answerNumber]
    );

    return (
        <div
            className={cn(
                comforta.className,
                "m-4 text-sm md:text-md lg:text-lg min-h-screen"
            )}>
            <div className="bg-white rounded-xl shadow-md p-4 text-lg font-extrabold">
                Вопрос 1
            </div>
            <div className="flex flex-col gap-3 bg-white rounded-xl shadow-md p-4 mt-4 text-left h-full">
                <h1 className="font-bold text-blue-600 mr-3">Условие: </h1>
                {preview ? (
                    <div className="w-full">{taskContent}</div>
                ) : (
                    <textarea
                        ref={textareaRef}
                        className="border border-black w-full resize-y"
                        value={taskContent}
                        style={{ height: resizeHeight }}
                        onChange={handleInputChange}
                    />
                )}
                <div className="flex flex-col gap-3 mt-3">
                    <div className="flex flex-row gap-3">
                        <div>
                            <p className="font-bold text-blue-600">
                                Вариантов ответа:
                            </p>
                            <input
                                className="border border-black"
                                type="number"
                                min={1}
                                max={99}
                                onChange={handleAddAnswers}
                            />
                        </div>
                        <div>
                            <p className="font-bold text-blue-600">
                                Тип ответов:{" "}
                            </p>
                            <select ref={selectRef}>
                                <option
                                    value={"Один вариант"}
                                    id="RADIO">
                                    Один ответ
                                </option>
                                <option
                                    value={"Множественный выбор"}
                                    id="CHECKBOX">
                                    Множественный выбор
                                </option>
                                <option
                                    value={"Развернутый ответ"}
                                    id="INPUT">
                                    Развёрнутый ответ
                                </option>
                                <option
                                    value={"Сопоставление"}
                                    id="MATCH">
                                    Сопоставление
                                </option>
                            </select>
                        </div>
                        <Button
                            className="w-fit ml-auto"
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
                            <form className="w-full border border-gray-200 flex flex-col gap-3 p-4 resize rounded-xl resize-both">{memoizedAnswerComponents}</form>
                    </div>
                </div>

                <Button className="w-fit">Сохранить и продолжить</Button>
            </div>
        </div>
    );
};

export default TestQuestionCreate;
