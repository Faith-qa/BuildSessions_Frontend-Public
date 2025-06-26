"use client";

import type React from "react";
import { useState } from "react";
import Card from "@/components/Card";
import Input from "@/components/Input";
import Button from "@/components/Button";
import Link from "next/link";

export default function ResetPassword() {
    const [email, setEmail] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [message, setMessage] = useState("");

    const validateForm = () => {
        if (!email) {
            setMessage("Please enter your email");
            return false;
        }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            setMessage("Please enter a valid email");
            return false;
        }
        return true;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setMessage("");
        if (!validateForm()) return;

        setIsLoading(true);
        try {
            // Mock password reset request
            console.log(`Password reset requested for email: ${email}`);
            setMessage("Password reset link sent to your email (mocked)");
        } catch (error) {
            setMessage("An unexpected error occurred");
            console.error("Reset password failed:", error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center px-4">
            <Card className="w-full max-w-md p-8">
                <div className="text-center mb-8">
                    <h1 className="text-2xl font-bold text-gray-900 mb-2">Reset your password</h1>
                    <p className="text-gray-600">Enter your email address and we'll send you a link to reset your password</p>
                </div>

                {message && (
                    <div
                        className={`p-3 border rounded-md mb-6 ${
                            message.includes("error")
                                ? "bg-red-50 border-red-200 text-red-800"
                                : "bg-green-50 border-green-200 text-green-800"
                        }`}
                    >
                        <p className="text-sm">{message}</p>
                    </div>
                )}

                <form className="space-y-6" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                            Email address
                        </label>
                        <Input
                            id="email"
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>

                    <Button type="submit" className="w-full" disabled={isLoading}>
                        {isLoading ? "Sending..." : "Send reset link"}
                    </Button>
                </form>

                <div className="mt-6 text-center">
                    <p className="text-sm text-gray-600">
                        Remember your password?{" "}
                        <Link href="/login" className="text-blue-600 hover:text-blue-500 font-medium">
                            Sign in
                        </Link>
                    </p>
                </div>
            </Card>
        </div>
    );
}