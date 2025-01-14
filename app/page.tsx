import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="container flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] py-10">
      <div className="space-y-6 text-center">
        <h1 className="text-4xl font-bold sm:text-6xl">
          Hi, I'm <span className="text-primary">Manish Jangir</span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-[600px]">
          A passionate full-stack developer specializing in building exceptional digital experiences
        </p>
        <div className="flex gap-4 justify-center">
          <Button asChild>
            <Link href="/projects">
              View My Work <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/contact">Contact Me</Link>
          </Button>
        </div>
        <div className="flex gap-4 justify-center pt-4">
          <Button variant="ghost" size="icon" asChild>
            <Link href="https://github.com/ManishjangirIITG" target="_blank">
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <Link href="https://www.linkedin.com/in/manish-jangir-183388250/" target="_blank">
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <Link href="mailto:manishjangir@gmail.com">
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}