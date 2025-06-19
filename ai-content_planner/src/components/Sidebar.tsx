"use client"

import { useState } from "react"

export default function Sidebar() {
    const [isCollapsed, setIsCollapsed] = useState(false)

    // TODO: Replace with actual authentication state
    const userRole = "admin"

    const sidebarItems = [
        { icon: "🏠", label: "Dashboard", href: "/", roles: ["user", "admin"] },
        { icon: "✏️", label: "Create Post", href: "/create-post", roles: ["user", "admin"] },
        { icon: "📅", label: "Calendar", href: "/calendar", roles: ["user", "admin"] },
        { icon: "📊", label: "Analytics", href: "/analytics", roles: ["user", "admin"] },
        { icon: "⚙️", label: "Admin", href: "/admin", roles: ["admin"] },
    ]

    const filteredItems = sidebarItems.filter((item) => item.roles.includes(userRole))

    return (
        <div
            className={`bg-white shadow-lg border-r border-gray-200 transition-all duration-300 ${
                isCollapsed ? "w-16" : "w-64"
            } hidden lg:block fixed left-0 top-16 h-full z-40`}
        >
            <div className="p-4">
                <button
                    onClick={() => setIsCollapsed(!isCollapsed)}
                    className="w-full flex items-center justify-center p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-md transition-colors"
                >
                    {isCollapsed ? "→" : "←"}
                </button>
            </div>

            <nav className="px-4 pb-4">
                <ul className="space-y-2">
                    {filteredItems.map((item) => (
                        <li key={item.href}>
                            <a
                                href={item.href}
                                className="flex items-center p-3 text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded-md transition-colors group"
                                title={isCollapsed ? item.label : ""}
                            >
                                <span className="text-lg">{item.icon}</span>
                                {!isCollapsed && <span className="ml-3 text-sm font-medium">{item.label}</span>}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>

            {/* TODO: Add user profile section at bottom */}
            {!isCollapsed && (
                <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center p-3 bg-gray-50 rounded-md">
                        <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                            <span className="text-white text-sm font-medium">JD</span>
                        </div>
                        <div className="ml-3">
                            <p className="text-sm font-medium text-gray-900">John Doe</p>
                            <p className="text-xs text-gray-500">john@example.com</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
