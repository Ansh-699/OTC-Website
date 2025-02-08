"use client"

import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

const data = [
  {
    time: "00:00",
    BTC: 45000,
    ETH: 2300,
  },
  {
    time: "04:00",
    BTC: 46000,
    ETH: 2350,
  },
  {
    time: "08:00",
    BTC: 45500,
    ETH: 2320,
  },
  {
    time: "12:00",
    BTC: 47000,
    ETH: 2400,
  },
  {
    time: "16:00",
    BTC: 46500,
    ETH: 2380,
  },
  {
    time: "20:00",
    BTC: 46800,
    ETH: 2390,
  },
  {
    time: "24:00",
    BTC: 47200,
    ETH: 2410,
  },
]

export function CurrencyChart() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <LineChart data={data}>
        <XAxis dataKey="time" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
        <YAxis
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `$${value}`}
        />
        <Tooltip />
        <Line type="monotone" dataKey="BTC" stroke="#8884d8" strokeWidth={2} dot={false} />
        <Line type="monotone" dataKey="ETH" stroke="#82ca9d" strokeWidth={2} dot={false} />
      </LineChart>
    </ResponsiveContainer>
  )
}

