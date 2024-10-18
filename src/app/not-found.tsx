import { cn } from "@/lib/utils";
import Link from "next/link";
import { comforta } from "./layout";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/ui/button";

export default function NotFound() {
    return (
        <div
            className={cn(
                comforta.className,
                "flex flex-col items-center h-full p-8 m-4 bg-white rounded-xl shadow-md text-center space-y-4"
            )}>
            <span className="text-[64px] sm:text-[128px] font-extrabold text-blue-800">
                404
            </span>
            <p className="text-lg">Вы зашли куда-то не туда</p>
            <p className="text-lg">Возвращайтесь к любимым ученикам!</p>
            <Button>
                <ArrowLeft />
                <Link href="/dashboard/students">На главную</Link>
            </Button>
        </div>
    );
}
