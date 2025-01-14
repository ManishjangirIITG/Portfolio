import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    title: "Patreon Clone",
    description: 
    "Developed a platform for fans to support creators directly through secure payments utilizing the MERN stack (MongoDB, Express, React, Node.js) integrated with Next.js for server-side rendering and improved performance. The project featured user authentication and authorization using NextAuth for secure and seamless login processes. Incorporated Razorpay UPI payment gateway to enable smooth and reliable payment transactions for users. The application is designed with scalability and responsiveness in mind, ensuring a seamless experience across both desktop and mobile platforms.",
    image: "./Assets/patreon_clone.png",
    tags: ["Next.js", "React js", "MongoDB","Express js", "Node.js","NextAuth","Razorpay UPI Integration", "Postman"],
    link: "https://github.com/ManishjangirIITG/patreon_clone"
  },
  {
    title: "Path Finding Algorithm Visualizer",
    description: "Developed a Pathfinding Algorithm Visualizer an advanced, interactive and dynamic web application developed with React, meticulously designed to vividly demonstrate pathfinding algorithm Dijkstra’s in real-time. Users can dynamically place start and finish nodes, as well as add obstacles on a grid, by clicking and dragging. The project leverages React’s state management for real-time updates and uses CSS for animations to enhance the user experience. Key technologies used include React, CSS, and Material-UI for the interface design.",
    image: "./Assets/path_algo_visu.png",
    tags: ["React", "CSS", "Material-UI","React’s state management","Dijkstra’s Pathfinding Algorithm"],
    link: "https://github.com/ManishjangirIITG/pathfindingalgovisualizer"
  },
  {
    title: "A Web Music Player",
    description: "Developed a dynamic and responsive Spotify clone using HTML, CSS, and JavaScript, which seamlessly integrates the ability to dynamically fetch and display songs from a diverse range of albums with a user-centric design. Allows users to select songs from a playlist. It includes a functional seekbar for displaying song progress and enabling users to jump to specific timestamps within a track, providing an intuitive and seamless music listening    experience.",
    image: "./Assets/WebPlayer.png",
    tags: ["HTML","CSS","Javascript"],
    link: "https://github.com/ManishjangirIITG/Spotify-Clone"
  },
  {
    title: "Weather Forecast Application",
    description: "Developed a responsive and user-friendly weather forecast application using Vite, React, and Tailwind CSS. Integrated the AccuWeather API to fetch and display current weather forecast, including city name, temperature, humidity, and weather conditions.Implemented error handling for invalid inputs and network issues. Utilized Axios for API requests and configured a proxy server to manage CORS errors, ensuring seamless data retrieval and display.",
    image: "./Assets/Weather_Forcasting.png",
    tags: ["HTML","CSS","Javascript","Vite","React","Tailwind CSS","AccuWeather API","Axios", "CORS"],
    link: "https://github.com/ManishjangirIITG/Spotify-Clone"
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
