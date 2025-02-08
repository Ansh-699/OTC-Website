import type { Metadata } from "next"
import { Circle, Home, Phone, LifeBuoy, Moon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { BalanceBoxes } from "@/components/balance-boxes"
import { FinancialCharts } from "@/components/financial-charts"
import { TopDebtorsCreditors } from "@/components/top-debtors-creditors"
import { DateRangeSelector } from "@/components/date-range-selector"

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Crypto OTC accounting system dashboard",
}

export default function DashboardPage() {
  return (
    <div className="flex-1 space-y-6 p-6 md:p-10">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4">
        <h2 className="text-3xl font-bold tracking-tight">Dashboard & Reporting Overview</h2>
        
        {/* Top Bar Icons & Controls */}
        <div className="flex items-center space-x-4">
          <DateRangeSelector/>
          {/* First Three Icons */}
          {/* <Home className="w-6 h-6 hover:scale-125 transition-transform" />
          <Phone className="w-6 h-6 hover:scale-125 transition-transform" />
          <LifeBuoy className="w-6 h-6 hover:scale-125 transition-transform" /> */}

          {/* Sign Up & Sign In Buttons */}
          {/* <div className="flex items-center space-x-2">
            <a href="/signup" className="text-sm font-medium">Sign Up</a>
            <a href="/signin" className="text-sm font-medium">Sign In</a>
          </div> */}

          {/* Dark Theme Toggle */}
          {/* <Moon className="w-6 h-6 cursor-pointer hover:scale-125 transition-transform" /> */}
        </div>
      </div>

      {/* Balance Boxes */}
      <BalanceBoxes />

      {/* Charts Section */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <FinancialCharts />
      </div>

      {/* Debtors & Creditors */}
      <TopDebtorsCreditors />
    </div>
  )
}
