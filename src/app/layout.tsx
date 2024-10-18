import "./globals.css";
import "highlight.js/styles/github.css";

import { Comfortaa, Roboto_Slab } from "next/font/google";
import { Header } from "./components/Header";

import { AppSidebar } from "./components/AppSidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"


export const comforta = Comfortaa({
    weight: ["variable"],
    subsets: ["cyrillic"],
});
export const robotoslab = Roboto_Slab({
    weight: ["variable"],
    subsets: ["cyrillic"],
});

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html
            lang="ru"
            className={comforta.className}>
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1.0"></meta>
            <body className="bg-blue-100">
                <SidebarProvider>
                    <AppSidebar />
                    <main className={"mx-auto min-h-screen w-full"}>
                        <Header />
                        {children}
                    </main>
                </SidebarProvider>
            </body>
        </html>
    );
}
