import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function DocumentsPage() {
  return (
    <div className="container py-6">
      <div className="grid gap-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Documents</h1>
          <p className="text-muted-foreground">
            Download important documents for your building management.
          </p>
        </div>
        <Tabs defaultValue="all">
          <TabsList className="grid w-full grid-cols-3 md:w-auto">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="reports">Reports</TabsTrigger>
            <TabsTrigger value="agreements">Agreements</TabsTrigger>
          </TabsList>
          <TabsContent value="all" className="mt-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader className="flex justify-between items-center">
                  <CardTitle>Annual Report 2024</CardTitle>
                  <Button variant="outline" size="sm">
                    Download
                  </Button>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Full annual report with financial and operations details.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex justify-between items-center">
                  <CardTitle>Maintenance Schedule</CardTitle>
                  <Button variant="outline" size="sm">
                    Download
                  </Button>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Up-to-date schedule for building maintenance tasks.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex justify-between items-center">
                  <CardTitle>Meeting Minutes - Feb</CardTitle>
                  <Button variant="outline" size="sm">
                    Download
                  </Button>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Minutes from the February committee meeting.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          <TabsContent value="reports" className="mt-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader className="flex justify-between items-center">
                  <CardTitle>Annual Report 2024</CardTitle>
                  <Button variant="outline" size="sm">
                    Download
                  </Button>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Complete report detailing the financial year.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          <TabsContent value="agreements" className="mt-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader className="flex justify-between items-center">
                  <CardTitle>Service Agreement</CardTitle>
                  <Button variant="outline" size="sm">
                    Download
                  </Button>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Current agreement with service providers.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
