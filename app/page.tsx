import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Sparkles, Rocket, BarChart2 } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="container py-12">
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
          Create Engaging Content with AI
        </h1>
        <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground md:text-xl">
          Generate, schedule, and analyze your social media content across all platforms
          using advanced AI technology.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Link href="/generate">
            <Button size="lg">
              <Sparkles className="mr-2 h-4 w-4" />
              Start Creating
            </Button>
          </Link>
          <Link href="/analytics">
            <Button size="lg" variant="outline">
              View Analytics
            </Button>
          </Link>
        </div>
      </div>

      <div className="mt-24 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <Card className="p-6">
          <Sparkles className="h-12 w-12 text-primary" />
          <h3 className="mt-4 text-xl font-bold">AI-Powered Generation</h3>
          <p className="mt-2 text-muted-foreground">
            Create engaging content for multiple platforms with our advanced AI technology.
          </p>
        </Card>
        <Card className="p-6">
          <Rocket className="h-12 w-12 text-primary" />
          <h3 className="mt-4 text-xl font-bold">Smart Scheduling</h3>
          <p className="mt-2 text-muted-foreground">
            Schedule and automate your content delivery across all social platforms.
          </p>
        </Card>
        <Card className="p-6">
          <BarChart2 className="h-12 w-12 text-primary" />
          <h3 className="mt-4 text-xl font-bold">Detailed Analytics</h3>
          <p className="mt-2 text-muted-foreground">
            Track performance and engagement metrics across all your content.
          </p>
        </Card>
      </div>
    </div>
  );
}