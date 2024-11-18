import "./globals.css";
import "highlight.js/styles/github.css";

import { Noto_Serif, Roboto_Slab } from "next/font/google";
import { Header } from "./components/Header";

import { AppSidebar } from "./components/AppSidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

export const comforta = Noto_Serif({
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
                <SidebarProvider defaultOpen={false}>
                    <AppSidebar />
                    <main
                        className={
                            "mx-0 lg:mx-16 xl:mx-32 min-h-screen w-full"
                        }>
                        <Header />
                        {children}
                    </main>
                </SidebarProvider>
                <script
                    type="text/javascript"
                    id="MathJax-script"
                    async
                    src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>
            </body>
        </html>
    );
}
