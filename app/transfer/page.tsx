"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";

const accounts = [
  { id: "1", name: "Main Account", currency: "USD" },
  { id: "2", name: "Trading Account", currency: "USD" },
  { id: "3", name: "Savings Account", currency: "EUR" },
  { id: "4", name: "Expense Account", currency: "USD" },
  { id: "5", name: "Crypto Wallet", currency: "BTC" },
  { id: "6", name: "Investment Fund", currency: "USD" },
];

export default function TransferPage() {
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [currency, setCurrency] = useState("USD");
  const [amount, setAmount] = useState("");
  const [fromAccount, setFromAccount] = useState("");
  const [toAccount, setToAccount] = useState("");
  const [remarks, setRemarks] = useState("");

  const filteredAccounts = accounts.filter((acc) => acc.currency === currency);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fromAccount || !toAccount || !amount || !date) {
      alert("Please fill in all required fields.");
      return;
    }
    if (fromAccount === toAccount) {
      alert("Cannot transfer to the same account.");
      return;
    }
    console.log({ date, currency, amount, fromAccount, toAccount, remarks });
    alert("Transfer Successful");
  };

  return (
    <div className="max-w-xl mx-auto p-6">
      <Card>
        <CardHeader>
          <CardTitle>Transfer Money</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Date */}
            <div>
              <Label>Date</Label>
              <Calendar mode="single" selected={date} onSelect={setDate} />
              {date && <p className="text-sm">Selected: {format(date, "PPP")}</p>}
            </div>

            {/* Currency */}
            <div>
              <Label>Currency</Label>
              <Select onValueChange={setCurrency} defaultValue={currency}>
                <SelectTrigger>
                  <SelectValue placeholder="Select Currency" />
                </SelectTrigger>
                <SelectContent>
                  {[...new Set(accounts.map((acc) => acc.currency))].map((curr) => (
                    <SelectItem key={curr} value={curr}>
                      {curr}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Amount */}
            <div>
              <Label>Amount</Label>
              <Input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} required />
            </div>

            {/* Transfer From Account */}
            <div>
              <Label>Transfer From</Label>
              <Select onValueChange={setFromAccount} defaultValue="">
                <SelectTrigger>
                  <SelectValue placeholder="Select Account" />
                </SelectTrigger>
                <SelectContent>
                  {filteredAccounts.map((acc) => (
                    <SelectItem key={acc.id} value={acc.id}>
                      {acc.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Transfer To Account */}
            <div>
              <Label>Transfer To</Label>
              <Select onValueChange={setToAccount} defaultValue="">
                <SelectTrigger>
                  <SelectValue placeholder="Select Account" />
                </SelectTrigger>
                <SelectContent>
                  {filteredAccounts.map((acc) => (
                    <SelectItem key={acc.id} value={acc.id}>
                      {acc.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Remarks */}
            <div>
              <Label>Remarks (Optional)</Label>
              <Textarea value={remarks} onChange={(e) => setRemarks(e.target.value)} />
            </div>

            {/* Submit Button */}
            <Button type="submit" className="w-full">Transfer</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}