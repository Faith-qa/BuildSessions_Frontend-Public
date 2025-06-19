import Card from "@/components/Card"

export default function Analytics() {
    return (
        <div className="container mx-auto px-4 py-8">
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">Analytics Dashboard</h1>
                <p className="text-gray-600">Track your social media performance and engagement</p>
            </div>

            {/* TODO: Replace with actual analytics data */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <Card className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Total Reach</h3>
                    <p className="text-3xl font-bold text-blue-600">12.5k</p>
                    <p className="text-sm text-green-600 mt-1">+15% from last week</p>
                </Card>

                <Card className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Engagement</h3>
                    <p className="text-3xl font-bold text-green-600">2.4k</p>
                    <p className="text-sm text-green-600 mt-1">+8% from last week</p>
                </Card>

                <Card className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Followers</h3>
                    <p className="text-3xl font-bold text-purple-600">1.2k</p>
                    <p className="text-sm text-green-600 mt-1">+12 new followers</p>
                </Card>

                <Card className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Click Rate</h3>
                    <p className="text-3xl font-bold text-orange-600">3.2%</p>
                    <p className="text-sm text-red-600 mt-1">-2% from last week</p>
                </Card>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <Card className="p-6">
                    <h2 className="text-xl font-semibold text-gray-900 mb-4">Engagement Over Time</h2>
                    {/* TODO: Replace with actual chart component */}
                    <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
                        <div className="text-center text-gray-500">
                            <div className="text-4xl mb-2">📊</div>
                            <p className="text-lg font-medium">Chart Placeholder</p>
                            <p className="text-sm">TODO: Implement chart library (Chart.js, Recharts, etc.)</p>
                        </div>
                    </div>
                </Card>

                <Card className="p-6">
                    <h2 className="text-xl font-semibold text-gray-900 mb-4">Platform Performance</h2>
                    {/* TODO: Replace with actual chart component */}
                    <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
                        <div className="text-center text-gray-500">
                            <div className="text-4xl mb-2">📈</div>
                            <p className="text-lg font-medium">Platform Chart Placeholder</p>
                            <p className="text-sm">TODO: Implement platform comparison chart</p>
                        </div>
                    </div>
                </Card>
            </div>

            <Card className="p-6 mt-8">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Top Performing Posts</h2>
                {/* TODO: Replace with dynamic data */}
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead>
                        <tr className="border-b border-gray-200">
                            <th className="text-left py-3 px-4 font-medium text-gray-700">Post</th>
                            <th className="text-left py-3 px-4 font-medium text-gray-700">Platform</th>
                            <th className="text-left py-3 px-4 font-medium text-gray-700">Reach</th>
                            <th className="text-left py-3 px-4 font-medium text-gray-700">Engagement</th>
                            <th className="text-left py-3 px-4 font-medium text-gray-700">Date</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr className="border-b border-gray-100">
                            <td className="py-3 px-4">Summer Sale Announcement</td>
                            <td className="py-3 px-4">Instagram</td>
                            <td className="py-3 px-4">2.1k</td>
                            <td className="py-3 px-4">340</td>
                            <td className="py-3 px-4">Jan 15, 2024</td>
                        </tr>
                        <tr className="border-b border-gray-100">
                            <td className="py-3 px-4">Product Tutorial</td>
                            <td className="py-3 px-4">YouTube</td>
                            <td className="py-3 px-4">1.8k</td>
                            <td className="py-3 px-4">280</td>
                            <td className="py-3 px-4">Jan 12, 2024</td>
                        </tr>
                        <tr className="border-b border-gray-100">
                            <td className="py-3 px-4">Behind the Scenes</td>
                            <td className="py-3 px-4">Twitter</td>
                            <td className="py-3 px-4">1.5k</td>
                            <td className="py-3 px-4">220</td>
                            <td className="py-3 px-4">Jan 10, 2024</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </Card>
        </div>
    )
}
