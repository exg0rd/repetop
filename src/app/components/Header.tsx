"use client";

import React from "react";

import { useMediaQuery } from "../hooks/useMediaQuery";

import { Logo } from "./Logo";
import { comforta } from "../layout";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";

export function Header({ title }) {
    const router = useRouter();
    const username = "Егор Дмитриевич Саяпин";

    async function handleLogout() {
        // shoud not be here
        fetch("/api/auth/logout", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username }),
        }).then((response) => {
            if (response.ok) router.push("/");
        });
    }

    return (
        <header>
            <div className="flex justify-between flex-wrap mt-4 mx-4 items-center p-8 bg-white rounded-xl shadow-md">
                <Logo iconSize="64" />
                <h1
                    className={cn(
                        comforta.className,
                        "text-xl font-extrabold"
                    )}>
                    {title}
                </h1>
                <div className="flex gap-3 items-center">
                    <>
                        {useMediaQuery(`(min-width: 768px)`) ? (
                            <p
                                className={
                                    "text-xs p-2 " +
                                    comforta.className
                                }>
                                {username}
                            </p>
                        ) : (
                            <></>
                        )}

                        <div className="border shadow-lg rounded-full border-4 border-blue-100 w-[64px] h-[64px] flex">
                            <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_gaxAkYYDw8UfNleSC2Viswv3xSmOa4bIAQ&s"
                                className="object-cover rounded-full"></img>
                        </div>
                    </>
                </div>
            </div>
        </header>
    );
}
