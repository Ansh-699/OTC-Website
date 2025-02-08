"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Calendar } from "@/components/ui/calendar"
import { format, subDays } from "date-fns"
import { DateRange } from "react-day-picker"

export function DateRangeSelector({ onDateChange }: { onDateChange: (range: { from: Date; to: Date }) => void }) {
  const [dateRange, setDateRange] = useState<DateRange | undefined>(undefined)

  const handleSelectDate = (range: DateRange | undefined) => {
    if (range?.from && range?.to) {
      setDateRange(range)
      onDateChange({ from: range.from, to: range.to })
    }
  }

  const setQuickRange = (days: number) => {
    const from = subDays(new Date(), days)
    const to = new Date()
    setDateRange({ from, to })
    onDateChange({ from, to })
  }

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">
          {dateRange?.from && dateRange?.to
            ? `${format(dateRange.from, "MMM dd, yyyy")} - ${format(dateRange.to, "MMM dd, yyyy")}`
            : "Select Date Range"}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="p-4 space-y-4">
        <Calendar mode="range" selected={dateRange} onSelect={handleSelectDate} />
        <div className="flex flex-wrap gap-2">
          <Button variant="outline" size="sm" onClick={() => setQuickRange(7)}>Last Week</Button>
          <Button variant="outline" size="sm" onClick={() => setQuickRange(30)}>Last Month</Button>
          <Button variant="outline" size="sm" onClick={() => setQuickRange(365)}>Last Year</Button>
        </div>
      </PopoverContent>
    </Popover>
  )
}
