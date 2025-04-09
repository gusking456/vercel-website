import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function DocumentsPage() {
  return (
    <div className="relative container py-6">
      {/* Back to Home Button at the top right with a cool press animation */}
      <div className="absolute top-6 right-6">
        <Link href="/" passHref>
          <Button 
            variant="secondary" 
            className="transition-transform duration-150 ease-in-out active:scale-95 hover:scale-105"
          >
            Back to Home
          </Button>
        </Link>
      </div>
      <div className="mb-6">
        <h1 className="text-3xl font-bold tracking-tight">Documents</h1>
        <p className="text-muted-foreground">
          Download important documents for building management.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {/* Annual Report */}
        <Card>
          <CardHeader className="flex justify-between items-center">
            <CardTitle>Annual Report</CardTitle>
            <a href="/1.pdf" download>
              <Button variant="outline" size="sm">
                Download
              </Button>
            </a>
          </CardHeader>
          <CardContent>
            <CardDescription>
              2024 annual report with consumer insights and performance metrics.
            </CardDescription>
          </CardContent>
        </Card>
        {/* Maintenance */}
        <Card>
          <CardHeader className="flex justify-between items-center">
            <CardTitle>Maintenance</CardTitle>
            <a href="/2.pdf" download>
              <Button variant="outline" size="sm">
                Download
              </Button>
            </a>
          </CardHeader>
          <CardContent>
            <CardDescription>
              Maintenance schedule outlining service intervals and guidelines.
            </CardDescription>
          </CardContent>
        </Card>
        {/* Meeting Minutes */}
        <Card>
          <CardHeader className="flex justify-between items-center">
            <CardTitle>Meeting Minutes</CardTitle>
            <a href="/3.pdf" download>
              <Button variant="outline" size="sm">
                Download
              </Button>
            </a>
          </CardHeader>
          <CardContent>
            <CardDescription>
              Meeting minutes template and sample from a recent committee meeting.
            </CardDescription>
          </CardContent>
        </Card>
      </div>
      <div className="mt-8">
        <Card>
          <CardHeader>
            <CardTitle>Floor Plan</CardTitle>
          </CardHeader>
          <CardContent>
            <object data="/floor_plan.webp" type="application/pdf" width="100%" height="400">
              <p>
                Floor plan preview is not available.{" "}
                <a href="/floor_plan.webp" download>
                  Download Floor Plan
                </a>
              </p>
            </object>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
