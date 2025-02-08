"use client"

import { useState } from "react"
import { FloatingActions } from "@/components/FloatingActions"
import { PaymentModal } from "@/components/PaymentModal"
import type React from "react"
import { useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useAuth } from "@/contexts/AuthContext"
import { useTheme } from "@/contexts/ThemeContext"
import { Transition } from "@headlessui/react"
import { ChevronDown, ChevronRight, Home, Users, FileText, DollarSign, BarChart2, Download, Share2 } from "lucide-react"
import { ScreenshotButton } from "@/components/ScreenshotButton"

const MobileNav = ({ items }: { items: any[] }) => {
  const pathname = usePathname()

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white dark:bg-[#1E1E2D] border-t dark:border-gray-700 md:hidden">
      <div className="flex justify-around p-2">
        {items.slice(0, 5).map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`p-2 rounded-full ${
              pathname.startsWith(item.href) ? "text-[#435EBE] dark:text-white" : "text-gray-500 dark:text-gray-400"
            }`}
          >
            {item.icon}
          </Link>
        ))}
      </div>
    </nav>
  )
}

const Sidebar = () => {
  const pathname = usePathname()
  const [openMenus, setOpenMenus] = useState<string[]>([])
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  const menuItems = [
    { href: "/dashboard", label: "Dashboard", icon: <Home className="h-6 w-6" /> },
    {
      href: "/contacts",
      label: "Contacts",
      icon: <Users className="h-6 w-6" />,
      subItems: [
        { href: "/contacts/all", label: "All Contacts" },
        { href: "/contacts/add", label: "Add New Contact" },
        { href: "/contacts/groups", label: "Contact Groups" },
      ],
    },
    {
      href: "/transactions",
      label: "Transactions",
      icon: <FileText className="h-6 w-6" />,
      subItems: [
        { href: "/transactions/all", label: "All Transactions" },
        { href: "/transactions/add", label: "Add New Transaction" },
        { href: "/transactions/pending", label: "Pending Transactions" },
      ],
    },
    {
      href: "/deals",
      label: "Deals",
      icon: <DollarSign className="h-6 w-6" />,
      subItems: [
        { href: "/deals/all", label: "All Deals" },
        { href: "/deals/new", label: "New Deal" },
        { href: "/deals/history", label: "Deal History" },
      ],
    },
    {
      href: "/reports",
      label: "Reports",
      icon: <BarChart2 className="h-6 w-6" />,
      subItems: [
        { href: "/reports/daily", label: "Daily Reports" },
        { href: "/reports/monthly", label: "Monthly Reports" },
        { href: "/reports/annual", label: "Annual Reports" },
      ],
    },
  ]

  if (isMobile) {
    return <MobileNav items={menuItems} />
  }

  const toggleMenu = (href: string) => {
    setOpenMenus((prevOpenMenus) =>
      prevOpenMenus.includes(href) ? prevOpenMenus.filter((item) => item !== href) : [...prevOpenMenus, href],
    )
  }

  return (
    <aside className="hidden md:block bg-white dark:bg-[#1E1E2D] text-gray-800 dark:text-white w-64 min-h-screen p-4 border-r dark:border-gray-700">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-xl font-bold">Crypto OTC</h1>
      </div>
      <nav>
        <ul className="space-y-2">
          {menuItems.map((item) => (
            <li key={item.href}>
              <div className="flex items-center">
                <Link
                  href={item.href}
                  className={`flex items-center px-4 py-2 rounded-lg transition-colors ${
                    pathname.startsWith(item.href)
                      ? "bg-[#435EBE] text-white"
                      : "hover:bg-gray-100 dark:hover:bg-gray-800"
                  }`}
                >
                  {item.icon}
                  <span className="ml-3">{item.label}</span>
                </Link>
                {item.subItems && (
                  <button
                    onClick={() => toggleMenu(item.href)}
                    className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg ml-2"
                  >
                    {openMenus.includes(item.href) ? (
                      <ChevronDown className="h-4 w-4" />
                    ) : (
                      <ChevronRight className="h-4 w-4" />
                    )}
                  </button>
                )}
              </div>
              {item.subItems && (
                <Transition
                  show={openMenus.includes(item.href)}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <ul className="ml-12 mt-2 space-y-2">
                    {item.subItems.map((subItem) => (
                      <li key={subItem.href}>
                        <Link
                          href={subItem.href}
                          className={`block px-4 py-2 rounded-lg transition-colors ${
                            pathname === subItem.href
                              ? "bg-[#435EBE] text-white"
                              : "hover:bg-gray-100 dark:hover:bg-gray-800"
                          }`}
                        >
                          {subItem.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </Transition>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  )
}

const Header = () => {
  const { user, logout } = useAuth()
  const { theme, toggleTheme } = useTheme()

  return (
    <header className="bg-white dark:bg-[#1E1E2D] shadow-md border-b dark:border-gray-700">
      <div className="flex justify-between items-center px-4 py-2">
        <h1 className="text-xl font-bold dark:text-white">Dashboard</h1>
        <div className="flex items-center space-x-4">
          <ScreenshotButton />
          <button className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700" aria-label="Download">
            <Download className="h-5 w-5" />
          </button>
          <button className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700" aria-label="Share">
            <Share2 className="h-5 w-5" />
          </button>
          <button onClick={toggleTheme} className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
            {theme === "light" ? "🌙" : "☀️"}
          </button>
          <span className="dark:text-white">{user?.name}</span>
          <button
            onClick={logout}
            className="bg-[#435EBE] hover:bg-[#3a51a3] text-white px-4 py-2 rounded-lg transition-colors"
          >
            Logout
          </button>
        </div>
      </div>
    </header>
  )
}

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const { isLoading } = useAuth()
  const [showPaymentModal, setShowPaymentModal] = useState(false)

  if (isLoading) {
    return <div>Loading...</div>
  }

  return (
    <div className="flex min-h-screen bg-gray-50 dark:bg-[#1E1E2D]">
      <Sidebar />
      <div className="flex-1">
        <Header />
        <main className="p-4 md:p-6 pb-24 md:pb-6">{children}</main>
      </div>
      <FloatingActions />
      <PaymentModal isOpen={showPaymentModal} onClose={() => setShowPaymentModal(false)} />
    </div>
  )
}

