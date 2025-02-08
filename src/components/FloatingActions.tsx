"use client"

import { useState } from "react"
import { Camera, Share2, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Calendar as CalendarComponent } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { AuthModals } from "@/components/auth/AuthModals"

export function FloatingActions() {
  const [showAuthModal, setShowAuthModal] = useState(false)
  const [authType, setAuthType] = useState<"signin" | "signup">("signin")
  const [date, setDate] = useState<Date | undefined>(new Date())

  const takeScreenshot = () => {
    // Implement screenshot functionality
    console.log("Taking screenshot...")
  }

  const handleShare = () => {
    // Implement share functionality
    console.log("Sharing...")
  }

  const handleDownload = () => {
    // Implement download functionality with selected date
    console.log("Downloading report for:", date)
  }

  return (
    <>
      <div className="fixed bottom-20 md:bottom-8 right-8 flex flex-col gap-4">
        <Button
          size="icon"
          variant="outline"
          onClick={() => {
            setAuthType("signin")
            setShowAuthModal(true)
          }}
          className="rounded-full bg-white dark:bg-[#1E1E2D] shadow-lg"
        >
          Sign In
        </Button>
        <Button
          size="icon"
          variant="outline"
          onClick={() => {
            setAuthType("signup")
            setShowAuthModal(true)
          }}
          className="rounded-full bg-white dark:bg-[#1E1E2D] shadow-lg"
        >
          Sign Up
        </Button>
        <Button
          size="icon"
          variant="outline"
          onClick={takeScreenshot}
          className="rounded-full bg-white dark:bg-[#1E1E2D] shadow-lg"
        >
          <Camera className="h-4 w-4" />
        </Button>
        <Popover>
          <PopoverTrigger asChild>
            <Button size="icon" variant="outline" className="rounded-full bg-white dark:bg-[#1E1E2D] shadow-lg">
              <Calendar className="h-4 w-4" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="end">
            <CalendarComponent mode="single" selected={date} onSelect={setDate} initialFocus />
            <div className="p-2 border-t border-border">
              <Button onClick={handleDownload} className="w-full">
                Download Report
              </Button>
            </div>
          </PopoverContent>
        </Popover>
        <Button
          size="icon"
          variant="outline"
          onClick={handleShare}
          className="rounded-full bg-white dark:bg-[#1E1E2D] shadow-lg"
        >
          <Share2 className="h-4 w-4" />
        </Button>
      </div>

      <AuthModals isOpen={showAuthModal} onClose={() => setShowAuthModal(false)} type={authType} />
    </>
  )
}

