import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce platform built with Next.js and Stripe",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80",
    tags: ["Next.js", "TypeScript", "Stripe", "Tailwind"],
    link: "#"
  },
  {
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&q=80",
    tags: ["React", "Node.js", "Socket.io", "MongoDB"],
    link: "#"
  },
  {
    title: "AI Content Generator",
    description: "An AI-powered content generation tool using OpenAI's GPT-3",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
    tags: ["Python", "OpenAI", "FastAPI", "React"],
    link: "#"
  }
];

export default function Projects() {
  return (
    <div className="container py-10">
      <div className="space-y-6">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold">Projects</h1>
          <p className="text-muted-foreground">
            A collection of my recent work and personal projects
          </p>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Link href={project.link} key={index}>
              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-48">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}