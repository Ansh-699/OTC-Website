"use client"

import { Cell, Pie, PieChart, ResponsiveContainer, Legend } from "recharts"

const data = [
  { name: "Rent", value: 2500 },
  { name: "Salaries", value: 12000 },
  { name: "Utilities", value: 800 },
  { name: "Equipment", value: 1500 },
  { name: "Marketing", value: 2000 },
  { name: "Insurance", value: 1000 },
  { name: "Travel", value: 1200 },
  { name: "Others", value: 1000 },
]

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#8884d8", "#82ca9d", "#ffc658", "#8dd1e1"]

export function ExpensesChart() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <PieChart>
        <Pie data={data} cx="50%" cy="50%" labelLine={false} outerRadius={80} fill="#8884d8" dataKey="value">
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Legend />
      </PieChart>
    </ResponsiveContainer>
  )
}

