"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { useRouter } from "next/navigation"

// Validation Schema
const signInSchema = z.object({
  identifier: z.string().min(3, "Enter a valid username, phone, or email"),
  password: z.string().min(6, "Password must be at least 6 characters long"),
})

export default function SignInPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(signInSchema),
  })

  const [errorMessage, setErrorMessage] = useState<string | null>(null)
  const router = useRouter()

  // Submit handler
  const onSubmit = async (data: any) => {
    console.log("Submitted Data:", data)
    
    // Mock authentication logic
    if (data.identifier === "testuser" && data.password === "password123") {
      router.push("/dashboard") // Redirect to dashboard on success
    } else {
      setErrorMessage("Invalid username, phone, or password")
    }
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <Card className="w-full max-w-md p-6 shadow-lg bg-white dark:bg-gray-800">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Sign In</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {/* Username, Phone, or Email */}
            <div>
              <Label htmlFor="identifier">Username / Phone / Email</Label>
              <Input id="identifier" {...register("identifier")} />
              {errors.identifier?.message && <p className="text-red-500 text-sm">{errors.identifier.message.toString()}</p>}
            </div>

            {/* Password */}
            <div>
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" {...register("password")} />
              {errors.password && <p className="text-red-500 text-sm">{errors.password.message?.toString()}</p>}
            </div>

            {/* Error Message */}
            {errorMessage && <p className="text-red-500 text-center">{errorMessage}</p>}

            {/* Submit Button */}
            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? "Signing In..." : "Sign In"}
            </Button>
          </form>

          {/* Sign-Up Redirect */}
          <p className="text-center text-sm mt-4">
            Don't have an account? <a href="/signup" className="text-blue-500 hover:underline">Sign Up</a>
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
