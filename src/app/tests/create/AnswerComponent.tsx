import { Button } from "@/ui/button";
import React from "react";

interface Props {
    className?: string;
    variant: "CHECKBOX" | "RADIO" | " INPUT" | "MATCH";
    answerText: string;
    index: number;
}

export const AnswerComponent: React.FC<Props> = ({
    className,
    variant,
    answerText,
    index,
}) => {
    return (
        <div className="flex flex-row border p-2 shadow-md rounded-xl justify-between">
            <label
                htmlFor={`input${index}`}
                className="w-4">
                {index})
            </label>
            <input
                type="text"
                className="font-bold w-full mx-2 border border-gray-200"
                name={`input${index}`}></input>
            {variant === "CHECKBOX" ? (
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
