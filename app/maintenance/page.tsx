import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"

export default function MaintenancePage() {
  return (
    <div className="container py-6">
      <div className="grid gap-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Maintenance Management</h1>
            <p className="text-muted-foreground">Track and manage maintenance requests and building upkeep.</p>
          </div>
          <Button>New Maintenance Request</Button>
        </div>
        <Tabs defaultValue="active">
          <TabsList className="grid w-full grid-cols-3 md:w-auto">
            <TabsTrigger value="active">Active Requests</TabsTrigger>
            <TabsTrigger value="completed">Completed</TabsTrigger>
            <TabsTrigger value="scheduled">Scheduled Maintenance</TabsTrigger>
          </TabsList>
          <TabsContent value="active" className="mt-6">
            <div className="grid gap-6">
              <Card>
                <CardHeader className="flex flex-row items-start justify-between pb-2">
                  <div>
                    <CardTitle className="flex items-center gap-2">
                      Water Leak in Bathroom
                      <Badge variant="destructive">High Priority</Badge>
                    </CardTitle>
                    <CardDescription>Reported by Unit 5A on April 1, 2025</CardDescription>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      View Details
                    </Button>
                    <Button size="sm">Mark Completed</Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm font-medium">Description</h4>
                      <p className="text-sm text-muted-foreground">
                        Water leaking from ceiling in the bathroom. Appears to be coming from the unit above.
                      </p>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium">Status</h4>
                      <div className="mt-1 flex items-center gap-4">
                        <div className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-yellow-500"></div>
                          <span className="text-sm">In Progress</span>
                        </div>
                        <span className="text-sm text-muted-foreground">Plumber scheduled for April 4, 2025</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-start justify-between pb-2">
                  <div>
                    <CardTitle className="flex items-center gap-2">
                      Broken Intercom
                      <Badge>Medium Priority</Badge>
                    </CardTitle>
                    <CardDescription>Reported by Unit 8B on March 30, 2025</CardDescription>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      View Details
                    </Button>
                    <Button size="sm">Mark Completed</Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm font-medium">Description</h4>
                      <p className="text-sm text-muted-foreground">
                        Intercom in lobby not working properly. Cannot hear visitors clearly.
                      </p>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium">Status</h4>
                      <div className="mt-1 flex items-center gap-4">
                        <div className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-yellow-500"></div>
                          <span className="text-sm">In Progress</span>
                        </div>
                        <span className="text-sm text-muted-foreground">Technician contacted, awaiting quote</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-start justify-between pb-2">
                  <div>
                    <CardTitle className="flex items-center gap-2">
                      Garage Door Malfunction
                      <Badge variant="destructive">High Priority</Badge>
                    </CardTitle>
                    <CardDescription>Reported by Unit 3C on March 28, 2025</CardDescription>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      View Details
                    </Button>
                    <Button size="sm">Mark Completed</Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm font-medium">Description</h4>
                      <p className="text-sm text-muted-foreground">
                        Garage door not opening properly. Sometimes gets stuck halfway.
                      </p>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium">Status</h4>
                      <div className="mt-1 flex items-center gap-4">
                        <div className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-yellow-500"></div>
                          <span className="text-sm">In Progress</span>
                        </div>
                        <span className="text-sm text-muted-foreground">Repair scheduled for April 5, 2025</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          <TabsContent value="completed" className="mt-6">
            <div className="grid gap-6">
              <Card>
                <CardHeader className="flex flex-row items-start justify-between pb-2">
                  <div>
                    <CardTitle>Lobby Light Fixtures</CardTitle>
                    <CardDescription>Completed on April 3, 2025</CardDescription>
                  </div>
                  <Button variant="outline" size="sm">
                    View Details
                  </Button>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm font-medium">Description</h4>
                      <p className="text-sm text-muted-foreground">
                        Replaced all light fixtures in the lobby area with energy-efficient LED lights.
                      </p>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium">Cost</h4>
                      <p className="text-sm text-muted-foreground">$750.00</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-start justify-between pb-2">
                  <div>
                    <CardTitle>Pool Pump Replacement</CardTitle>
                    <CardDescription>Completed on March 25, 2025</CardDescription>
                  </div>
                  <Button variant="outline" size="sm">
                    View Details
                  </Button>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm font-medium">Description</h4>
                      <p className="text-sm text-muted-foreground">
                        Replaced faulty pool pump with new energy-efficient model.
                      </p>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium">Cost</h4>
                      <p className="text-sm text-muted-foreground">$1,200.00</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          <TabsContent value="scheduled" className="mt-6">
            <div className="grid gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Scheduled Maintenance</CardTitle>
                  <CardDescription>Upcoming regular maintenance for your building</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="rounded-md border">
                    <div className="grid grid-cols-4 border-b px-4 py-3 font-medium">
                      <div>Service</div>
                      <div>Frequency</div>
                      <div>Next Due</div>
                      <div>Provider</div>
                    </div>
                    <div className="divide-y">
                      <div className="grid grid-cols-4 items-center px-4 py-3">
                        <div>Fire Safety Inspection</div>
                        <div>Quarterly</div>
                        <div>April 15, 2025</div>
                        <div>SafeGuard Services</div>
                      </div>
                      <div className="grid grid-cols-4 items-center px-4 py-3">
                        <div>Elevator Maintenance</div>
                        <div>Monthly</div>
                        <div>April 20, 2025</div>
                        <div>Otis Elevators</div>
                      </div>
                      <div className="grid grid-cols-4 items-center px-4 py-3">
                        <div>Garden Maintenance</div>
                        <div>Bi-weekly</div>
                        <div>April 10, 2025</div>
                        <div>Green Thumb Landscaping</div>
                      </div>
                      <div className="grid grid-cols-4 items-center px-4 py-3">
                        <div>Pest Control</div>
                        <div>Quarterly</div>
                        <div>May 5, 2025</div>
                        <div>PestAway Solutions</div>
                      </div>
                      <div className="grid grid-cols-4 items-center px-4 py-3">
                        <div>HVAC System Service</div>
                        <div>Bi-annual</div>
                        <div>June 1, 2025</div>
                        <div>Cool Air Systems</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

