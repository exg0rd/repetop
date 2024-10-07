import React from "react";

interface Props {
    answerNumber: number;
}

export const TableAnswer: React.FC<Props> = ({ answerNumber }) => {
    const letterAnswers = [
        "А",
        "Б",
        "В",
        "Г",
        "Д",
        "Е",
        "Ж",
        "З",
        "И",
        "К",
        "Л",
        "М",
        "Н",
        "О",
        "П",
    ];
    return (
        <div className="flex justify-center mt-[120px]">
            <div
                className={`grid grid-rows-2 grid-cols-${answerNumber} border-2 justify-items-center`}>
                {Array.from({ length: answerNumber }).map((_, index) => (
                    <div key={index}>
                        <p>{letterAnswers[index]}</p>
                    </div>
                ))}
                {Array.from({ length: answerNumber }).map((_, index) => (
                    <div key={index}>
                        <input
                            className="text-center border-2 w-full"
                            id={`answer-${index + 1}`}
                            name={`answer-${index + 1}`}></input>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TableAnswer;
