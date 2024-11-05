"use client";

import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import { Sparkles, BarChart2, Calendar } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  
  return (
    <header className="border-b">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center space-x-2">
            <Sparkles className="h-6 w-6" />
            <span className="font-bold">ContentForge</span>
          </Link>
          <nav className="flex gap-4">
            <Link href="/generate">
              <Button variant={pathname === "/generate" ? "default" : "ghost"}>
                Generate
              </Button>
            </Link>
            <Link href="/schedule">
              <Button variant={pathname === "/schedule" ? "default" : "ghost"}>
                <Calendar className="mr-2 h-4 w-4" />
                Schedule
              </Button>
            </Link>
            <Link href="/analytics">
              <Button variant={pathname === "/analytics" ? "default" : "ghost"}>
                <BarChart2 className="mr-2 h-4 w-4" />
                Analytics
              </Button>
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <ModeToggle />
        </div>
      </div>
    </header>
  );
}