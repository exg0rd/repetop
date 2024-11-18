"use client";
import React, { useState } from "react";
import { EditableMathField } from "react-mathquill";

interface Props {
    className?: string;
    areMultipleCorrect: boolean;
    isInputAnswer: boolean;
    answerText: string;
    index: number;
    setText: any;
    updateCorrectAnswer: (number) => void;
    active: boolean;
}

export const AnswerComponent: React.FC<Props> = ({
    className,
    answerText,
    areMultipleCorrect,
    index,
    setText,
    updateCorrectAnswer,
    active,
    isInputAnswer,
}) => {
    const [currentInput, setCurrentInput] = useState(answerText ?? "");
    const [checked, setChecked] = useState(active);

    const handleInputChange = (mathfield) => {
        setCurrentInput(mathfield.latex());
        setText(mathfield.latex());
    };

    const handleCorrectChange = () => {
        setChecked(!checked);
        updateCorrectAnswer(index);
    };

    return (
        <div className="flex flex-row border p-2 shadow-md rounded-xl justify-between items-center">
            <label
                htmlFor={`input${index}`}
                className="w-4 text-center">
                {`${index + 1})`}
            </label>
            <EditableMathField
                className="w-full mx-2"
                style={{ border: 0 }}
                latex={currentInput ?? ""}
                onChange={(mathfield) => handleInputChange(mathfield)}
            />
            {!isInputAnswer ? (
                areMultipleCorrect ? (
                    <input
                        type="checkbox"
                        name={`checkboxanswer`}
                        onChange={handleCorrectChange}
                        checked={checked}
                    />
                ) : (
                    <input
                        type="radio"
                        name={`radioanswer`}
                        id={`radioid${index}`}
                        onChange={handleCorrectChange}
                    />
                )
            ) : null}
        </div>
    );
};

export default AnswerComponent;
