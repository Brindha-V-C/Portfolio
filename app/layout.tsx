import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Brindha V C | Cloud & DevOps Portfolio",
  description: "Portfolio of Brindha V C — Computer Science Graduate focused on cloud, DevOps, Azure, CI/CD and Python.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
