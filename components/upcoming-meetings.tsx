import Link from "next/link"
import { CalendarClock, ChevronRight } from "lucide-react"

import { Button } from "@/components/ui/button"

export function UpcomingMeetings() {
  return (
    <div className="space-y-4">
      <div className="flex items-start gap-4">
        <div className="mt-1 rounded-full bg-primary/10 p-2">
          <CalendarClock className="h-4 w-4 text-primary" />
        </div>
        <div className="grid gap-1">
          <p className="text-sm font-medium leading-none">Committee Meeting</p>
          <p className="text-sm text-muted-foreground">April 15, 2025, 7:00 PM</p>
          <p className="text-xs text-muted-foreground">Building Common Room</p>
          <div className="mt-2 flex gap-2">
            <Button size="sm" variant="outline">
              View Agenda
            </Button>
            <Button size="sm">Add to Calendar</Button>
          </div>
        </div>
      </div>
      <div className="flex items-start gap-4">
        <div className="mt-1 rounded-full bg-primary/10 p-2">
          <CalendarClock className="h-4 w-4 text-primary" />
        </div>
        <div className="grid gap-1">
          <p className="text-sm font-medium leading-none">Annual General Meeting</p>
          <p className="text-sm text-muted-foreground">May 20, 2025, 6:30 PM</p>
          <p className="text-xs text-muted-foreground">Community Center</p>
          <div className="mt-2 flex gap-2">
            <Button size="sm" variant="outline">
              View Details
            </Button>
            <Button size="sm">Add to Calendar</Button>
          </div>
        </div>
      </div>
      <div className="mt-4">
        <Link href="/meetings" className="flex items-center text-sm text-primary hover:underline">
          View all meetings
          <ChevronRight className="ml-1 h-4 w-4" />
        </Link>
      </div>
    </div>
  )
}

