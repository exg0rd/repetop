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
    style: React.CSSProperties;
    duration: string;
}

export const TimetableEntry: React.FC<Props> = ({
    className,
    student,
    description,
    id,
    style,
    duration
}) => {
    return (
        <div
            className={cn(
                className,
                `flex flex-col items-center flex-0 text-[8px] h-full bg-blue-300 border-2 border-dashed border-blue-900`
            )}
            style={style}>
            <p>{student}</p>
            <Link
                href={`/lessons/${id}`}
                className="my-auto">
                {description}
            </Link>
            <p>
                {duration}
            </p>
        </div>
    );
};

export default TimetableEntry;
