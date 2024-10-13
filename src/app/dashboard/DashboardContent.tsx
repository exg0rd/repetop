import React from "react";
import Students from "./StudentCard";
import { cn } from "@/lib/utils";
import { comforta } from "../layout";

interface Props {
    children: React.ReactElement;
}

export const DashboardContent: React.FC<Props> = () => {
    return (
        <div
            className={cn(
                comforta.className,
                "grid grid-cols-3 md:grid-cols-3 gap-4 mx-auto mx-4 my-4"
            )}>
            <Students title={"Мои ученики"} />
            <Students title={"Мои тесты"} />
            <Students title={"Статистика"} />
        </div>
    );
};
