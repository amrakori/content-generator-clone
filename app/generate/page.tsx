"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export default function GeneratePage() {
  const [prompt, setPrompt] = useState("");
  const [generatedContent, setGeneratedContent] = useState("");
  const { toast } = useToast();

  const handleGenerate = async () => {
    // Simulate AI generation
    setGeneratedContent(
      "This is a simulated AI-generated content based on your prompt. In a real implementation, this would connect to an AI service."
    );
    
    toast({
      title: "Content Generated",
      description: "Your content has been generated successfully.",
    });
  };

  const handleShare = (platform: string) => {
    toast({
      title: "Content Scheduled",
      description: `Your content has been scheduled for ${platform}.`,
    });
  };

  return (
    <div className="container py-8">
      <div className="grid gap-8 lg:grid-cols-2">
        <div>
          <h1 className="text-3xl font-bold">Generate Content</h1>
          <p className="mt-2 text-muted-foreground">
            Describe what kind of content you want to create.
          </p>
          
          <Card className="mt-6 p-6">
            <div className="space-y-4">
              <div>
                <Select defaultValue="blog">
                  <SelectTrigger>
                    <SelectValue placeholder="Content Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="blog">Blog Post</SelectItem>
                    <SelectItem value="social">Social Media Post</SelectItem>
                    <SelectItem value="article">Article</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Input
                  placeholder="Topic or title"
                  className="mb-4"
                />
                <Textarea
                  placeholder="Describe what you want to create..."
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  className="min-h-[200px]"
                />
              </div>
              
              <Button
                onClick={handleGenerate}
                className="w-full"
                disabled={!prompt}
              >
                Generate Content
              </Button>
            </div>
          </Card>
        </div>

        <div>
          <h2 className="text-3xl font-bold">Generated Content</h2>
          <p className="mt-2 text-muted-foreground">
            Review and customize your generated content.
          </p>

          <Card className="mt-6 p-6">
            <Tabs defaultValue="preview">
              <TabsList className="mb-4">
                <TabsTrigger value="preview">Preview</TabsTrigger>
                <TabsTrigger value="edit">Edit</TabsTrigger>
              </TabsList>
              
              <TabsContent value="preview">
                <div className="prose dark:prose-invert">
                  {generatedContent || "Generated content will appear here..."}
                </div>
              </TabsContent>
              
              <TabsContent value="edit">
                <Textarea
                  value={generatedContent}
                  onChange={(e) => setGeneratedContent(e.target.value)}
                  className="min-h-[300px]"
                />
              </TabsContent>
            </Tabs>

            <div className="mt-6 flex flex-wrap gap-2">
              <Button
                variant="outline"
                onClick={() => handleShare("Twitter")}
                disabled={!generatedContent}
              >
                <Twitter className="mr-2 h-4 w-4" />
                Share to Twitter
              </Button>
              <Button
                variant="outline"
                onClick={() => handleShare("Facebook")}
                disabled={!generatedContent}
              >
                <Facebook className="mr-2 h-4 w-4" />
                Share to Facebook
              </Button>
              <Button
                variant="outline"
                onClick={() => handleShare("Instagram")}
                disabled={!generatedContent}
              >
                <Instagram className="mr-2 h-4 w-4" />
                Share to Instagram
              </Button>
              <Button
                variant="outline"
                onClick={() => handleShare("LinkedIn")}
                disabled={!generatedContent}
              >
                <Linkedin className="mr-2 h-4 w-4" />
                Share to LinkedIn
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}