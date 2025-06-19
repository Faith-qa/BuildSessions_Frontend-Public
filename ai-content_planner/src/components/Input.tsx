"use client"

import type React from "react"

interface InputProps {
    id?: string
    type?: string
    placeholder?: string
    value?: string
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
    required?: boolean
    disabled?: boolean
    className?: string
}

export default function Input({
                                  id,
                                  type = "text",
                                  placeholder,
                                  value,
                                  onChange,
                                  required = false,
                                  disabled = false,
                                  className = "",
                              }: InputProps) {
    const baseClasses =
        "w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-100 disabled:cursor-not-allowed"

    return (
        <input
            id={id}
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            required={required}
            disabled={disabled}
            className={`${baseClasses} ${className}`}
        />
    )
}
