import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { comforta } from "@/app/layout";
import { Button } from "@/ui/button";

export const TestQuestionCreate: React.FC = () => {
    const [preview, setPreview] = useState(false);
    const [taskContent, setTaskContent] = useState("");
    const [resizeHeight, setResizeHeight] = useState(100);
    const textareaRef = useRef<HTMLTextAreaElement>(null);
    
    useEffect(() => {
        window.MathJax.typeset();
    }, [preview]);

    useEffect(() => {
        if (textareaRef.current) {
            textareaRef.current.style.scrollHeight = `${resizeHeight}px`;
        }
    }, [resizeHeight]);

    const handleChangeToPreview = () => {
        console.log(textareaRef, textareaRef.current.value)
        setTaskContent(textareaRef.current.value);
        setResizeHeight(textareaRef.current?.scrollHeight);
        setPreview(!preview);
    };


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
                        style={{height: resizeHeight}}
                        onScroll={(e) => setResizeHeight(e.target.scrollHeight)}
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
                            />
                        </div>
                        <div>
                            <p className="font-bold text-blue-600">
                                Тип ответов:{" "}
                            </p>
                            <select>
                                <option value={"Один вариант"}>
                                    Один ответ
                                </option>
                                <option value={"Множественный выбор"}>
                                    Множественный выбор
                                </option>
                                <option value={"Развернутый ответ"}>
                                    Развёрнутый ответ
                                </option>
                                <option value={"Сопоставление"}>
                                    Сопоставление
                                </option>
                            </select>
                        </div>
                        <Button
                            className="w-fit ml-auto"
                            onClick={handleChangeToPreview}>
                            Предпросмотр условия в виде формул
                        </Button>
                    </div>

                    <hr className="border border-xl"></hr>
                    <p className="font-bold text-blue-600">
                        Изображения к заданию
                    </p>
                    <div className="flex flex-row flex-wrap">
                        <div className="border w-[200px] aspect-square object-cover border-black h-auto">
                            <input
                                type="file"
                                className="w-[200px]"
                            />
                        </div>
                    </div>
                </div>

                <Button className="w-fit">Сохранить и продолжить</Button>
            </div>
        </div>
    );
};

export default TestQuestionCreate;
