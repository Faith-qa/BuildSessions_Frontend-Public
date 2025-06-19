import Card from "@/components/Card"
import Input from "@/components/Input"
import Button from "@/components/Button"

export default function Signup() {
    return (
        <div className="min-h-screen flex items-center justify-center px-4">
            <Card className="w-full max-w-md p-8">
                <div className="text-center mb-8">
                    <h1 className="text-2xl font-bold text-gray-900 mb-2">Create your ContentCraft account</h1>
                    <p className="text-gray-600">Start planning your social media content today</p>
                </div>

                {/* TODO: Add form submission logic */}
                <form className="space-y-6">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                            Full name
                        </label>
                        <Input id="name" type="text" placeholder="Enter your full name" required />
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                            Email address
                        </label>
                        <Input id="email" type="email" placeholder="Enter your email" required />
                    </div>

                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                            Password
                        </label>
                        <Input id="password" type="password" placeholder="Create a password" required />
                    </div>

                    <div>
                        <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700 mb-2">
                            Confirm password
                        </label>
                        <Input id="confirm-password" type="password" placeholder="Confirm your password" required />
                    </div>

                    <div className="flex items-center">
                        <input
                            id="terms"
                            type="checkbox"
                            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                            required
                        />
                        <label htmlFor="terms" className="ml-2 block text-sm text-gray-700">
                            I agree to the{" "}
                            <a href="#" className="text-blue-600 hover:text-blue-500">
                                Terms of Service
                            </a>{" "}
                            and{" "}
                            <a href="#" className="text-blue-600 hover:text-blue-500">
                                Privacy Policy
                            </a>
                        </label>
                    </div>

                    <Button type="submit" className="w-full">
                        Create account
                    </Button>
                </form>

                <div className="mt-6 text-center">
                    <p className="text-sm text-gray-600">
                        Already have an account?{" "}
                        <a href="/login" className="text-blue-600 hover:text-blue-500 font-medium">
                            Sign in
                        </a>
                    </p>
                </div>
            </Card>
        </div>
    )
}
