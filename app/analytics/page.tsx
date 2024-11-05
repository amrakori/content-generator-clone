"use client";

import { Card } from "@/components/ui/card";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const data = [
  { name: "Jan", engagement: 4000, reach: 2400, clicks: 2400 },
  { name: "Feb", engagement: 3000, reach: 1398, clicks: 2210 },
  { name: "Mar", engagement: 2000, reach: 9800, clicks: 2290 },
  { name: "Apr", engagement: 2780, reach: 3908, clicks: 2000 },
  { name: "May", engagement: 1890, reach: 4800, clicks: 2181 },
  { name: "Jun", engagement: 2390, reach: 3800, clicks: 2500 },
];

export default function AnalyticsPage() {
  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold">Content Analytics</h1>
      <p className="mt-2 text-muted-foreground">
        Track your content performance across all platforms.
      </p>

      <div className="mt-8">
        <Tabs defaultValue="overview">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="engagement">Engagement</TabsTrigger>
            <TabsTrigger value="platforms">Platforms</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-3">
              <Card className="p-6">
                <h3 className="text-sm font-medium text-muted-foreground">
                  Total Posts
                </h3>
                <p className="mt-2 text-3xl font-bold">128</p>
                <p className="text-xs text-muted-foreground">+14% from last month</p>
              </Card>
              <Card className="p-6">
                <h3 className="text-sm font-medium text-muted-foreground">
                  Total Engagement
                </h3>
                <p className="mt-2 text-3xl font-bold">8.2K</p>
                <p className="text-xs text-muted-foreground">+23% from last month</p>
              </Card>
              <Card className="p-6">
                <h3 className="text-sm font-medium text-muted-foreground">
                  Avg. Reach
                </h3>
                <p className="mt-2 text-3xl font-bold">12.4K</p>
                <p className="text-xs text-muted-foreground">+18% from last month</p>
              </Card>
            </div>

            <Card className="p-6">
              <h3 className="mb-4 text-lg font-medium">Performance Overview</h3>
              <div className="h-[400px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Line
                      type="monotone"
                      dataKey="engagement"
                      stroke="hsl(var(--chart-1))"
                      strokeWidth={2}
                    />
                    <Line
                      type="monotone"
                      dataKey="reach"
                      stroke="hsl(var(--chart-2))"
                      strokeWidth={2}
                    />
                    <Line
                      type="monotone"
                      dataKey="clicks"
                      stroke="hsl(var(--chart-3))"
                      strokeWidth={2}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}