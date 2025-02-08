"use client"

import { useState, type React } from "react"
import { Dialog } from "@headlessui/react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface PaymentModalProps {
  isOpen: boolean
  onClose: () => void
}

const CRYPTO_CURRENCIES = [
  { id: "btc", name: "Bitcoin", symbol: "BTC" },
  { id: "eth", name: "Ethereum", symbol: "ETH" },
  { id: "usdt", name: "Tether", symbol: "USDT" },
]

const FIAT_CURRENCIES = [
  { id: "usd", name: "US Dollar", symbol: "USD" },
  { id: "eur", name: "Euro", symbol: "EUR" },
  { id: "aed", name: "UAE Dirham", symbol: "AED" },
]

export function PaymentModal({ isOpen, onClose }: PaymentModalProps) {
  const [amount, setAmount] = useState("")
  const [selectedCrypto, setSelectedCrypto] = useState("")
  const [selectedFiat, setSelectedFiat] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  async function onSubmit(event: React.FormEvent) {
    event.preventDefault()
    setIsLoading(true)

    try {
      // Implement payment logic
      console.log({
        amount,
        cryptoCurrency: selectedCrypto,
        fiatCurrency: selectedFiat,
      })
    } catch (error) {
      console.error(error)
    } finally {
      setIsLoading(false)
      onClose()
    }
  }

  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="mx-auto max-w-sm rounded-lg bg-white dark:bg-[#1E1E2D] p-6 w-full">
          <Dialog.Title className="text-lg font-medium leading-6 text-gray-900 dark:text-white mb-4">
            Make Payment
          </Dialog.Title>
          <form onSubmit={onSubmit} className="space-y-4">
            <div>
              <Label htmlFor="crypto">Crypto Currency</Label>
              <Select value={selectedCrypto} onValueChange={setSelectedCrypto}>
                <SelectTrigger>
                  <SelectValue placeholder="Select crypto currency" />
                </SelectTrigger>
                <SelectContent>
                  {CRYPTO_CURRENCIES.map((currency) => (
                    <SelectItem key={currency.id} value={currency.id}>
                      {currency.name} ({currency.symbol})
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="fiat">Fiat Currency</Label>
              <Select value={selectedFiat} onValueChange={setSelectedFiat}>
                <SelectTrigger>
                  <SelectValue placeholder="Select fiat currency" />
                </SelectTrigger>
                <SelectContent>
                  {FIAT_CURRENCIES.map((currency) => (
                    <SelectItem key={currency.id} value={currency.id}>
                      {currency.name} ({currency.symbol})
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="amount">Amount</Label>
              <Input
                id="amount"
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                disabled={isLoading}
                placeholder="Enter amount"
              />
            </div>
            <Button className="w-full" disabled={isLoading}>
              {isLoading ? "Processing..." : "Confirm Payment"}
            </Button>
          </form>
        </Dialog.Panel>
      </div>
    </Dialog>
  )
}

