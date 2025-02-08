import type { Metadata } from "next"
export const metadata: Metadata = {
  title: "Exchange Rates",
  description: "View and manage exchange rates",
}

export default function ExchangeRatesPage() {
  // Mock exchange rates data
  const exchangeRates = [
    { currency: "USD", rate: 1.0 },
    { currency: "EUR", rate: 0.85 },
    { currency: "GBP", rate: 0.72 },
    { currency: "JPY", rate: 110.33 },
  ];

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-2xl font-bold mb-5">Exchange Rates</h1>
      <div className="grid grid-cols-1 gap-4">
        {exchangeRates.map((rate) => (
          <div key={rate.currency} className="bg-white shadow-md rounded-lg overflow-hidden">
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{rate.currency}</div>
              <p className="text-gray-700 text-base">
                Rate (vs USD): {rate.rate}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
