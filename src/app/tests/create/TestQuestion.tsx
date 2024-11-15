import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { comforta } from "@/app/layout";
import { Button } from "@/ui/button";
import AnswerComponent from "./AnswerComponent";

/*ЧТО СДЕЛАТЬ
1) ДЕСЕЛЕКТ РАДИОКНОПОК ПРИ ВЫБОРЕ ОДНОЙ
2) ЕСЛИ ОТВЕТ РАЗВЕРНУТЫЙ ТО ОСТАВИТЬ ПОМЕТКУ ВЕРНОГО ИЛИ ВЕРНЫХ В ЗАВИСИМОСТИ ОТ КОНДИЦИЙ
СОБСТВЕННО ДА В РАЗВЕРНУТОМ ОТВЕТЕ БУДЕТ ПОЛЕ ДЛЯ ВВОДА А ИНАЧЕ ПРОСТО ТЕКСТ ВАРИАНТА ОТВЕТА*/

type questionState = {
    index: number;
    preview: boolean;

    taskContent: string;
    textAreaHeight: number;
    
    answerNumber: number;
    multipleAnswers: boolean;
    inputAnswers: boolean;

    answerTexts: string[];
}

export const TestQuestionCreate: React.FC = ({nextQuestionIndex}) => {
    // const [preview, setPreview] = useState(false);
    // const [taskContent, setTaskContent] = useState("");
    // const [resizeHeight, setResizeHeight] = useState(100);
    // const [answerNumber, setAnswerNumber] = useState(0);
    // const [selectStateOne, setSelectStateOne] = useState('');
    // const [selectStateTwo, setSelectStateTwo] = useState('');
    // const [answerTexts, setAnswerTexts] = useState([]);

    const [questionState, setQuestionState] = useState({
        index: nextQuestionIndex,
        preview: false,
        taskContent: '',
        textAreaHeight: 100,
        answerNumber: 0,
        multipleAnswers: false,
        inputAnswers: false,
        answerTexts: []
    });

    const updateTaskContent = (content: string) => {
        setQuestionState(prevState => ({
            ...prevState,
            taskContent: textareaRef?.current.value,
        }));
    };
    
    const togglePreview = () => {
        setQuestionState(prevState => ({
            ...prevState,
            preview: !prevState.preview
        }));
    };

    const updateTextAreaHeight = (height: number) => {
        setQuestionState(prevState => ({
            ...prevState,
            textAreaHeight: height
        }));
    };

    const updateAnswerNumber = (number: string) => {
        setQuestionState(prevState => ({
            ...prevState,
            answerNumber: Number(number),
            answerTexts: Array(Number(number)).fill(""),
        }));
    };

    const toggleMultipleAnswers = () => {
        const variant = selectTypeRef.current?.value;

        setQuestionState(prevState => ({
            ...prevState,
            multipleAnswers: variant === 'SINGLE' ? false : true,
        }));
    };

    const toggleInputAnswers = () => {
        const variant = selectAnswerInputTypeRef.current?.value;
        setQuestionState(prevState => ({
            ...prevState,
            inputAnswers: variant === 'SELECT' ? false : true,
        }));
    };

    const updateAnswerText = (index: number, value: string) => {
        setQuestionState(prevState => ({
            ...prevState,
            answerTexts: prevState.answerTexts.map((text, i) => i === index ? value : text)
        }));
    };
    

    const textareaRef = useRef<HTMLTextAreaElement>(null);
    const selectTypeRef = useRef<HTMLSelectElement>(null);
    const selectAnswerInputTypeRef = useRef<HTMLSelectElement>(null);
    const answerNumberRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        window.MathJax.typeset();
    }, [questionState.preview]);

    useEffect(() => {
        if (textareaRef.current) {
            textareaRef.current.style.scrollHeight = `${questionState.textAreaHeight}px`;
        }
    }, [questionState.textAreaHeight]);

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
                .fill('')
                .map((_, index) => ( !questionState.preview ? 
                    <AnswerComponent
                        key={index}
                        areMultipleCorrect={questionState.multipleAnswers}
                        isInputAnswer={questionState.inputAnswers}
                        answerText={questionState.answerTexts[index]}
                        index={index}
                        setText={(value) => updateAnswerText(index, value)}
                    /> : <p key={index}>{index+1 + ')'} {questionState.answerTexts[index]}</p>
                )), 
        [questionState.preview, questionState.multipleAnswers, questionState.inputAnswers, questionState.answerNumber]
    );

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
                    <div className="w-full">{questionState.taskContent}</div>
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
                    <div className="flex flex-row gap-3 items-center">
                        <div>
                            <p className="font-bold text-blue-600">
                                Вариантов ответа:
                            </p>
                            <input
                                className="border border-black"
                                type="number"
                                min={1}
                                max={99}
                                ref={answerNumberRef}
                                inputMode="numeric"
                                onChange={(e) => updateAnswerNumber(e.target.value)}
                            />
                        </div>
                        <div>
                            <p className="font-bold text-blue-600">
                                Тип ответов:{" "}
                            </p>
                            <select ref={selectTypeRef} onChange={toggleMultipleAnswers}>
                                <option
                                    value={"SINGLE"}
                                    >
                                    Один ответ
                                </option>
                                <option
                                    value={"MULTIPLE"}
                                    >
                                    Множественный выбор
                                </option>
                            </select>
                            <select ref={selectAnswerInputTypeRef} onChange={toggleInputAnswers}>
                                <option
                                    value={"SELECT"}
                                    >
                                    Выбор ответа
                                </option>
                                <option
                                    value={"INPUT"}>
                                    Ввод ответа
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
                            <form className="w-full border border-gray-200 flex flex-col gap-3 p-4 resize rounded-xl resize-both">{questionState.answerNumber > 0 && memoizedAnswerComponents}</form>
                    </div>
                </div>

                <Button className="w-fit">Сохранить и продолжить</Button>
            </div>
        </div>
    );
};

export default TestQuestionCreate;
