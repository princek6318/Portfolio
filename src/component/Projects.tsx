
import { Card, CardContent, CardHeader, CardTitle } from "@/component/ui/card";
import { Button } from "@/component/ui/button";
import { Badge } from "@/component/ui/badge";
import { ExternalLink, Github, ShoppingCart } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "E-commerce Shop",
      description: "A full-featured e-commerce platform built with React.js and Node.js. Features include user authentication, product catalog, shopping cart, payment integration, and admin dashboard.",
      technologies: ["React.js", "Node.js", "MongoDB", "Express.js", "Stripe API"],
      githubUrl: "https://github.com/princek6318/Ecommerce-shop",
      icon: ShoppingCart,
      highlights: [
        "User Authentication & Authorization",
        "Product Management System", 
        "Shopping Cart & Checkout",
        "Payment Gateway Integration",
        "Responsive Design",
        "Admin Dashboard"
      ]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Featured Projects
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Here are some of my recent projects that showcase my skills in full-stack development.
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-8">
            {projects.map((project, index) => {
              const IconComponent = project.icon;
              return (
                <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <CardHeader className="bg-gradient-to-r from-primary/10 to-secondary/10">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
                        <IconComponent size={24} className="text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-2xl">{project.title}</CardTitle>
                        <p className="text-muted-foreground mt-2">{project.description}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-foreground mb-3">Key Features:</h4>
                        <ul className="space-y-2">
                          {project.highlights.map((highlight, idx) => (
                            <li key={idx} className="flex items-center text-sm text-muted-foreground">
                              <div className="w-2 h-2 rounded-full bg-primary mr-3"></div>
                              {highlight}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-3">Technologies Used:</h4>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.technologies.map((tech, idx) => (
                            <Badge key={idx} variant="secondary">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                        <div className="flex gap-3">
                          <Button asChild size="sm">
                            <a 
                              href={project.githubUrl} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="flex items-center gap-2"
                            >
                              <Github size={16} />
                              View Code
                            </a>
                          </Button>
                          <Button variant="outline" size="sm" asChild>
                            <a 
                              href={project.githubUrl} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="flex items-center gap-2"
                            >
                              <ExternalLink size={16} />
                              Live Demo
                            </a>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
          
          <div className="text-center mt-12">
            <Button variant="outline" size="lg" asChild>
              <a 
                href="https://github.com/princek6318" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Github size={20} />
                View All Projects on GitHub
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;