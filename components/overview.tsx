"use client"

import { useEffect, useState } from "react"
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

const data = [
  {
    name: "Jan",
    administration: 24000,
    capital: 150000,
  },
  {
    name: "Feb",
    administration: 23500,
    capital: 152000,
  },
  {
    name: "Mar",
    administration: 24200,
    capital: 153500,
  },
  {
    name: "Apr",
    administration: 24685,
    capital: 156420,
  },
  {
    name: "May",
    administration: 0,
    capital: 0,
  },
  {
    name: "Jun",
    administration: 0,
    capital: 0,
  },
]

export function Overview() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={data}>
        <XAxis dataKey="name" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
        <YAxis
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `$${value}`}
        />
        <Tooltip formatter={(value) => [`$${value}`, ""]} labelFormatter={(label) => `${label} 2025`} />
        <Bar dataKey="administration" fill="#adfa1d" radius={[4, 4, 0, 0]} name="Administration Fund" />
        <Bar dataKey="capital" fill="#0ea5e9" radius={[4, 4, 0, 0]} name="Capital Works Fund" />
      </BarChart>
    </ResponsiveContainer>
  )
}

