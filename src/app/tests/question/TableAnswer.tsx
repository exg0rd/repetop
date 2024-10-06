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
        <div className="flex mt-[120px] justify-center">
            <table className="border-4">
                <tr>
                    {Array.from({ length: answerNumber }).map((_, index) => (
                        <th className="border-4">{letterAnswers[index]}</th>
                    ))}
                </tr>
                <tr>
                    {Array.from({ length: answerNumber }).map((_, index) => (
                        <td className="border-4">
                            <input
                                className="text-center"
                                id={`answer-${index + 1}`}
                                name={`answer-${index + 1}`}></input>
                        </td>
                    ))}
                </tr>
            </table>
        </div>
    );
};

export default TableAnswer;
