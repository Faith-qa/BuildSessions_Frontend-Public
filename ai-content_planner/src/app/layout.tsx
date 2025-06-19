import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/Navbar"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
    title: "ContentCraft - Social Media Content Planner",
    description: "Plan, create, and schedule your social media content with ease",
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <body className={inter.className}>
        <div className="min-h-screen bg-gray-50">
            <Navbar />
            <main className="pt-16">{children}</main>
        </div>
        </body>
        </html>
    )
}
