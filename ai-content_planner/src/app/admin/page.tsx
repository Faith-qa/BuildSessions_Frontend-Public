import Card from "@/components/Card"
import Button from "@/components/Button"

export default function Admin() {
    return (
        <div className="container mx-auto px-4 py-8">
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">Admin Dashboard</h1>
                <p className="text-gray-600">Manage users and content across the platform</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <Card className="p-6">
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-xl font-semibold text-gray-900">Users</h2>
                        <Button size="sm">Add User</Button>
                    </div>

                    {/* TODO: Replace with dynamic user data */}
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead>
                            <tr className="border-b border-gray-200">
                                <th className="text-left py-2 px-2 font-medium text-gray-700">Name</th>
                                <th className="text-left py-2 px-2 font-medium text-gray-700">Email</th>
                                <th className="text-left py-2 px-2 font-medium text-gray-700">Role</th>
                                <th className="text-left py-2 px-2 font-medium text-gray-700">Actions</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr className="border-b border-gray-100">
                                <td className="py-2 px-2">John Doe</td>
                                <td className="py-2 px-2">john@example.com</td>
                                <td className="py-2 px-2">
                                    <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">Admin</span>
                                </td>
                                <td className="py-2 px-2">
                                    <Button variant="outline" size="sm">
                                        Edit
                                    </Button>
                                </td>
                            </tr>
                            <tr className="border-b border-gray-100">
                                <td className="py-2 px-2">Jane Smith</td>
                                <td className="py-2 px-2">jane@example.com</td>
                                <td className="py-2 px-2">
                                    <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">User</span>
                                </td>
                                <td className="py-2 px-2">
                                    <Button variant="outline" size="sm">
                                        Edit
                                    </Button>
                                </td>
                            </tr>
                            <tr className="border-b border-gray-100">
                                <td className="py-2 px-2">Mike Johnson</td>
                                <td className="py-2 px-2">mike@example.com</td>
                                <td className="py-2 px-2">
                                    <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">User</span>
                                </td>
                                <td className="py-2 px-2">
                                    <Button variant="outline" size="sm">
                                        Edit
                                    </Button>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </Card>

                <Card className="p-6">
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-xl font-semibold text-gray-900">Recent Posts</h2>
                        <Button size="sm" variant="outline">
                            View All
                        </Button>
                    </div>

                    {/* TODO: Replace with dynamic post data */}
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead>
                            <tr className="border-b border-gray-200">
                                <th className="text-left py-2 px-2 font-medium text-gray-700">Title</th>
                                <th className="text-left py-2 px-2 font-medium text-gray-700">Author</th>
                                <th className="text-left py-2 px-2 font-medium text-gray-700">Status</th>
                                <th className="text-left py-2 px-2 font-medium text-gray-700">Actions</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr className="border-b border-gray-100">
                                <td className="py-2 px-2">Summer Sale</td>
                                <td className="py-2 px-2">John Doe</td>
                                <td className="py-2 px-2">
                                    <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">Published</span>
                                </td>
                                <td className="py-2 px-2">
                                    <Button variant="outline" size="sm">
                                        Edit
                                    </Button>
                                </td>
                            </tr>
                            <tr className="border-b border-gray-100">
                                <td className="py-2 px-2">Product Tutorial</td>
                                <td className="py-2 px-2">Jane Smith</td>
                                <td className="py-2 px-2">
                                    <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded-full">Draft</span>
                                </td>
                                <td className="py-2 px-2">
                                    <Button variant="outline" size="sm">
                                        Edit
                                    </Button>
                                </td>
                            </tr>
                            <tr className="border-b border-gray-100">
                                <td className="py-2 px-2">Behind Scenes</td>
                                <td className="py-2 px-2">Mike Johnson</td>
                                <td className="py-2 px-2">
                                    <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">Scheduled</span>
                                </td>
                                <td className="py-2 px-2">
                                    <Button variant="outline" size="sm">
                                        Edit
                                    </Button>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </Card>
            </div>

            <Card className="p-6 mt-8">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">System Statistics</h2>
                {/* TODO: Replace with dynamic statistics */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    <div className="text-center">
                        <p className="text-3xl font-bold text-blue-600">156</p>
                        <p className="text-sm text-gray-600">Total Users</p>
                    </div>
                    <div className="text-center">
                        <p className="text-3xl font-bold text-green-600">1,234</p>
                        <p className="text-sm text-gray-600">Total Posts</p>
                    </div>
                    <div className="text-center">
                        <p className="text-3xl font-bold text-purple-600">89</p>
                        <p className="text-sm text-gray-600">Scheduled Posts</p>
                    </div>
                    <div className="text-center">
                        <p className="text-3xl font-bold text-orange-600">45</p>
                        <p className="text-sm text-gray-600">Draft Posts</p>
                    </div>
                </div>
            </Card>
        </div>
    )
}
