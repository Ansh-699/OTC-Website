"use client"

import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const transactions = [
  {
    id: "1",
    date: "2024-02-03",
    description: "BTC Purchase",
    amount: "+$1,234.56",
    status: "completed",
    type: "crypto",
  },
  {
    id: "2",
    date: "2024-02-02",
    description: "ETH Sale",
    amount: "-$2,345.67",
    status: "pending",
    type: "crypto",
  },
  // Add more transactions as needed
]

export function TransactionsList() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Date</TableHead>
          <TableHead>Description</TableHead>
          <TableHead>Amount</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Type</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {transactions.map((transaction) => (
          <TableRow key={transaction.id}>
            <TableCell>{transaction.date}</TableCell>
            <TableCell>{transaction.description}</TableCell>
            <TableCell>{transaction.amount}</TableCell>
            <TableCell>
              <Badge variant={transaction.status === "completed" ? "default" : "secondary"}>{transaction.status}</Badge>
            </TableCell>
            <TableCell>{transaction.type}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

