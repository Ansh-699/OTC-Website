import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Sidebar } from "@/components/sidebar"
import { ThemeToggle } from "@/components/theme-toggle"
import { Home, Phone, LifeBuoy } from "lucide-react"
import Link from "next/link"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Crypto Accounting System",
  description: "Web-based accounting system for OTC crypto exchange",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <div className="flex min-h-screen">
            <Sidebar />
            <main className="flex-1 overflow-y-auto">
              {/* Top Navigation Bar */}
              <div className="flex justify-between items-center p-4 border-b">
                <h1 className="text-xl font-bold">Crypto OTC</h1>

                {/* Icons and Authentication Buttons */}
                <div className="flex items-center space-x-4">
                  {/* Icons */}
                  <Home className="w-6 h-6 hover:scale-125 transition-transform cursor-pointer" />
                  <Phone className="w-6 h-6 hover:scale-125 transition-transform cursor-pointer" />
                  <LifeBuoy className="w-6 h-6 hover:scale-125 transition-transform cursor-pointer" />

                  {/* Auth Buttons */}
                  <div className="flex items-center space-x-2">
                    <Link href="/signup" className="text-sm font-medium border border-black p-2 rounded shadow-lg hover:scale-105 transition-transform">Sign Up</Link>
                    <Link href="/signin" className="text-sm font-medium border border-black p-2 rounded shadow-lg hover:scale-105 transition-transform">Sign In</Link>
                    <Link href="/transfer" className="text-sm font-medium border border-black p-2 rounded shadow-lg hover:scale-105 transition-transform">Transfer</Link>
                  </div>

                  {/* Theme Toggle */}
                  <ThemeToggle />
                </div>
              </div>

              {children}
            </main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
