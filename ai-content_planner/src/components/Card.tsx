import type { ReactNode } from "react"

interface CardProps {
    children: ReactNode
    className?: string
}

export default function Card({ children, className = "" }: CardProps) {
    const baseClasses = "bg-white rounded-lg shadow-sm border border-gray-200"

    return <div className={`${baseClasses} ${className}`}>{children}</div>
}
