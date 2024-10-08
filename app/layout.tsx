import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ModalProvider } from "./provider/model-provider";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import "./globals.css"; 

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "5keSign",
  description: "You want to get something different in your life. Sign up today.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <ModalProvider />
        <ToastContainer />
      </body>
    </html>
  );
}
