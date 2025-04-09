"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function HubPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Resident Hub</h1>
          <Link href="/">
            <Button variant="outline">Logout</Button>
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 container mx-auto px-4 py-8">
        <h2 className="text-xl font-semibold">Welcome, Resident!</h2>
        <p className="mt-2 text-muted-foreground">
          Here you can manage your profile, view building notices, make requests, and access the latest building information.
        </p>
        {/* Additional hub content can be added below */}
        <div className="mt-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="p-4 bg-white rounded shadow">
              <h3 className="text-lg font-medium">My Profile</h3>
              <p className="text-sm text-muted-foreground">View or update your resident details.</p>
              <Link href="/hub/profile">
                <Button variant="outline" size="sm" className="mt-2">
                  Go to Profile
                </Button>
              </Link>
            </div>
            <div className="p-4 bg-white rounded shadow">
              <h3 className="text-lg font-medium">Notices</h3>
              <p className="text-sm text-muted-foreground">Check the latest building notices.</p>
              <Link href="/hub/notices">
                <Button variant="outline" size="sm" className="mt-2">
                  View Notices
                </Button>
              </Link>
            </div>
            <div className="p-4 bg-white rounded shadow">
              <h3 className="text-lg font-medium">Requests</h3>
              <p className="text-sm text-muted-foreground">Submit or view maintenance requests.</p>
              <Link href="/hub/requests">
                <Button variant="outline" size="sm" className="mt-2">
                  Manage Requests
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t py-4">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          &copy; 2025 Strata Manager. All rights reserved.
        </div>
      </footer>
    </div>
  )
}

