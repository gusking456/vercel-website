"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import {
  Building,
  ChevronRight,
  ClipboardList,
  FileText,
  MessageSquare,
  Users,
  Wallet
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Overview } from "@/components/overview"
import { RecentActivity } from "@/components/recent-activity"
import { UpcomingMeetings } from "@/components/upcoming-meetings"

export default function HomePage() {
  const router = useRouter()
  const [showLogin, setShowLogin] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulated authentication; replace with your auth logic.
    if (email === "tutor@uni.sydney.edu.au" && password === "ilovecoding") {
      router.push("/hub")
    } else {
      setError("Invalid credentials")
    }
  }

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-10 border-b bg-background">
        <div className="container flex h-16 items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <Building className="h-6 w-6" />
            <h1 className="text-lg font-semibold">Strata Manager</h1>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-sm font-medium text-primary">
              Dashboard
            </Link>
            <Link href="/committee" className="text-sm font-medium text-muted-foreground hover:text-primary">
              Committee
            </Link>
            <Link href="/finances" className="text-sm font-medium text-muted-foreground hover:text-primary">
              Finances
            </Link>
            <Link href="/maintenance" className="text-sm font-medium text-muted-foreground hover:text-primary">
              Maintenance
            </Link>
            <Link href="/documents" className="text-sm font-medium text-muted-foreground hover:text-primary">
              Documents
            </Link>
            <Link href="/contact" className="text-sm font-medium text-muted-foreground hover:text-primary">
              Contact
            </Link>
            <Link href="/meetings" className="text-sm font-medium text-muted-foreground hover:text-primary">
              Meetings
            </Link>
          </nav>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setShowLogin(true)}
            className="hidden md:flex transition-transform duration-150 ease-in-out active:scale-95 hover:scale-105"
          >
            <Users className="mr-2 h-4 w-4" />
            Resident Portal
          </Button>
          <Button variant="outline" size="icon" className="md:hidden">
            <Users className="h-4 w-4" />
            <span className="sr-only">Resident Portal</span>
          </Button>
        </div>
      </header>
      <main className="flex-1">
        <div className="container py-6">
          {/* Dashboard Heading */}
          <div className="grid gap-6">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
              <p className="text-muted-foreground">
                Welcome to your strata management dashboard. Here's what's happening in your building.
              </p>
            </div>
            {/* Dashboard Cards */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium">Administration Fund</CardTitle>
                  <Wallet className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">$24,685.00</div>
                  <p className="text-xs text-muted-foreground">+2.5% from last quarter</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium">Capital Works Fund</CardTitle>
                  <Building className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">$156,420.00</div>
                  <p className="text-xs text-muted-foreground">+5.2% from last quarter</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium">Pending Maintenance</CardTitle>
                  <ClipboardList className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">7</div>
                  <p className="text-xs text-muted-foreground">3 high priority</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium">Upcoming Meetings</CardTitle>
                  <MessageSquare className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">2</div>
                  <p className="text-xs text-muted-foreground">Next: April 15, 2025</p>
                </CardContent>
              </Card>
            </div>
            {/* Additional Dashboard Sections */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-7">
              <Card className="col-span-4">
                <CardHeader>
                  <CardTitle>Financial Overview</CardTitle>
                  <CardDescription>View your administration and capital works fund trends</CardDescription>
                </CardHeader>
                <CardContent>
                  <Overview />
                </CardContent>
              </Card>
              <Card className="col-span-3">
                <CardHeader>
                  <CardTitle>Recent Activity</CardTitle>
                  <CardDescription>Latest updates from your building</CardDescription>
                </CardHeader>
                <CardContent>
                  <RecentActivity />
                </CardContent>
              </Card>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Upcoming Meetings</CardTitle>
                  <CardDescription>Schedule and prepare for your next committee meeting</CardDescription>
                </CardHeader>
                <CardContent>
                  <UpcomingMeetings />
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Quick Actions</CardTitle>
                  <CardDescription>Common tasks for strata committee members</CardDescription>
                </CardHeader>
                <CardContent className="grid gap-2">
                  <Link
                    href="/maintenance/new"
                    className="flex items-center justify-between rounded-lg border p-3 hover:bg-muted"
                  >
                    <div className="flex items-center gap-3">
                      <ClipboardList className="h-5 w-5 text-muted-foreground" />
                      <div>Log maintenance request</div>
                    </div>
                    <ChevronRight className="h-5 w-5 text-muted-foreground" />
                  </Link>
                  <Link
                    href="/meetings/new"
                    className="flex items-center justify-between rounded-lg border p-3 hover:bg-muted"
                  >
                    <div className="flex items-center gap-3">
                      <MessageSquare className="h-5 w-5 text-muted-foreground" />
                      <div>Schedule a meeting</div>
                    </div>
                    <ChevronRight className="h-5 w-5 text-muted-foreground" />
                  </Link>
                  <Link
                    href="/documents/upload"
                    className="flex items-center justify-between rounded-lg border p-3 hover:bg-muted"
                  >
                    <div className="flex items-center gap-3">
                      <FileText className="h-5 w-5 text-muted-foreground" />
                      <div>Upload document</div>
                    </div>
                    <ChevronRight className="h-5 w-5 text-muted-foreground" />
                  </Link>
                  <Link
                    href="/communication/new"
                    className="flex items-center justify-between rounded-lg border p-3 hover:bg-muted"
                  >
                    <div className="flex items-center gap-3">
                      <MessageSquare className="h-5 w-5 text-muted-foreground" />
                      <div>Send notice to residents</div>
                    </div>
                    <ChevronRight className="h-5 w-5 text-muted-foreground" />
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <footer className="border-t py-4">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-center text-sm text-muted-foreground md:text-left">
            &copy; 2025 Strata Manager. All rights reserved.
          </p>
          <nav className="flex gap-4">
            <Link href="/help" className="text-sm text-muted-foreground hover:underline">
              Help
            </Link>
            <Link href="/privacy" className="text-sm text-muted-foreground hover:underline">
              Privacy
            </Link>
            <Link href="/terms" className="text-sm text-muted-foreground hover:underline">
              Terms
            </Link>
          </nav>
        </div>
      </footer>
      
      {showLogin && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded shadow-lg w-full max-w-sm">
            <h2 className="text-2xl font-bold mb-4">Resident Login</h2>
            {/* Demo credentials info */}
            <div className="mb-4 p-2 bg-gray-50 border border-gray-200 rounded">
              <p className="text-sm text-muted-foreground">
                <strong>Demo Credentials:</strong> Username: tutor@uni.sydney.edu.au | Password: ilovecoding
              </p>
            </div>
            {error && <p className="text-red-500 mb-2">{error}</p>}
            <form onSubmit={handleLogin} className="flex flex-col gap-4">
              <input
                type="email"
                placeholder="Email"
                className="border p-2 rounded"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <input
                type="password"
                placeholder="Password"
                className="border p-2 rounded"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <Button type="submit">Login</Button>
            </form>
            <Button
              variant="outline"
              onClick={() => setShowLogin(false)}
              className="mt-4"
            >
              Cancel
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}
