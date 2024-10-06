"use client";

import React from "react";

import { Logo } from "./Logo";
import { Button } from "@/ui/button";

import { LogInIcon, LogOutIcon, ChevronLeft } from "lucide-react";
import Link from "next/link";
import { User } from "@/lib/definitions";
import { useRouter } from "next/navigation";

export function Header({ username }: User) {
    const router = useRouter();

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
            <div className="flex justify-between mt-5 mx-2 items-center p-5">
                <Logo iconSize="64" />
                <div className="flex gap-3">
                    {username ? (
                        <Button>
                            <ChevronLeft />
                        </Button>
                    ) : (
                        <></>
                    )}
                </div>
            </div>
        </header>
    );
}
