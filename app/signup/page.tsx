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
import Link from "next/link"

// Validation Schema
const signUpSchema = z.object({
    fullName: z.string().min(3, "Full Name is required"),
    phoneNumber: z.string().min(10, "Enter a valid phone number"),
    email: z.string().email("Enter a valid email address"),
    telegram: z.string().optional(),
    remarks: z.string().optional(),
})

export default function SignUpPage() {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm({
        resolver: zodResolver(signUpSchema),
    })

    const [successMessage, setSuccessMessage] = useState<string | null>(null)
    const router = useRouter()

    // Submit handler
    const onSubmit = async (data: any) => {
        console.log("Submitted Data:", data)
        setSuccessMessage("Sign-up successful! Redirecting...")

        setTimeout(() => {
            router.push("/dashboard") // Redirect after successful sign-up
        }, 2000)
    }

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100 dark:bg-gray-900">
            <Card className="w-full max-w-md p-6 shadow-lg bg-white dark:bg-gray-800">
                <CardHeader>
                    <CardTitle className="text-2xl font-bold">Sign Up</CardTitle>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                        {/* Full Name */}
                        <div>
                            <Label htmlFor="fullName">Full Name</Label>
                            <Input id="fullName" {...register("fullName")} />
                            {errors.fullName?.message && <p className="text-red-500 text-sm">{String(errors.fullName.message)}</p>}
                        </div>

                        {/* Phone Number */}
                        <div>
                            <Label htmlFor="phoneNumber">Phone Number</Label>
                            <Input id="phoneNumber" type="tel" {...register("phoneNumber")} />
                            {errors.phoneNumber && <p className="text-red-500 text-sm">{String(errors.phoneNumber.message)}</p>}
                        </div>

                        {/* Email Address */}
                        <div>
                            <Label htmlFor="email">Email Address</Label>
                            <Input id="email" type="email" {...register("email")} />
                            {errors.email && <p className="text-red-500 text-sm">{String(errors.email.message)}</p>}
                        </div>

                        {/* Telegram Username (Optional) */}
                        <div>
                            <Label htmlFor="telegram">Telegram Username (Optional)</Label>
                            <Input id="telegram" {...register("telegram")} />
                        </div>

                        {/* Remarks (Optional) */}
                        <div>
                            <Label htmlFor="remarks">Remarks (Optional)</Label>
                            <Input id="remarks" {...register("remarks")} />
                        </div>

                        {/* Submit Button */}
                        <Button type="submit" className="w-full" disabled={isSubmitting}>
                            {isSubmitting ? "Submitting..." : "Sign Up"}
                        </Button>
                    </form>

                    {/* Success Message */}
                    {successMessage && <p className="text-green-500 text-center mt-4">{successMessage}</p>}

                    {/* Sign In Link */}
                    <p className="text-center mt-4">
                        Already have an account? <Link href="/signin" className="text-blue-500">Sign In</Link>
                    </p>
                </CardContent>
            </Card>
        </div>
    )
}
