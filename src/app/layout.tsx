import "./globals.css"
import type { Metadata } from "next"
import { Inter } from 'next/font/google'
import { AuthProvider } from "@/contexts/AuthContext"
import { ThemeProvider } from '@/contexts/ThemeContext'
import type React from "react" // Added import for React

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Crypto OTC Admin",
  description: "Admin dashboard for Crypto OTC operations",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>
          <AuthProvider>{children}</AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}

