import Card from "../components/Card"
import Button from "../components/Button"

export default function Dashboard() {
  return (
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome back, John! 👋</h1>
          <p className="text-gray-600">Here's what's happening with your content today.</p>
        </div>

        {/* TODO: Replace with dynamic user data */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Total Posts</h3>
            <p className="text-3xl font-bold text-blue-600">24</p>
            <p className="text-sm text-gray-500 mt-1">+12% from last month</p>
          </Card>

          <Card className="p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Scheduled</h3>
            <p className="text-3xl font-bold text-green-600">8</p>
            <p className="text-sm text-gray-500 mt-1">Ready to publish</p>
          </Card>

          <Card className="p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Drafts</h3>
            <p className="text-3xl font-bold text-yellow-600">5</p>
            <p className="text-sm text-gray-500 mt-1">Needs attention</p>
          </Card>

          <Card className="p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Engagement</h3>
            <p className="text-3xl font-bold text-purple-600">2.4k</p>
            <p className="text-sm text-gray-500 mt-1">+8% this week</p>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Quick Actions</h2>
            <div className="space-y-3">
              <Button href="/create-post" className="w-full justify-start">
                ✏️ Create New Post
              </Button>
              <Button href="/calendar" variant="outline" className="w-full justify-start">
                📅 View Calendar
              </Button>
              <Button href="/analytics" variant="outline" className="w-full justify-start">
                📊 Check Analytics
              </Button>
            </div>
          </Card>

          <Card className="p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Recent Posts</h2>
            {/* TODO: Replace with dynamic post data */}
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-medium text-gray-900">Summer Sale Announcement</p>
                  <p className="text-sm text-gray-500">Instagram • Scheduled for tomorrow</p>
                </div>
                <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">Scheduled</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-medium text-gray-900">Product Tutorial Video</p>
                  <p className="text-sm text-gray-500">YouTube • Draft</p>
                </div>
                <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded-full">Draft</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-medium text-gray-900">Behind the Scenes</p>
                  <p className="text-sm text-gray-500">Twitter • Published</p>
                </div>
                <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">Published</span>
              </div>
            </div>
          </Card>
        </div>
      </div>
  )
}
