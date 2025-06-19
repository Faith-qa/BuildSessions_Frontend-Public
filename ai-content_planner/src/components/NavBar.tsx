"use client"

import { useState } from "react"
import Button from "./Button"

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    // TODO: Replace with actual authentication state
    const isAuthenticated = true
    const userRole = "admin" // TODO: Get from auth context

    const navLinks = [
        { href: "/", label: "Dashboard", roles: ["user", "admin"] },
        { href: "/create-post", label: "Create Post", roles: ["user", "admin"] },
        { href: "/calendar", label: "Calendar", roles: ["user", "admin"] },
        { href: "/analytics", label: "Analytics", roles: ["user", "admin"] },
        { href: "/admin", label: "Admin", roles: ["admin"] },
    ]

    const filteredNavLinks = navLinks.filter((link) => link.roles.includes(userRole))

    return (
        <nav className="bg-white shadow-sm border-b border-gray-200 fixed w-full top-0 z-50">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <div className="flex items-center">
                        <a href="/" className="text-xl font-bold text-gray-900">
                            ContentCraft
                        </a>
                    </div>

                    {/* Desktop Navigation */}
                    {isAuthenticated && (
                        <div className="hidden md:flex items-center space-x-8">
                            {filteredNavLinks.map((link) => (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                                >
                                    {link.label}
                                </a>
                            ))}
                        </div>
                    )}

                    {/* User Menu */}
                    <div className="hidden md:flex items-center space-x-4">
                        {isAuthenticated ? (
                            <>
                                <div className="flex items-center space-x-2">
                                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                                        <span className="text-white text-sm font-medium">JD</span>
                                    </div>
                                    <span className="text-sm text-gray-700">John Doe</span>
                                </div>
                                <Button variant="outline" size="sm">
                                    Sign Out
                                </Button>
                            </>
                        ) : (
                            <>
                                <Button href="/login" variant="outline" size="sm">
                                    Sign In
                                </Button>
                                <Button href="/signup" size="sm">
                                    Sign Up
                                </Button>
                            </>
                        )}
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="text-gray-600 hover:text-gray-900 focus:outline-none focus:text-gray-900"
                        >
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                {isMenuOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <div className="md:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-gray-200">
                            {isAuthenticated &&
                                filteredNavLinks.map((link) => (
                                    <a
                                        key={link.href}
                                        href={link.href}
                                        className="text-gray-600 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium"
                                    >
                                        {link.label}
                                    </a>
                                ))}
                            <div className="border-t border-gray-200 pt-4">
                                {isAuthenticated ? (
                                    <>
                                        <div className="flex items-center px-3 py-2">
                                            <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mr-3">
                                                <span className="text-white text-sm font-medium">JD</span>
                                            </div>
                                            <span className="text-sm text-gray-700">John Doe</span>
                                        </div>
                                        <Button variant="outline" size="sm" className="mx-3 mt-2">
                                            Sign Out
                                        </Button>
                                    </>
                                ) : (
                                    <div className="space-y-2 px-3">
                                        <Button href="/login" variant="outline" size="sm" className="w-full">
                                            Sign In
                                        </Button>
                                        <Button href="/signup" size="sm" className="w-full">
                                            Sign Up
                                        </Button>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    )
}
