import Card from "@/components/Card"
import Input from "@/components/Input"
import Button from "@/components/Button"

export default function Login() {
    return (
        <div className="min-h-screen flex items-center justify-center px-4">
            <Card className="w-full max-w-md p-8">
                <div className="text-center mb-8">
                    <h1 className="text-2xl font-bold text-gray-900 mb-2">Welcome back to ContentCraft</h1>
                    <p className="text-gray-600">Sign in to your account to continue</p>
                </div>

                {/* TODO: Add form submission logic */}
                <form className="space-y-6">
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
                        <Input id="password" type="password" placeholder="Enter your password" required />
                    </div>

                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <input
                                id="remember-me"
                                type="checkbox"
                                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                            />
                            <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                                Remember me
                            </label>
                        </div>
                        <a href="/reset-password" className="text-sm text-blue-600 hover:text-blue-500">
                            Forgot password?
                        </a>
                    </div>

                    <Button type="submit" className="w-full">
                        Sign in
                    </Button>
                </form>

                <div className="mt-6 text-center">
                    <p className="text-sm text-gray-600">
                        Don't have an account?{" "}
                        <a href="/signup" className="text-blue-600 hover:text-blue-500 font-medium">
                            Sign up
                        </a>
                    </p>
                </div>
            </Card>
        </div>
    )
}
