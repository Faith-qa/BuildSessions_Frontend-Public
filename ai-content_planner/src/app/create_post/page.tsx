import Card from "@/components/Card"
import Input from "@/components/Input"
import Button from "@/components/Button"

export default function CreatePost() {
    return (
        <div className="container mx-auto px-4 py-8">
            <div className="max-w-2xl mx-auto">
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">Create New Post</h1>
                    <p className="text-gray-600">Plan and schedule your social media content</p>
                </div>

                <Card className="p-8">
                    {/* TODO: Add form submission logic */}
                    <form className="space-y-6">
                        <div>
                            <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">
                                Post Title
                            </label>
                            <Input id="title" type="text" placeholder="Enter post title" required />
                        </div>

                        <div>
                            <label htmlFor="content" className="block text-sm font-medium text-gray-700 mb-2">
                                Content
                            </label>
                            <textarea
                                id="content"
                                rows={6}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                placeholder="Write your post content here..."
                                required
                            />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="platform" className="block text-sm font-medium text-gray-700 mb-2">
                                    Platform
                                </label>
                                <select
                                    id="platform"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                    required
                                >
                                    <option value="">Select platform</option>
                                    <option value="instagram">Instagram</option>
                                    <option value="twitter">Twitter</option>
                                    <option value="facebook">Facebook</option>
                                    <option value="linkedin">LinkedIn</option>
                                    <option value="youtube">YouTube</option>
                                </select>
                            </div>

                            <div>
                                <label htmlFor="schedule-date" className="block text-sm font-medium text-gray-700 mb-2">
                                    Schedule Date
                                </label>
                                <Input id="schedule-date" type="datetime-local" />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="tags" className="block text-sm font-medium text-gray-700 mb-2">
                                Tags
                            </label>
                            <Input id="tags" type="text" placeholder="Enter tags separated by commas" />
                        </div>

                        <div>
                            <label htmlFor="image" className="block text-sm font-medium text-gray-700 mb-2">
                                Upload Image
                            </label>
                            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                                <div className="text-gray-500">
                                    <svg
                                        className="mx-auto h-12 w-12 text-gray-400"
                                        stroke="currentColor"
                                        fill="none"
                                        viewBox="0 0 48 48"
                                    >
                                        <path
                                            d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                    <p className="mt-2 text-sm">
                    <span className="font-medium text-blue-600 hover:text-blue-500 cursor-pointer">
                      Click to upload
                    </span>{" "}
                                        or drag and drop
                                    </p>
                                    <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                                </div>
                                <input type="file" className="hidden" accept="image/*" />
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button type="button" variant="outline" className="flex-1" disabled>
                                🤖 Generate AI Suggestion
                            </Button>
                            <Button type="submit" className="flex-1">
                                Save as Draft
                            </Button>
                            <Button type="submit" className="flex-1">
                                Schedule Post
                            </Button>
                        </div>
                    </form>
                </Card>
            </div>
        </div>
    )
}
