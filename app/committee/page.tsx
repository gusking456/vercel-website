import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function CommitteePage() {
  return (
    <div className="container py-6">
      <div className="grid gap-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Committee Management</h1>
          <p className="text-muted-foreground">Manage your strata committee members and responsibilities.</p>
        </div>
        <Tabs defaultValue="members">
          <TabsList className="grid w-full grid-cols-2 md:w-auto md:grid-cols-3">
            <TabsTrigger value="members">Members</TabsTrigger>
            <TabsTrigger value="roles">Roles & Responsibilities</TabsTrigger>
            <TabsTrigger value="elections">Elections</TabsTrigger>
          </TabsList>
          <TabsContent value="members" className="mt-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CardTitle>Chairperson</CardTitle>
                    <Button variant="outline" size="sm">
                      Contact
                    </Button>
                  </div>
                </CardHeader>
                <CardContent className="flex items-center gap-4">
                  <Avatar className="h-16 w-16">
                    <AvatarImage src="/placeholder.svg?height=64&width=64" alt="Sarah Johnson" />
                    <AvatarFallback>SJ</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">Sarah Johnson</p>
                    <p className="text-sm text-muted-foreground">Unit 10A</p>
                    <p className="text-sm text-muted-foreground">sarah.j@example.com</p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CardTitle>Secretary</CardTitle>
                    <Button variant="outline" size="sm">
                      Contact
                    </Button>
                  </div>
                </CardHeader>
                <CardContent className="flex items-center gap-4">
                  <Avatar className="h-16 w-16">
                    <AvatarImage src="/placeholder.svg?height=64&width=64" alt="Michael Chen" />
                    <AvatarFallback>MC</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">Michael Chen</p>
                    <p className="text-sm text-muted-foreground">Unit 5B</p>
                    <p className="text-sm text-muted-foreground">michael.c@example.com</p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CardTitle>Treasurer</CardTitle>
                    <Button variant="outline" size="sm">
                      Contact
                    </Button>
                  </div>
                </CardHeader>
                <CardContent className="flex items-center gap-4">
                  <Avatar className="h-16 w-16">
                    <AvatarImage src="/placeholder.svg?height=64&width=64" alt="Priya Patel" />
                    <AvatarFallback>PP</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">Priya Patel</p>
                    <p className="text-sm text-muted-foreground">Unit 8C</p>
                    <p className="text-sm text-muted-foreground">priya.p@example.com</p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CardTitle>Committee Member</CardTitle>
                    <Button variant="outline" size="sm">
                      Contact
                    </Button>
                  </div>
                </CardHeader>
                <CardContent className="flex items-center gap-4">
                  <Avatar className="h-16 w-16">
                    <AvatarImage src="/placeholder.svg?height=64&width=64" alt="David Wilson" />
                    <AvatarFallback>DW</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">David Wilson</p>
                    <p className="text-sm text-muted-foreground">Unit 3A</p>
                    <p className="text-sm text-muted-foreground">david.w@example.com</p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CardTitle>Committee Member</CardTitle>
                    <Button variant="outline" size="sm">
                      Contact
                    </Button>
                  </div>
                </CardHeader>
                <CardContent className="flex items-center gap-4">
                  <Avatar className="h-16 w-16">
                    <AvatarImage src="/placeholder.svg?height=64&width=64" alt="Emma Rodriguez" />
                    <AvatarFallback>ER</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">Emma Rodriguez</p>
                    <p className="text-sm text-muted-foreground">Unit 12B</p>
                    <p className="text-sm text-muted-foreground">emma.r@example.com</p>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-dashed">
                <CardContent className="flex h-full flex-col items-center justify-center p-6">
                  <p className="mb-2 text-center text-muted-foreground">Add another committee member</p>
                  <Button variant="outline">Add Member</Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          <TabsContent value="roles" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Roles & Responsibilities</CardTitle>
                <CardDescription>As defined by the Strata Schemes Management Act (2015)</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium">Chairperson</h3>
                  <ul className="mt-2 list-disc pl-6 text-sm text-muted-foreground">
                    <li>Preside at all meetings of the strata committee and the owners corporation</li>
                    <li>Establish meeting procedures and maintain order</li>
                    <li>Ensure proper minutes are kept</li>
                    <li>Act as the official spokesperson for the owners corporation</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-medium">Secretary</h3>
                  <ul className="mt-2 list-disc pl-6 text-sm text-muted-foreground">
                    <li>Prepare and distribute meeting notices, agendas and minutes</li>
                    <li>Maintain the strata roll and records of the owners corporation</li>
                    <li>Handle correspondence on behalf of the owners corporation</li>
                    <li>Ensure compliance with record-keeping requirements</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-medium">Treasurer</h3>
                  <ul className="mt-2 list-disc pl-6 text-sm text-muted-foreground">
                    <li>Notify owners of levy contributions</li>
                    <li>Receive, acknowledge and account for money paid to the owners corporation</li>
                    <li>Prepare financial statements and budgets</li>
                    <li>Manage the administrative and capital works funds</li>
                    <li>Keep accounting records and ensure they are audited when required</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-medium">Committee Members</h3>
                  <ul className="mt-2 list-disc pl-6 text-sm text-muted-foreground">
                    <li>Attend and participate in committee meetings</li>
                    <li>Assist in decision-making for the owners corporation</li>
                    <li>Represent the interests of all owners</li>
                    <li>Help implement decisions of the owners corporation</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="elections" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Committee Elections</CardTitle>
                <CardDescription>Information about the election process for the strata committee</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium">Next Election</h3>
                  <p className="text-sm text-muted-foreground">
                    The next committee election will be held at the Annual General Meeting on May 20, 2025.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium">Election Process</h3>
                  <p className="text-sm text-muted-foreground">
                    Committee members are elected at each Annual General Meeting. Nominations can be submitted up to 7
                    days before the meeting. The committee can have up to 9 members as specified in the Strata Schemes
                    Management Act (2015).
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium">Nomination Forms</h3>
                  <div className="mt-2 flex gap-2">
                    <Button variant="outline">Download Nomination Form</Button>
                    <Button>Submit Nomination</Button>
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

