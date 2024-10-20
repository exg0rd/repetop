import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

interface Props {
    className?: string;
    student: string;
    description: string;
    day: number;
    start: number;
    end: number;
    id: string;
}

export const TimetableEntry: React.FC<Props> = ({
    className,
    start,
    end,
    student,
    description,
    day,
    id,
}) => {
    const dayStart = 9;

    return (
        <div
            className={cn(
                className,
                `flex flex-col text-white text-xs bg-green-300 border-2 border-dashed border-green-900`
            )}
            style={{
                gridColumnStart: day + 1,
                gridRowStart: 2 * (start - dayStart) + 1,
                gridRowEnd: `span ${2 * (end - start) + 1}`,
            }}>
            <p className="my-auto">{student}</p>
            <Link
                href={`/lessons/${id}`}
                className="my-auto">
                {description}
            </Link>
        </div>
    );
};

export default TimetableEntry;
