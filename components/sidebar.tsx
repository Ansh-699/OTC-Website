"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  BarChart3,
  Contact2,
  DollarSign,
  HandCoins,
  LayoutDashboard,
  Receipt,
  Settings,
  ChevronDown,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { TooltipProvider } from "@/components/ui/tooltip"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"

const menuItems = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
    href: "/",
    subItems: [],
  },
  {
    title: "Contacts",
    icon: Contact2,
    href: "/contacts",
    subItems: [
      { title: "All Contacts", href: "/contacts" },
      { title: "Add Contact", href: "/contacts/add" },
      { title: "Contact Groups", href: "/contacts/groups" },
    ],
  },
  {
    title: "Transactions",
    icon: Receipt,
    href: "/transactions",
    subItems: [
      { title: "All Transactions", href: "/transactions" },
      { title: "New Transaction", href: "/transactions/new" },
      { title: "Transaction Reports", href: "/transactions/reports" },
    ],
  },
  {
    title: "Deals",
    icon: HandCoins,
    href: "/deals",
    subItems: [
      { title: "Active Deals", href: "/deals" },
      { title: "New Deal", href: "/deals/new" },
      { title: "Deal History", href: "/deals/history" },
    ],
  },
  {
    title: "Expenses",
    icon: DollarSign,
    href: "/expenses",
    subItems: [
      { title: "All Expenses", href: "/expenses" },
      { title: "Add Expense", href: "/expenses/add" },
      { title: "Expense Categories", href: "/expenses/categories" },
    ],
  },
  {
    title: "Currencies",
    icon: BarChart3,
    href: "/currencies",
    subItems: [
      { title: "Currency List", href: "/currencies" },
      { title: "Exchange Rates", href: "/currencies/rates" },
      { title: "Currency Settings", href: "/currencies/settings" },
    ],
  },
]

export function Sidebar() {
  const pathname = usePathname()

  return (
    <TooltipProvider>
      <div className="flex h-screen w-64 flex-col border-r bg-muted/40 py-4">
        <div className="flex h-16 items-center px-4">
          <h1 className="text-2xl font-bold">Crypto OTC</h1>
        </div>

        <nav className="flex flex-1 flex-col gap-2 p-4">
          {menuItems.map((item) => {
            const isActive = pathname.startsWith(item.href)
            return (
              <Collapsible key={item.href}>
                <CollapsibleTrigger asChild>
                  <Button
                    variant={isActive ? "default" : "ghost"}
                    className="w-full justify-between text-lg transition-all duration-300 ease-in-out hover:text-xl"
                  >
                    <div className="flex items-center">
                      <item.icon className="mr-2 h-5 w-5" />
                      <span>{item.title}</span>
                    </div>
                    {item.subItems.length > 0 && <ChevronDown className="h-4 w-4" />}
                  </Button>
                </CollapsibleTrigger>
                {item.subItems.length > 0 && (
                  <CollapsibleContent className="ml-6 mt-2">
                    {item.subItems.map((subItem) => (
                      <Link key={subItem.href} href={subItem.href}>
                        <Button variant="ghost" className="w-full justify-start text-sm">
                          {subItem.title}
                        </Button>
                      </Link>
                    ))}
                  </CollapsibleContent>
                )}
              </Collapsible>
            )
          })}
        </nav>

        <Button variant="ghost" size="icon" className="m-4">
          <Settings className="h-5 w-5" />
          <span className="sr-only">Settings</span>
        </Button>
      </div>
    </TooltipProvider>
  )
}

