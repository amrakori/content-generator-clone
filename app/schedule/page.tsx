"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Calendar } from "@/components/ui/calendar";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { format } from "date-fns";

export default function SchedulePage() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const { toast } = useToast();

  const handleSchedule = () => {
    toast({
      title: "Content Scheduled",
      description: `Your content has been scheduled for ${format(date!, "PPP")}`,
    });
  };

  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold">Schedule Content</h1>
      <p className="mt-2 text-muted-foreground">
        Plan and schedule your content across different platforms.
      </p>

      <div className="mt-8 grid gap-8 lg:grid-cols-2">
        <Card className="p-6">
          <h2 className="text-xl font-semibold">Calendar</h2>
          <div className="mt-4">
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              className="rounded-md border"
            />
          </div>
        </Card>

        <Card className="p-6">
          <h2 className="text-xl font-semibold">Schedule Details</h2>
          <div className="mt-4 space-y-4">
            <div>
              <label className="text-sm font-medium">Platform</label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select platform" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="twitter">Twitter</SelectItem>
                  <SelectItem value="facebook">Facebook</SelectItem>
                  <SelectItem value="instagram">Instagram</SelectItem>
                  <SelectItem value="linkedin">LinkedIn</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="text-sm font-medium">Time</label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select time" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="9">9:00 AM</SelectItem>
                  <SelectItem value="12">12:00 PM</SelectItem>
                  <SelectItem value="15">3:00 PM</SelectItem>
                  <SelectItem value="18">6:00 PM</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Button onClick={handleSchedule} className="w-full">
              Schedule Post
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
}