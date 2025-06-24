import { Card, CardContent, CardHeader, CardTitle } from "@/component/ui/card";
import { Button } from "@/component/ui/button";
import { Input } from "@/component/ui/input";
import { Textarea } from "@/component/ui/textarea";
import { Mail, Phone, MapPin, Send, Download } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for your message. I'll get back to you soon!",
    });
  };

  const handleResumeDownload = () => {
    // Replace with your actual Google Drive file ID
    window.open("https://drive.google.com/file/d/16C-cjhwQH9ZY4PI3A2FOBMt503vspIl-/view?usp=drive_link", "_blank");
    toast({
      title: "Downloading Resume",
      description: "Your download should start shortly.",
    });
  };

  return (
    <section id="contact" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Get In Touch
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              I'm always open to discussing new opportunities and interesting projects. 
              Let's connect and see how we can work together!
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Send size={24} />
                  Send a Message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Input placeholder="Your Name" required />
                    <Input type="email" placeholder="Your Email" required />
                  </div>
                  <Input placeholder="Subject" required />
                  <Textarea 
                    placeholder="Your Message" 
                    rows={5} 
                    required 
                  />
                  <Button type="submit" className="w-full flex items-center gap-2">
                    <Send size={16} />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
            
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Mail size={20} className="text-primary" />
                    <span>kkdprince6318@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone size={20} className="text-primary" />
                    <span>+91 8238002178</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin size={20} className="text-primary" />
                    <span>India</span>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Download Resume</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Get my complete resume with detailed information about my experience, skills, and projects.
                  </p>
                  <Button 
                    onClick={handleResumeDownload}
                    className="w-full flex items-center gap-2"
                    size="lg"
                  >
                    <Download size={20} />
                    Download Resume (PDF)
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
