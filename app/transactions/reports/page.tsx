"use client"
import { useState } from "react"

const mockReports = [
  {
    transactionTime: "2023-01-01T12:00:00.000Z",
    date: "2023-01-01",
    amount: 100,
    fromAccount: "Savings",
    toAccount: "Checking",
  },
  {
    transactionTime: "2023-01-02T12:00:00.000Z",
    date: "2023-01-02",
    amount: 200,
    fromAccount: "Checking",
    toAccount: "Savings",
  },
]

export default function TransactionReportsPage() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-2xl font-bold mb-5">Transaction Reports</h1>
      {mockReports.map((report, index) => (
        <div
          key={index}
          className={`border p-4 mb-4 rounded-md shadow-sm transition-all duration-300 ${
            hoveredIndex === index
              ? "scale-103 bg-gray-50 border-blue-300"
              : "scale-100"
          }`}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <p className="text-sm text-gray-600">
            Date: {report.date} Time:{report.transactionTime}
          </p>
          <p className="text-base">
            Amount: ${report.amount} From: {report.fromAccount} To:{" "}
            {report.toAccount}
          </p>
        </div>
      ))}
    </div>
  )
}