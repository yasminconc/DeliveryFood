import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
// import { Poppins } from "next/font/google";
import UserContext from "@/Context/UserContext";

const poppins = Poppins({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <UserContext>
      <html lang="en">
        <body className={poppins.className}>{children}</body>
      </html>
    </UserContext>
  );
}