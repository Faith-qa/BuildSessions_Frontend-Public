import Card from "@/components/Card"
import Button from "@/components/Button"

export default function Calendar() {
    // TODO: Replace with actual calendar logic
    const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
    const daysInMonth = Array.from({ length: 31 }, (_, i) => i + 1)

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="mb-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">Content Calendar</h1>
                    <p className="text-gray-600">Plan and organize your social media posts</p>
                </div>
                <div className="flex gap-2">
                    <Button variant="outline">← Previous</Button>
                    <Button variant="outline">Next →</Button>
                </div>
            </div>

            <Card className="p-6">
                <div className="mb-6 flex justify-between items-center">
                    <h2 className="text-xl font-semibold text-gray-900">January 2024</h2>
                    <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                            Month
                        </Button>
                        <Button variant="outline" size="sm">
                            Week
                        </Button>
                        <Button variant="outline" size="sm">
                            Day
                        </Button>
                    </div>
                </div>

                {/* TODO: Replace with interactive calendar component */}
                <div className="grid grid-cols-7 gap-1 mb-4">
                    {daysOfWeek.map((day) => (
                        <div key={day} className="p-2 text-center font-medium text-gray-700 bg-gray-50">
                            {day}
                        </div>
                    ))}
                </div>

                <div className="grid grid-cols-7 gap-1">
                    {daysInMonth.map((day) => (
                        <div key={day} className="min-h-[120px] p-2 border border-gray-200 hover:bg-gray-50 cursor-pointer">
                            <div className="font-medium text-gray-900 mb-2">{day}</div>
                            {/* TODO: Add drag and drop functionality */}
                            {day === 15 && <div className="bg-blue-100 text-blue-800 text-xs p-1 rounded mb-1">Instagram Post</div>}
                            {day === 22 && <div className="bg-green-100 text-green-800 text-xs p-1 rounded mb-1">Twitter Thread</div>}
                            {day === 28 && (
                                <div className="bg-purple-100 text-purple-800 text-xs p-1 rounded mb-1">YouTube Video</div>
                            )}
                        </div>
                    ))}
                </div>

                <div className="mt-6 text-center text-gray-500">
                    <p className="text-lg">📅 Drag posts here to schedule them</p>
                    <p className="text-sm mt-2">TODO: Implement drag and drop functionality for post scheduling</p>
                </div>
            </Card>
        </div>
    )
}
