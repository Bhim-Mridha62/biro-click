import type { Metadata } from "next";
import { Noto_Sans_Hebrew } from "next/font/google";
import "./globals.css";

const notoSansHebrew = Noto_Sans_Hebrew({
  subsets: ["hebrew", "latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-noto-sans-hebrew",
  display: "swap",
});

export const metadata: Metadata = {
  title: "BiroClick",
  description:
    "פחות בירוקרטיה, יותר כסף בכיס שלך. בירוקליק מאחדת את כל הכלים שיעזרו לך לקבל את מה שמגיע לך.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl">
      <body className={`${notoSansHebrew.variable} bg-[#FBFBFB] min-h-screen font-sans text-right`}>
        {children}
      </body>
    </html>
  );
}
