import { CheckCircle, ClipboardList, FileText, MessageSquare, Wallet } from "lucide-react"

export function RecentActivity() {
  return (
    <div className="space-y-4">
      <div className="flex items-start gap-4">
        <div className="mt-1 rounded-full bg-primary/10 p-2">
          <CheckCircle className="h-4 w-4 text-primary" />
        </div>
        <div className="grid gap-1">
          <p className="text-sm font-medium leading-none">Maintenance completed</p>
          <p className="text-sm text-muted-foreground">Lobby light fixtures replaced</p>
          <p className="text-xs text-muted-foreground">Today, 10:30 AM</p>
        </div>
      </div>
      <div className="flex items-start gap-4">
        <div className="mt-1 rounded-full bg-primary/10 p-2">
          <Wallet className="h-4 w-4 text-primary" />
        </div>
        <div className="grid gap-1">
          <p className="text-sm font-medium leading-none">Quarterly levy payment</p>
          <p className="text-sm text-muted-foreground">Unit 12B paid $1,250.00</p>
          <p className="text-xs text-muted-foreground">Yesterday, 3:45 PM</p>
        </div>
      </div>
      <div className="flex items-start gap-4">
        <div className="mt-1 rounded-full bg-primary/10 p-2">
          <FileText className="h-4 w-4 text-primary" />
        </div>
        <div className="grid gap-1">
          <p className="text-sm font-medium leading-none">Document uploaded</p>
          <p className="text-sm text-muted-foreground">Annual insurance policy renewal</p>
          <p className="text-xs text-muted-foreground">April 2, 2025, 9:15 AM</p>
        </div>
      </div>
      <div className="flex items-start gap-4">
        <div className="mt-1 rounded-full bg-primary/10 p-2">
          <ClipboardList className="h-4 w-4 text-primary" />
        </div>
        <div className="grid gap-1">
          <p className="text-sm font-medium leading-none">New maintenance request</p>
          <p className="text-sm text-muted-foreground">Unit 5A reported water leak in bathroom</p>
          <p className="text-xs text-muted-foreground">April 1, 2025, 2:30 PM</p>
        </div>
      </div>
      <div className="flex items-start gap-4">
        <div className="mt-1 rounded-full bg-primary/10 p-2">
          <MessageSquare className="h-4 w-4 text-primary" />
        </div>
        <div className="grid gap-1">
          <p className="text-sm font-medium leading-none">Meeting minutes published</p>
          <p className="text-sm text-muted-foreground">March committee meeting minutes</p>
          <p className="text-xs text-muted-foreground">March 31, 2025, 11:00 AM</p>
        </div>
      </div>
    </div>
  )
}

