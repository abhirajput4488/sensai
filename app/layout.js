import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import { ThemeProvider } from "@/components/theme-provider";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "SensAI - AI Career Coach",
  description: "SensAI is an AI career coach that helps you find the best AI jobs and courses.",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider appearance={{
      baseTheme:'dark',
    }}>
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className}`} >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Header/>
          <main className="min-h-screen">{children}</main>
          <Toaster richColors />

          <footer className="bg-muted/50 py-12">
           <div className="container mx-auto px-4 text-center text">
              <p>@cc Copyright 2025</p>
            </div>
          </footer>
        </ThemeProvider>
      </body>
    </html>
    </ClerkProvider>
  );
}
