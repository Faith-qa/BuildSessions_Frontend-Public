"use client";

import type React from "react";
import { useAppSelector } from "@/hooks/useRedux";
import ProtectedRoute from "@/components/ProtectedRoute";
import Card from "@/components/Card";
import Button from "@/components/Button";
import Link from "next/link";

export default function Dashboard() {
  const currentUser = useAppSelector((state) => state.auth.currentUser);
  const posts = useAppSelector((state) => state.posts.posts);
  const analytics = useAppSelector((state) => state.analytics.analytics);

  // Calculate statistics with fallback for empty analytics
  const totalPosts = posts.length;
  const scheduledPosts = posts.filter((p) => new Date(p.scheduledDate) > new Date()).length;
  const totalViews = analytics.length ? analytics.reduce((sum, a) => sum + a.views, 0) : 0;
  const totalEngagement = analytics.length ? analytics.reduce((sum, a) => sum + a.likes + a.shares, 0) : 0;

  if (!currentUser) {
    return (
        <div className="min-h-screen flex items-center justify-center px-4">
          <Card className="w-full max-w-md p-8 text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Welcome to ContentCraft</h1>
            <p className="text-gray-600 mb-6">Please sign in to access your dashboard</p>
            <div className="space-y-3">
              <Link href="/login">
                <Button className="w-full">Sign In</Button>
              </Link>
              <Link href="/signup">
                <Button variant="outline" className="w-full">Create Account</Button>
              </Link>
            </div>
          </Card>
        </div>
    );
  }
  console.log(currentUser, "hello")
  return (
      <ProtectedRoute>
        <div className="container mx-auto px-4 py-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Welcome back, {currentUser.name}! 👋
            </h1>
            <p className="text-gray-600">Here's what's happening with your content today.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Total Posts</h3>
              <p className="text-3xl font-bold text-blue-600">{totalPosts}</p>
              <p className="text-sm text-gray-500 mt-1">All time</p>
            </Card>

            <Card className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Scheduled</h3>
              <p className="text-3xl font-bold text-green-600">{scheduledPosts}</p>
              <p className="text-sm text-gray-500 mt-1">Ready to publish</p>
            </Card>

            <Card className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Total Views</h3>
              <p className="text-3xl font-bold text-yellow-600">{totalViews}</p>
              <p className="text-sm text-gray-500 mt-1">All posts</p>
            </Card>

            <Card className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Engagement</h3>
              <p className="text-3xl font-bold text-purple-600">{totalEngagement}</p>
              <p className="text-sm text-gray-500 mt-1">Likes + Shares</p>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Quick Actions</h2>
              <div className="space-y-3">
                <Link href="/create-post">
                  <Button className="w-full justify-start">✏️ Create New Post</Button>
                </Link>
                <Link href="/calendar">
                  <Button variant="outline" className="w-full justify-start">📅 View Calendar</Button>
                </Link>
                <Link href="/analytics">
                  <Button variant="outline" className="w-full justify-start">📊 Check Analytics</Button>
                </Link>
              </div>
            </Card>

            <Card className="p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Recent Posts</h2>
              <div className="space-y-4">
                {posts.slice(0, 3).map((post) => {
                  const isScheduled = new Date(post.scheduledDate) > new Date();
                  const status = isScheduled ? "Scheduled" : "Published";
                  const statusColor = isScheduled ? "bg-green-100 text-green-800" : "bg-blue-100 text-blue-800";

                  return (
                      <div key={post.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div>
                          <p className="font-medium text-gray-900">{post.content.slice(0, 50)}...</p>
                          <p className="text-sm text-gray-500">
                            {post.platform.charAt(0).toUpperCase() + post.platform.slice(1)} • {status}
                          </p>
                        </div>
                        <span className={`px-2 py-1 text-xs rounded-full ${statusColor}`}>{status}</span>
                      </div>
                  );
                })}
                {posts.length === 0 && (
                    <div className="text-center text-gray-500 py-8">
                      <p>No posts yet. Create your first post!</p>
                    </div>
                )}
              </div>
            </Card>
          </div>
        </div>
      </ProtectedRoute>
  );
}