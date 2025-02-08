"use client"
import { Camera } from "lucide-react"

export const ScreenshotButton = () => {
  const takeScreenshot = () => {
    // Using html2canvas or similar library would go here
    console.log("Taking screenshot...")
  }

  return (
    <button
      onClick={takeScreenshot}
      className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
      aria-label="Take screenshot"
    >
      <Camera className="h-5 w-5" />
    </button>
  )
}

