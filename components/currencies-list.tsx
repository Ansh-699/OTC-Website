"use client"

import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const currencies = [
  {
    id: "1",
    name: "Bitcoin",
    symbol: "BTC",
    price: "$45,000",
    change: "+5.2%",
    volume: "$1.2B",
    type: "crypto",
  },
  {
    id: "2",
    name: "Ethereum",
    symbol: "ETH",
    price: "$2,300",
    change: "-2.1%",
    volume: "$800M",
    type: "crypto",
  },
  // Add more currencies as needed
]

export function CurrenciesList() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Symbol</TableHead>
          <TableHead>Price</TableHead>
          <TableHead>24h Change</TableHead>
          <TableHead>Volume</TableHead>
          <TableHead>Type</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {currencies.map((currency) => (
          <TableRow key={currency.id}>
            <TableCell>{currency.name}</TableCell>
            <TableCell>{currency.symbol}</TableCell>
            <TableCell>{currency.price}</TableCell>
            <TableCell className={currency.change.startsWith("+") ? "text-green-600" : "text-red-600"}>
              {currency.change}
            </TableCell>
            <TableCell>{currency.volume}</TableCell>
            <TableCell>
              <Badge variant={currency.type === "crypto" ? "default" : "secondary"}>{currency.type}</Badge>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

