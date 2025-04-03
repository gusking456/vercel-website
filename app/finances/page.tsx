import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Overview } from "@/components/overview"

export default function FinancesPage() {
  return (
    <div className="container py-6">
      <div className="grid gap-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Financial Management</h1>
          <p className="text-muted-foreground">Manage your strata's administration fund and capital works fund.</p>
        </div>
        <Tabs defaultValue="overview">
          <TabsList className="grid w-full grid-cols-2 md:w-auto md:grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="levies">Levies</TabsTrigger>
            <TabsTrigger value="expenses">Expenses</TabsTrigger>
            <TabsTrigger value="reports">Reports</TabsTrigger>
          </TabsList>
          <TabsContent value="overview" className="mt-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium">Administration Fund</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">$24,685.00</div>
                  <p className="text-xs text-muted-foreground">+2.5% from last quarter</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium">Capital Works Fund</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">$156,420.00</div>
                  <p className="text-xs text-muted-foreground">+5.2% from last quarter</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium">Total Levies Due</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">$8,750.00</div>
                  <p className="text-xs text-muted-foreground">3 units with outstanding payments</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium">Recent Expenses</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">$12,345.00</div>
                  <p className="text-xs text-muted-foreground">Last 30 days</p>
                </CardContent>
              </Card>
            </div>
            <div className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Financial Overview</CardTitle>
                  <CardDescription>View your administration and capital works fund trends</CardDescription>
                </CardHeader>
                <CardContent>
                  <Overview />
                </CardContent>
              </Card>
            </div>
            <div className="mt-6 grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Recent Transactions</CardTitle>
                  <CardDescription>Latest financial activities</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between border-b pb-4">
                      <div>
                        <p className="font-medium">Quarterly Levy Payment</p>
                        <p className="text-sm text-muted-foreground">Unit 12B</p>
                      </div>
                      <div className="text-right">
                        <p className="font-medium text-green-600">+$1,250.00</p>
                        <p className="text-xs text-muted-foreground">April 2, 2025</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between border-b pb-4">
                      <div>
                        <p className="font-medium">Plumbing Repair</p>
                        <p className="text-sm text-muted-foreground">Common Area</p>
                      </div>
                      <div className="text-right">
                        <p className="font-medium text-red-600">-$850.00</p>
                        <p className="text-xs text-muted-foreground">April 1, 2025</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between border-b pb-4">
                      <div>
                        <p className="font-medium">Quarterly Levy Payment</p>
                        <p className="text-sm text-muted-foreground">Unit 7A</p>
                      </div>
                      <div className="text-right">
                        <p className="font-medium text-green-600">+$1,250.00</p>
                        <p className="text-xs text-muted-foreground">March 31, 2025</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between border-b pb-4">
                      <div>
                        <p className="font-medium">Building Insurance</p>
                        <p className="text-sm text-muted-foreground">Annual Premium</p>
                      </div>
                      <div className="text-right">
                        <p className="font-medium text-red-600">-$8,500.00</p>
                        <p className="text-xs text-muted-foreground">March 30, 2025</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Quarterly Levy Payment</p>
                        <p className="text-sm text-muted-foreground">Unit 3B</p>
                      </div>
                      <div className="text-right">
                        <p className="font-medium text-green-600">+$1,250.00</p>
                        <p className="text-xs text-muted-foreground">March 29, 2025</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Budget Summary</CardTitle>
                  <CardDescription>Current financial year budget allocation</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-medium">Building Maintenance</p>
                        <p className="text-sm font-medium">$45,000.00</p>
                      </div>
                      <div className="mt-2 h-2 w-full rounded-full bg-muted">
                        <div className="h-2 w-[65%] rounded-full bg-primary"></div>
                      </div>
                      <p className="mt-1 text-xs text-muted-foreground">65% of budget used</p>
                    </div>
                    <div>
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-medium">Insurance</p>
                        <p className="text-sm font-medium">$12,000.00</p>
                      </div>
                      <div className="mt-2 h-2 w-full rounded-full bg-muted">
                        <div className="h-2 w-[75%] rounded-full bg-primary"></div>
                      </div>
                      <p className="mt-1 text-xs text-muted-foreground">75% of budget used</p>
                    </div>
                    <div>
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-medium">Utilities</p>
                        <p className="text-sm font-medium">$18,000.00</p>
                      </div>
                      <div className="mt-2 h-2 w-full rounded-full bg-muted">
                        <div className="h-2 w-[50%] rounded-full bg-primary"></div>
                      </div>
                      <p className="mt-1 text-xs text-muted-foreground">50% of budget used</p>
                    </div>
                    <div>
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-medium">Landscaping</p>
                        <p className="text-sm font-medium">$8,000.00</p>
                      </div>
                      <div className="mt-2 h-2 w-full rounded-full bg-muted">
                        <div className="h-2 w-[40%] rounded-full bg-primary"></div>
                      </div>
                      <p className="mt-1 text-xs text-muted-foreground">40% of budget used</p>
                    </div>
                    <div>
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-medium">Administration</p>
                        <p className="text-sm font-medium">$5,000.00</p>
                      </div>
                      <div className="mt-2 h-2 w-full rounded-full bg-muted">
                        <div className="h-2 w-[60%] rounded-full bg-primary"></div>
                      </div>
                      <p className="mt-1 text-xs text-muted-foreground">60% of budget used</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          <TabsContent value="levies" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Levy Management</CardTitle>
                <CardDescription>Track and manage owner contributions to the strata scheme</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="rounded-md border">
                    <div className="grid grid-cols-5 border-b px-4 py-3 font-medium">
                      <div>Unit</div>
                      <div>Owner</div>
                      <div>Amount Due</div>
                      <div>Due Date</div>
                      <div>Status</div>
                    </div>
                    <div className="divide-y">
                      <div className="grid grid-cols-5 items-center px-4 py-3">
                        <div>Unit 1A</div>
                        <div>John Smith</div>
                        <div>$1,250.00</div>
                        <div>April 15, 2025</div>
                        <div>
                          <span className="rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-800">
                            Paid
                          </span>
                        </div>
                      </div>
                      <div className="grid grid-cols-5 items-center px-4 py-3">
                        <div>Unit 2B</div>
                        <div>Lisa Wong</div>
                        <div>$1,250.00</div>
                        <div>April 15, 2025</div>
                        <div>
                          <span className="rounded-full bg-yellow-100 px-2 py-1 text-xs font-medium text-yellow-800">
                            Pending
                          </span>
                        </div>
                      </div>
                      <div className="grid grid-cols-5 items-center px-4 py-3">
                        <div>Unit 3C</div>
                        <div>Robert Johnson</div>
                        <div>$1,250.00</div>
                        <div>April 15, 2025</div>
                        <div>
                          <span className="rounded-full bg-red-100 px-2 py-1 text-xs font-medium text-red-800">
                            Overdue
                          </span>
                        </div>
                      </div>
                      <div className="grid grid-cols-5 items-center px-4 py-3">
                        <div>Unit 4A</div>
                        <div>Maria Garcia</div>
                        <div>$1,250.00</div>
                        <div>April 15, 2025</div>
                        <div>
                          <span className="rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-800">
                            Paid
                          </span>
                        </div>
                      </div>
                      <div className="grid grid-cols-5 items-center px-4 py-3">
                        <div>Unit 5B</div>
                        <div>Michael Chen</div>
                        <div>$1,250.00</div>
                        <div>April 15, 2025</div>
                        <div>
                          <span className="rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-800">
                            Paid
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <Button variant="outline">Send Reminders</Button>
                    <Button>Generate Levy Notices</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="expenses" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Expense Management</CardTitle>
                <CardDescription>Track and manage expenses for your strata scheme</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="rounded-md border">
                    <div className="grid grid-cols-5 border-b px-4 py-3 font-medium">
                      <div>Date</div>
                      <div>Description</div>
                      <div>Category</div>
                      <div>Amount</div>
                      <div>Fund</div>
                    </div>
                    <div className="divide-y">
                      <div className="grid grid-cols-5 items-center px-4 py-3">
                        <div>April 1, 2025</div>
                        <div>Plumbing Repair</div>
                        <div>Maintenance</div>
                        <div>$850.00</div>
                        <div>Administration</div>
                      </div>
                      <div className="grid grid-cols-5 items-center px-4 py-3">
                        <div>March 30, 2025</div>
                        <div>Building Insurance</div>
                        <div>Insurance</div>
                        <div>$8,500.00</div>
                        <div>Administration</div>
                      </div>
                      <div className="grid grid-cols-5 items-center px-4 py-3">
                        <div>March 25, 2025</div>
                        <div>Gardening Services</div>
                        <div>Landscaping</div>
                        <div>$450.00</div>
                        <div>Administration</div>
                      </div>
                      <div className="grid grid-cols-5 items-center px-4 py-3">
                        <div>March 20, 2025</div>
                        <div>Elevator Maintenance</div>
                        <div>Maintenance</div>
                        <div>$1,200.00</div>
                        <div>Administration</div>
                      </div>
                      <div className="grid grid-cols-5 items-center px-4 py-3">
                        <div>March 15, 2025</div>
                        <div>Roof Repair</div>
                        <div>Maintenance</div>
                        <div>$3,500.00</div>
                        <div>Capital Works</div>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <Button variant="outline">Export Expenses</Button>
                    <Button>Add New Expense</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="reports" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Financial Reports</CardTitle>
                <CardDescription>Generate and view financial reports for your strata scheme</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="grid gap-4 md:grid-cols-2">
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-base">Quarterly Financial Statement</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground">
                          Financial statement for Q1 2025 (January - March)
                        </p>
                        <div className="mt-4 flex gap-2">
                          <Button variant="outline" size="sm">
                            Preview
                          </Button>
                          <Button size="sm">Download</Button>
                        </div>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-base">Annual Budget</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground">Budget for financial year 2025-2026</p>
                        <div className="mt-4 flex gap-2">
                          <Button variant="outline" size="sm">
                            Preview
                          </Button>
                          <Button size="sm">Download</Button>
                        </div>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-base">Levy Register</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground">
                          Complete record of all levy payments and outstanding amounts
                        </p>
                        <div className="mt-4 flex gap-2">
                          <Button variant="outline" size="sm">
                            Preview
                          </Button>
                          <Button size="sm">Download</Button>
                        </div>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-base">Expense Report</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground">Detailed breakdown of all expenses by category</p>
                        <div className="mt-4 flex gap-2">
                          <Button variant="outline" size="sm">
                            Preview
                          </Button>
                          <Button size="sm">Download</Button>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="flex justify-between">
                    <Button variant="outline">Generate Custom Report</Button>
                    <Button>Schedule Regular Reports</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

