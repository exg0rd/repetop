"use server";

import { comforta } from "@/app/layout";
import { cn } from "@/lib/utils";

export const ProfileContent: React.FC = () => {
    return (
        <div
            className={cn(
                comforta.className,
                "container mx-auto mt-10 px-4 py-12"
            )}>
            <div className="flex flex-wrap lg:flex-nowrap justify-center items-center"></div>
        </div>
    );
};
