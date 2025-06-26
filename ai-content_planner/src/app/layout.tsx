'use client'
import type React from "react"
import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/Navbar"
import { Provider } from "react-redux"
import { store } from "@/store"

const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <head>
            <title>ContentCraft - Social Media Content Planner</title>
            <meta name="description" content="Plan, create, and schedule your social media content with ease" />
        </head>
        <body className={inter.className}>
        <Provider store={store}>
            <div className="min-h-screen bg-gray-50">
                <Navbar />
                <main className="pt-16">{children}</main>
            </div>
        </Provider>
        </body>
        </html>
    )
}
