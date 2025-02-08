"use client"

import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const expenses = [
  {
    id: "1",
    date: "2024-02-03",
    description: "Office Rent",
    amount: "$2,500",
    category: "Rent",
    status: "paid",
  },
  {
    id: "2",
    date: "2024-02-02",
    description: "Employee Salaries",
    amount: "$12,000",
    category: "Salaries",
    status: "pending",
  },
  // Add more expenses as needed
]

export function ExpensesList() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Date</TableHead>
          <TableHead>Description</TableHead>
          <TableHead>Amount</TableHead>
          <TableHead>Category</TableHead>
          <TableHead>Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {expenses.map((expense) => (
          <TableRow key={expense.id}>
            <TableCell>{expense.date}</TableCell>
            <TableCell>{expense.description}</TableCell>
            <TableCell>{expense.amount}</TableCell>
            <TableCell>{expense.category}</TableCell>
            <TableCell>
              <Badge variant={expense.status === "paid" ? "default" : "secondary"}>{expense.status}</Badge>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

