import { Card, CardContent } from "@/component/ui/card";
import { Code2, Database, Globe, Smartphone } from "lucide-react";

const About = () => {
  const skills = [
    {
      icon: Code2,
      title: "Frontend Development",
      description: "React.js, JavaScript, HTML5, CSS3, Tailwind CSS"
    },
    {
      icon: Database,
      title: "Backend Development", 
      description: "Node.js, Express.js, MongoDB, REST APIs"
    },
    {
      icon: Globe,
      title: "Web Technologies",
      description: "Responsive Design, Progressive Web Apps, SEO"
    },
    {
      icon: Smartphone,
      title: "Modern Tools",
      description: "Git, VS Code, npm, Webpack, Vite"
    }
  ];

  return (
    <section id="about" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              About Me
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              I'm a passionate full-stack developer with expertise in modern web technologies. 
              I love building scalable applications and solving complex problems through code.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => {
              const IconComponent = skill.icon;
              return (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                      <IconComponent size={32} className="text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {skill.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {skill.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
