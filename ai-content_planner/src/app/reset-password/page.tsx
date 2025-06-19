import Card from "@/components/Card"
import Input from "@/components/Input"
import Button from "@/components/Button"

export default function ResetPassword() {
    return (
        <div className="min-h-screen flex items-center justify-center px-4">
            <Card className="w-full max-w-md p-8">
                <div className="text-center mb-8">
                    <h1 className="text-2xl font-bold text-gray-900 mb-2">Reset your password</h1>
                    <p className="text-gray-600">Enter your email address and we'll send you a link to reset your password</p>
                </div>

                {/* TODO: Add form submission logic */}
                <form className="space-y-6">
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                            Email address
                        </label>
                        <Input id="email" type="email" placeholder="Enter your email" required />
                    </div>

                    <Button type="submit" className="w-full">
                        Send reset link
                    </Button>
                </form>

                <div className="mt-6 text-center">
                    <p className="text-sm text-gray-600">
                        Remember your password?{" "}
                        <a href="/login" className="text-blue-600 hover:text-blue-500 font-medium">
                            Sign in
                        </a>
                    </p>
                </div>
            </Card>
        </div>
    )
}
