import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Currency Settings",
  description: "Manage currency settings",
}

export default function CurrencySettingsPage() {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-2xl font-bold mb-5">Currency Settings</h1>
      {/* Add currency settings management here */}
    </div>
  )
}

