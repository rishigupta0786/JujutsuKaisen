"use client"
import Navbar from "@/components/navbar";
import "./globals.css";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

export default function Layout({ children }: { children: React.ReactNode }) {
  const queryClient = new QueryClient();
  return (
    <html className="dark">
      <body>
        <QueryClientProvider client={queryClient}>
          <main className="h-screen px-4 flex flex-col gap-4">
            <Navbar/>
            {children}
          </main>
        </QueryClientProvider>
      </body>
    </html>
  )
}
