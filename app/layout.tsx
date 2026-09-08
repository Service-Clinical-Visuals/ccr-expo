import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Custom Demos",
  description: "Custom demos for New businesses",
  icons: {
    icon: '/tcp-logo.png',
  },
};

import AOSProvider from "./_components/AOSProvider";

//Root layout
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AOSProvider>
          {children}
        </AOSProvider>
      </body>
    </html>
  );
}
