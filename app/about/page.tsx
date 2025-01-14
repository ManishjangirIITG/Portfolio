import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const skills = [
  "HTML","CSS","JavaScript", "Bootstrap","TailwindCSS","Express.js" , "TypeScript", "React", "Next.js", "Node.js","C",
  "C++", "MongoDB", "AWS", "Docker"
];

export default function About() {
  return (
    <div className="container py-10">
      <div className="max-w-3xl mx-auto space-y-8">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold ">About Me</h1>
          <p className="text-muted-foreground">
            Learn more about my background and expertise
          </p>
        </div>

        <div className="prose dark:prose-invert">
          <p>Hi, I'm Manish Jangir a Web Developer passionate about [your key focus or specialty]. I thrive on creating impactful solutions and continuously pushing the boundaries of what's possible. With a strong foundation in Web Development , I've worked on projects that blend creativity with technical precision.
            </p>

            <p>
When I'm not immersed in my work, I enjoy [mention a personal hobby or interest], which keeps me inspired and energized. Feel free to browse my portfolio and reach out if you'd like to connect or collaborate!
          </p>
        </div>

        <Card>
          <CardContent className="pt-6">
            <h2 className="text-xl font-semibold mb-4">Skills & Technologies</h2>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <Badge key={index} variant="secondary">
                  {skill}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}