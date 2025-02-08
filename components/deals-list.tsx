"use client"

import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Progress } from "@/components/ui/progress"

const deals = [
  {
    id: "1",
    date: "2024-02-03",
    crypto: "BTC",
    amount: "1.5 BTC",
    price: "$45,000",
    total: "$67,500",
    status: "in_progress",
    progress: 75,
  },
  {
    id: "2",
    date: "2024-02-02",
    crypto: "ETH",
    amount: "10 ETH",
    price: "$2,300",
    total: "$23,000",
    status: "completed",
    progress: 100,
  },
  // Add more deals as needed
]

export function DealsList() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Date</TableHead>
          <TableHead>Crypto</TableHead>
          <TableHead>Amount</TableHead>
          <TableHead>Price</TableHead>
          <TableHead>Total</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Progress</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {deals.map((deal) => (
          <TableRow key={deal.id}>
            <TableCell>{deal.date}</TableCell>
            <TableCell>{deal.crypto}</TableCell>
            <TableCell>{deal.amount}</TableCell>
            <TableCell>{deal.price}</TableCell>
            <TableCell>{deal.total}</TableCell>
            <TableCell>
              <Badge variant={deal.status === "completed" ? "default" : "secondary"}>{deal.status}</Badge>
            </TableCell>
            <TableCell>
              <Progress value={deal.progress} className="w-[60px]" />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

