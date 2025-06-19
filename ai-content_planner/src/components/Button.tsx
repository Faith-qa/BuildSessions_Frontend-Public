"use client"

import type { ReactNode } from "react"

interface ButtonProps {
    children: ReactNode
    variant?: "primary" | "outline" | "ghost"
    size?: "sm" | "md" | "lg"
    type?: "button" | "submit" | "reset"
    disabled?: boolean
    className?: string
    href?: string
    onClick?: () => void
}

export default function Button({
                                   children,
                                   variant = "primary",
                                   size = "md",
                                   type = "button",
                                   disabled = false,
                                   className = "",
                                   href,
                                   onClick,
                               }: ButtonProps) {
    const baseClasses =
        "inline-flex items-center justify-center font-medium rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"

    const variantClasses = {
        primary: "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500",
        outline: "border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 focus:ring-blue-500",
        ghost: "text-gray-700 hover:bg-gray-100 focus:ring-blue-500",
    }

    const sizeClasses = {
        sm: "px-3 py-1.5 text-sm",
        md: "px-4 py-2 text-sm",
        lg: "px-6 py-3 text-base",
    }

    const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`

    if (href) {
        return (
            <a href={href} className={classes}>
                {children}
            </a>
        )
    }

    return (
        <button type={type} disabled={disabled} className={classes} onClick={onClick}>
            {children}
        </button>
    )
}
