import Link from "next/link"
import { Button } from "@/components/ui/button"

export function HomeButton() {
  return (
    <div className="absolute top-6 right-6 z-50">
      <Link href="/" passHref>
        <Button 
          variant="secondary" 
          className="transition-transform duration-150 ease-in-out active:scale-95 hover:scale-105"
        >
          Back to Home
        </Button>
      </Link>
    </div>
  )
}
