import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./provider";
import Footer from "../components/Footer";
import Header from "@/components/Header";
import PRLogoW from "../public/PRLogoW.png";
import PRLogoB from "../public/PRLogoB.png";

const customFont = Raleway({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "PR Verse",
  description: "Portfolio - NextJS",
  icons: PRLogoW.src,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={customFont.className}>
        <ThemeProvider attribute="class" defaultTheme="dark">
          <main className="relative bg-slate-950 flex justify-center items-center overflow-hidden flex-col mx-auto sm:px-10 px-5">
            <Header />
            {children}
            <Footer />
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
