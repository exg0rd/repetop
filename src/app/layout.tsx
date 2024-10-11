import './globals.css'
import 'highlight.js/styles/github.css'

import { Comfortaa, Roboto_Slab } from "next/font/google";

export const comforta = Comfortaa({ weight: ['variable'], subsets: ["cyrillic"] });
export const robotoslab = Roboto_Slab({ weight: ['variable'], subsets: ["cyrillic"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="ru" className={comforta.className}>
          <meta
              name="viewport"
              content="width=device-width, initial-scale=1.0"></meta>
          <body>
              <main className={"mx-auto max-w-[1280px] min-h-screen"}>
                  {children}
              </main>
          </body>
      </html>
  );
}
