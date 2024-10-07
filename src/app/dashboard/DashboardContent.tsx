import React from "react";
import { cn } from "@/lib/utils";
import { comforta } from "../layout";

interface Props {
    children: React.ReactElement;
}

export const DashboardContent: React.FC<Props> = ({ children }) => {
    return (
        <div
            className={cn(
                comforta.className,
                "container mx-auto md:mt-3 px-4 py-12 border shadow-md"
            )}>
            <h1 className="text-xl font-extrabold">Управление тестами и базой заданий</h1>
            {children}
        </div>
    );
};
