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

    function hourToString(hours: number) {
        const fullHours = Math.floor(hours);
        const minutes = Math.floor((hours - fullHours) * 60);
        return `${fullHours}:${minutes > 0 ? minutes : '00'}`;
    }

    return (
        <div
            className={cn(
                className,
                `flex flex-col text-xs bg-green-300 border-2 border-dashed border-green-900`
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
            <p>
                {hourToString(start)} - {hourToString(end)}
            </p>
        </div>
    );
};

export default TimetableEntry;
