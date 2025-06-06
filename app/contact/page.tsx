"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import {
  Building,
  Users,
  ChevronRight,
  ClipboardList,
  FileText,
  MessageSquare
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function FormPage() {
  const [getName, setGetName] = useState("")
  const [postEmail, setPostEmail] = useState("")
  const [submittedPostData, setSubmittedPostData] = useState(null)
  const router = useRouter()

  const handlePostSubmit = async (e) => {
    e.preventDefault()
    setSubmittedPostData(postEmail)
    // Simulated server POST
    console.log("POST submitted:", postEmail)
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
            <Link href="/">Dashboard</Link>
            <Link href="/form">Form</Link>
          </nav>
        </div>
      </header>

      <main className="container py-10">
        <h2 className="text-2xl font-bold mb-4">Resident Information Form</h2>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Resident Details</CardTitle>
            <CardDescription>This form demonstrates GET and POST handling</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <form action="/form" method="GET" className="flex gap-4">
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                value={getName}
                onChange={(e) => setGetName(e.target.value)}
                className="border p-2 rounded w-full"
              />
              <Button type="submit">Submit Name</Button>
            </form>

            <form onSubmit={handlePostSubmit} className="flex flex-col gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                value={postEmail}
                onChange={(e) => setPostEmail(e.target.value)}
                required
                className="border p-2 rounded"
              />
              <Button type="submit">Submit Email</Button>
              {submittedPostData && (
                <p className="text-green-600">Email received: {submittedPostData}</p>
              )}
            </form>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
