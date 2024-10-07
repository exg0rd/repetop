import React from "react";
import { comforta } from "../layout";
import { cn } from "@/lib/utils";

interface Props {
    children: React.ReactElement;
}

export const ProfileContent: React.FC<Props> = ({ children }) => {
    return (
        <div
            className={cn(
                comforta.className,
                  "mx-auto px-1 md:px-6 py-12 border shadow-md text-xs sm:text-sm md:text-md lg:text-lg"
            )}>
            <h1 className="text-xl font-extrabold">Мои тесты</h1>
            {children}
        </div>
    );
};
