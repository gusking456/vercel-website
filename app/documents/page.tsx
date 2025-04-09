import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function DocumentsPage() {
  return (
    <div className="container py-6">
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
            <a href="app/documents/1.pdf" download>
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
            <a href="/app/documents/2.pdf" download>
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
            <a href="/app/documents/3.pdf" download>
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
    </div>
  )
}
