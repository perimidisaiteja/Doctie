import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Doctie — AI Healthcare Assistant",
  description: "A patient-first AI healthcare platform for India.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
