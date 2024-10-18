import React from "react";

import { Bungee } from "next/font/google";
const bungeeFont = Bungee({
    weight: "400",
    subsets: ["latin"],
});

interface Props {
    className?: string;
    iconSize?: string;
    slogan: boolean;
}

import { cn } from "@/lib/utils";

export const Logo: React.FC<Props> = ({ className, iconSize, slogan }) => (
    <div
        className={cn(
            bungeeFont.className,
            className
        )}>
        <div className={className}>
            <svg
                viewBox="0 0 16 16"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                width={iconSize}
                height={iconSize}>
                <path
                    fill="#1e40af"
                    d="M15.090 12.79c0.235-0.185 0.385-0.469 0.385-0.789 0-0.358-0.188-0.672-0.471-0.849l-0.004-5.822-1 0.67v5.15c-0.283 0.18-0.468 0.492-0.468 0.847 0 0.316 0.147 0.598 0.376 0.782l-0.378 0.502c-0.323 0.41-0.521 0.931-0.53 1.498l-0 1.222h0.81c0.002 0 0.004 0 0.005 0 0.411 0 0.757-0.282 0.853-0.664l0.331-1.336v2h1v-1.21c-0.009-0.569-0.207-1.090-0.534-1.505z"></path>
                <path
                    fill="#1e40af"
                    d="M8 0l-8 4 8 5 8-5-8-4z"></path>
                <path
                    fill="#1e40af"
                    d="M8 10l-5-3.33v1.71c0 0.91 2.94 3.62 5 3.62s5-2.71 5-3.62v-1.71z"></path>
            </svg>
        </div>
        <div>
            {slogan ? (
                <>
                    <h2 className="text-blue-800 text-2xl sm:text-4xl">
                        Repetop
                    </h2>
                    <h4 className="text-blue-400 text-xs sm:text-sm">
                        Только на 5+
                    </h4>
                </>
            ) : (
                <></>
            )}
        </div>
    </div>
);
