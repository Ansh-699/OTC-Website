"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import dynamic from "next/dynamic"

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false })

export function FinancialCharts() {
  const options = {
    chart: { type: "line" as "line" },
    xaxis: { categories: ["Jan", "Feb", "Mar", "Apr", "May"] },
  }

  const profitSeries = [{ name: "Profit", data: [5000, 7000, 8000, 6000, 9000] }]
  const expenseSeries = [{ name: "Expenses", data: [3000, 4000, 3500, 4500, 5000] }]
  const cashFlowSeries = [{ name: "Cash Flow", data: [2000, 3000, 4500, 1500, 4000] }]

  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>Profit & Loss Overview</CardTitle>
        </CardHeader>
        <CardContent>
          <Chart options={options} series={profitSeries} type="line" height={300} />
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Expense Breakdown</CardTitle>
        </CardHeader>
        <CardContent>
          <Chart options={options} series={expenseSeries} type="bar" height={300} />
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Cash Flow</CardTitle>
        </CardHeader>
        <CardContent>
          <Chart options={options} series={cashFlowSeries} type="area" height={300} />
        </CardContent>
      </Card>
    </>
  )
}
