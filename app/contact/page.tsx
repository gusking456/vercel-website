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
        <h2 className="text-2xl font-bold mb-4">HTML Forms – GET and POST</h2>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>GET Form</CardTitle>
            <CardDescription>Data sent as query parameters</CardDescription>
          </CardHeader>
          <CardContent>
            <form action="/form" method="GET" className="flex gap-4">
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                value={getName}
                onChange={(e) => setGetName(e.target.value)}
                className="border p-2 rounded w-full"
              />
              <Button type="submit">Submit GET</Button>
            </form>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>POST Form</CardTitle>
            <CardDescription>Data sent in request body</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handlePostSubmit} className="flex flex-col gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                value={postEmail}
                onChange={(e) => setPostEmail(e.target.value)}
                required
                className="border p-2 rounded"
              />
              <Button type="submit">Submit POST</Button>
              {submittedPostData && (
                <p className="text-green-600">POST received: {submittedPostData}</p>
              )}
            </form>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Next Steps</CardTitle>
            <CardDescription>Check network tab for method details</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-disc ml-5 text-muted-foreground">
              <li>GET values visible in the URL (query string)</li>
              <li>POST values visible in request body</li>
              <li>Check dev tools → Network tab to inspect method</li>
            </ul>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
