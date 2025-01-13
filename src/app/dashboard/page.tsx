import React from "react";
import Link from "next/link";

const page = () => {
  return (
    <div>
      <div className="min-h-screen bg-gray-100 px-4">
        <header className="bg-blue-600 text-white py-4 px-6">
          <div className="container mx-auto flex items-center justify-between">
            <h1 className="text-xl font-bold">Dashboard</h1>
            <nav className="space-x-4">
              <Link href="/profile" className="hover:underline">
                Profile
              </Link>
              <Link href="/settings" className="hover:underline">
                Settings
              </Link>
              <Link href="/logout" className="hover:underline">
                Logout
              </Link>
            </nav>
          </div>
        </header>

        <main className="container mx-auto py-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white shadow-md rounded-lg p-4">
              <h2 className="text-lg font-semibold">Analytics</h2>
              <p className="text-gray-600">View your performance metrics.</p>
              <Link href="/analytics" className="text-blue-500 hover:underline">
                Go to Analytics
              </Link>
            </div>

            <div className="bg-white shadow-md rounded-lg p-4">
              <h2 className="text-lg font-semibold">Tasks</h2>
              <p className="text-gray-600">Manage your tasks and to-do list.</p>
              <Link href="/tasks" className="text-blue-500 hover:underline">
                Go to Tasks
              </Link>
            </div>

            <div className="bg-white shadow-md rounded-lg p-4">
              <h2 className="text-lg font-semibold">Messages</h2>
              <p className="text-gray-600">Check your messages.</p>
              <Link href="/messages" className="text-blue-500 hover:underline">
                Go to Messages
              </Link>
            </div>
          </div>

          <div className="mt-8">
            <h2 className="text-2xl font-bold mb-4">Polls</h2>
            <div className="bg-white shadow-md rounded-lg p-4 mb-4">
              <h3 className="text-lg font-semibold">
                Favorite Programming Language?
              </h3>
              <div className="mt-2 space-y-2">
                <div className="flex items-center justify-between">
                  <span>JavaScript</span>
                  <div className="w-1/2 bg-gray-200 h-4 rounded">
                    <div
                      className="bg-blue-500 h-4 rounded"
                      style={{ width: "60%" }}
                    ></div>
                  </div>
                  <span>60%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Python</span>
                  <div className="w-1/2 bg-gray-200 h-4 rounded">
                    <div
                      className="bg-green-500 h-4 rounded"
                      style={{ width: "30%" }}
                    ></div>
                  </div>
                  <span>30%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Other</span>
                  <div className="w-1/2 bg-gray-200 h-4 rounded">
                    <div
                      className="bg-yellow-500 h-4 rounded"
                      style={{ width: "10%" }}
                    ></div>
                  </div>
                  <span>10%</span>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold mb-4">Candlestick Chart</h2>
            <div className="bg-white shadow-md rounded-lg p-4">
              <div className="relative w-full h-64 bg-gray-200">
                <div
                  className="absolute bottom-0 left-8 w-2 bg-green-500"
                  style={{ height: "40%" }}
                ></div>
                <div
                  className="absolute bottom-0 left-16 w-2 bg-red-500"
                  style={{ height: "60%" }}
                ></div>
                <div
                  className="absolute bottom-0 left-24 w-2 bg-green-500"
                  style={{ height: "70%" }}
                ></div>
                <div
                  className="absolute bottom-0 left-32 w-2 bg-red-500"
                  style={{ height: "50%" }}
                ></div>
                <div
                  className="absolute bottom-0 left-40 w-2 bg-green-500"
                  style={{ height: "80%" }}
                ></div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default page;
