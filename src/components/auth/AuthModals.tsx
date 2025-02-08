"use client"

import { useState } from "react"
import { Dialog } from "@headlessui/react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Icons } from "@/components/icons"
import type React from "react" // Added import for React

interface AuthModalsProps {
  isOpen: boolean
  onClose: () => void
  type: "signin" | "signup"
}

export function AuthModals({ isOpen, onClose, type }: AuthModalsProps) {
  const [isLoading, setIsLoading] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [name, setName] = useState("")

  async function onSubmit(event: React.FormEvent) {
    event.preventDefault()
    setIsLoading(true)

    try {
      if (type === "signin") {
        // Implement sign in logic
      } else {
        // Implement sign up logic
      }
    } catch (error) {
      console.error(error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="mx-auto max-w-sm rounded-lg bg-white dark:bg-[#1E1E2D] p-6 w-full">
          <Dialog.Title className="text-lg font-medium leading-6 text-gray-900 dark:text-white mb-4">
            {type === "signin" ? "Sign In" : "Create Account"}
          </Dialog.Title>
          <form onSubmit={onSubmit} className="space-y-4">
            {type === "signup" && (
              <div>
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  disabled={isLoading}
                />
              </div>
            )}
            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={isLoading}
              />
            </div>
            <div>
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                disabled={isLoading}
              />
            </div>
            <Button className="w-full" disabled={isLoading}>
              {isLoading && <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />}
              {type === "signin" ? "Sign In" : "Create Account"}
            </Button>
          </form>
        </Dialog.Panel>
      </div>
    </Dialog>
  )
}

