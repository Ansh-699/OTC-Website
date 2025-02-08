"use client"

import { useState } from "react"

export default function NewTransactionPage() {
  const [cryptoType, setCryptoType] = useState("USDT")
  const [transactionRate, setTransactionRate] = useState("")

  const handleCryptoTypeChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setCryptoType(e.target.value)
  }

  const handleTransactionRateChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setTransactionRate(e.target.value)
  }

  return (
    <div className="flex justify-center">
      <div className="w-full max-w-sm">
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <h1 className="block text-gray-700 text-2xl font-bold mb-5">
            New Transaction
          </h1>
          <div className="mb-4">
            <label
              htmlFor="cryptoType"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Select Crypto Type:
            </label>
            <select
              id="cryptoType"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={cryptoType}
              onChange={handleCryptoTypeChange}
            >
              <option>USDT</option>
              <option>AED</option>
              <option>BTC</option>
            </select>
          </div>
          <div className="mb-6">
            <label
              htmlFor="transactionRate"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Transaction Rate:
            </label>
            <input
              type="number"
              id="transactionRate"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter transaction rate"
              value={transactionRate}
              onChange={handleTransactionRateChange}
            />
          </div>
          <div className="flex items-center justify-between">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Add Transaction
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
