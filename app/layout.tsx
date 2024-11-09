import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./provider";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import PRLogoW from "../public/PRLogoW.png";
import PRLogoB from "../public/PRLogoB.png";
import ReactReduxProvider from "@/store/ReduxProvider";
import { fetchNavbarItems } from "../lib/fetchNavbarItems";
import { navMenuItems } from "@/data";

const customFont = Raleway({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "PR Verse",
  description: "Portfolio - NextJS",
  icons: PRLogoW.src,
};

export const revalidate = 60;

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  //const navItems = await fetchNavbarItems();
  const navItems = navMenuItems;

  return (
    <html lang="en">
      <body className={customFont.className}>
        <ReactReduxProvider>
          <ThemeProvider attribute="class" defaultTheme="dark">
            <main className="relative bg-slate-950 flex justify-center items-center overflow-hidden flex-col mx-auto sm:px-10 px-5">
              <Header navItems={navItems} />
              {children}
              <Footer />
            </main>
          </ThemeProvider>
        </ReactReduxProvider>
      </body>
    </html>
  );
}
