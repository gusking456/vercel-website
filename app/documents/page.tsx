import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function DocumentsPage() {
  return (
    <div className="container py-8">
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-bold tracking-tight mb-2 animate-pulse">
          Documents Hub
        </h1>
        <p className="text-muted-foreground text-lg">
          Explore and download essential documents with an interactive experience.
        </p>
      </header>
      <section className="grid gap-8 md:grid-cols-3">
        {/* Annual Report */}
        <Card className="transition-transform duration-300 hover:scale-105 cursor-pointer">
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
        <Card className="transition-transform duration-300 hover:scale-105 cursor-pointer">
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
        <Card className="transition-transform duration-300 hover:scale-105 cursor-pointer">
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
              Meeting minutes sample from a recent committee meeting.
            </CardDescription>
          </CardContent>
        </Card>
      </section>
      <section className="mt-12">
        <Card className="transition-transform duration-300 hover:scale-105">
          <CardHeader>
            <CardTitle>Floor Plan</CardTitle>
          </CardHeader>
          <CardContent>
            <object
              data="/floor_plan.webp"
              type="application/pdf"
              width="100%"
              height="400"
              className="rounded"
            >
              <p>
                Floor plan preview is not available.{" "}
                <a href="/floor_plan.webp" download className="text-primary hover:underline">
                  Download Floor Plan
                </a>
              </p>
            </object>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}
