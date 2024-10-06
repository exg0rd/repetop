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
                "container mx-auto md:mt-3 px-4 py-12"
            )}>
            <h1 className="text-xl font-extrabold">Мои тесты</h1>
            {children}
        </div>
    );
};
