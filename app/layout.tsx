import type { Metadata } from "next";
import { SessionProvider } from "next-auth/react"; // Import SessionProvider
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

// Assume `session` is added to the props passed to RootLayout
export default function RootLayout({
  children,
  session, // Add session to the component's props
}: Readonly<{
  children: React.ReactNode;
  session?: any; // Type accordingly based on your session object's structure
}>) {
  return (
    <html lang="en">
      <SessionProvider session={session}> {/* Wrap children with SessionProvider */}
        <body className={inter.className}>{children}</body>
      </SessionProvider>
    </html>
  );
}