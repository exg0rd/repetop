'use client'
import React, { useState } from "react";

interface Props {
    className?: string;
    areMultipleCorrect: boolean;
    isInputAnswer: boolean;
    answerText: string;
    index: number;
    setText: any;
}

export const AnswerComponent: React.FC<Props> = ({
    className,
    answerText,
    areMultipleCorrect,
    isInputAnswer,
    index,
    setText,
}) => {

    const [currentInput, setCurrentInput] = useState(answerText);

    const handleInputChange = (e) => {
        setCurrentInput(e.target.value);
        console.log(e.target.value, index)
        setText(e.target.value);
    }

    return (
        <div className="flex flex-row border p-2 shadow-md rounded-xl justify-between">
            <label
                htmlFor={`input${index}`}
                className="w-4">
                {index + 1}
            </label>
            <input
                type="text"
                className="font-bold w-full mx-2 border border-gray-200"
                id={`input${index}`}
                value={currentInput}
                placeholder={isInputAnswer ? 'Введите верный ответ, который нужно ввести' : 'Введите вариант ответа'}
                onChange={handleInputChange}/>
            {areMultipleCorrect ? (
                <input
                    type="checkbox"
                    name={`checkbox${index}`}
                />
            ) : (
                <input
                    type="radio"
                    name={`radio${index}`}
                />
            )}
        </div>
    );
};

export default AnswerComponent;
