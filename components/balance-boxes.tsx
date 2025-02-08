"use client"
import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { DollarSign, TrendingUp, TrendingDown } from "lucide-react"
import { Checkbox } from "@/components/ui/checkbox"

const allAccounts = [
    { id: 1, name: "Main Account", balance: 12000, currency: "USD", todaysChange: 200 },
    { id: 2, name: "Trading Account", balance: -3500, currency: "USD", todaysChange: -150 },
    { id: 3, name: "Savings Account", balance: 7800, currency: "EUR", todaysChange: 50 },
    { id: 4, name: "Expense Account", balance: 0, currency: "USD", todaysChange: 0 },
    { id: 5, name: "Crypto Wallet", balance: 5000, currency: "BTC", todaysChange: 300 },
    { id: 6, name: "Investment Fund", balance: 15500, currency: "USD", todaysChange: 400 },
]

const profit = 23000 // Example total profit
const expenses = 8700 // Example total expenses

export function BalanceBoxes() {
    const [selectedAccounts, setSelectedAccounts] = useState(allAccounts.map((acc) => acc.id))

    const toggleAccountSelection = (id: number) => {
        setSelectedAccounts((prev) =>
            prev.includes(id) ? prev.filter((accId) => accId !== id) : [...prev, id]
        )
    }

    return (
        <div className="space-y-6">
            {/* Account Selection */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {allAccounts.map((account) => (
                    <div key={account.id} className="flex items-center space-x-2 p-2 border rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
                        <Checkbox
                            checked={selectedAccounts.includes(account.id)}
                            onCheckedChange={() => toggleAccountSelection(account.id)}
                            className="form-checkbox h-5 w-5 text-blue-600 rounded focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                        />
                        <span className="text-sm font-medium">{account.name}</span>
                    </div>
                ))}
            </div>

            {/* Balance Boxes */}
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {allAccounts
                    .filter((account) => selectedAccounts.includes(account.id))
                    .map((account) => {
                        const percentageChange = ((account.todaysChange / account.balance) * 100).toFixed(2)
                        return (
                            <Card key={account.id} className="border transform transition-transform duration-200 hover:scale-105">
                                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                    <CardTitle className="text-sm font-medium">{account.name}</CardTitle>
                                    <DollarSign
                                        className={`h-4 w-4 ${
                                            account.balance > 0 ? "text-green-500" : account.balance < 0 ? "text-red-500" : "text-gray-500"
                                        }`}
                                    />
                                </CardHeader>
                                <CardContent>
                                    <div
                                        className={`text-2xl font-bold ${
                                            account.balance > 0 ? "text-green-600" : account.balance < 0 ? "text-red-600" : "text-gray-600"
                                        }`}
                                    >
                                        {account.currency} {account.balance.toLocaleString()}
                                    </div>
                                    <div
                                        className={`text-sm ${
                                            account.todaysChange > 0 ? "text-green-500" : account.todaysChange < 0 ? "text-red-500" : "text-gray-500"
                                        }`}
                                    >
                                        {account.todaysChange > 0 ? "+" : ""}{account.currency} {account.todaysChange.toLocaleString()} ({percentageChange}%)
                                    </div>
                                </CardContent>
                            </Card>
                        )
                    })}

                {/* Profit & Expense Overview */}
                <Card className="border transform transition-transform duration-200 hover:scale-105">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Total Profits</CardTitle>
                        <TrendingUp className="h-4 w-4 text-green-500" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold text-green-600">USD {profit.toLocaleString()}</div>
                    </CardContent>
                </Card>

                <Card className="border transform transition-transform duration-200 hover:scale-105">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Total Expenses</CardTitle>
                        <TrendingDown className="h-4 w-4 text-red-500" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold text-red-600">USD {expenses.toLocaleString()}</div>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
