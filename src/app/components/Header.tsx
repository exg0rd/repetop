"use client";

import React from "react";
import useMediaQuery from "../../hooks/useMediaQuery";
import { useSidebar } from "@/components/ui/sidebar";
import { Logo } from "./Logo";
import { Button } from "@/ui/button";
import { AlignJustify } from "lucide-react";

export function Header() {
    const page = 'profile';


    function CustomSidebarTrigger() {
        const { toggleSidebar } = useSidebar();

        return (
            <Button
                variant={"ghost"}
                className="text-blue-600 grow-0 mr-auto"
                onClick={toggleSidebar}>
                <AlignJustify />
            </Button>
        );
    }

    return (
        <header>
            <div className="grid grid-cols-3 mt-4 mx-4 items-center p-1 md:p-3 bg-white rounded-xl shadow-md">
                <CustomSidebarTrigger />
                <Logo
                    iconSize={"48"}
                    className="flex items-center mx-auto flex-row gap-3 col-start-2 col-end-2"
                />
                {page === "profile" ? (
                    <></>
                ) : (
                    <div className="ml-auto">
                        <div className="w-full h-auto self-end">
                            <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_gaxAkYYDw8UfNleSC2Viswv3xSmOa4bIAQ&s"
                                className="border shadow-lg  border-4 border-blue-100 object-cover rounded-full w-full h-full max-w-[64px] max-h-[64px] aspect-square"
                            />
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
}
