import type { Metadata } from "next";
import "./globals.css";
import { BrowseMenu } from "./components/browse-menu";

export const metadata: Metadata = {
  title: "Star Wars Data Stuffs",
  description: "Browse Star Wars data from SWAPI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased min-h-screen flex flex-col bg-background">
        <header className="border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60 sticky top-0 z-50 shadow-sm">
          <div className="container mx-auto px-4 py-4">
            <h1 className="text-2xl md:text-3xl font-bold tracking-tight">
              Star Wars Data Stuffs
            </h1>
          </div>
        </header>
        <div className="flex-1 flex">
          <aside className="w-64 border-r bg-muted/30 hidden md:block">
            <div className="sticky top-[73px] p-4 h-[calc(100vh-73px)] overflow-y-auto">
              <BrowseMenu />
            </div>
          </aside>
          <main className="flex-1 container mx-auto px-4 py-6 md:py-8 max-w-7xl">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
