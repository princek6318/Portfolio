import { Button } from "@/component/ui/button";
import { Drawer, DrawerContent, DrawerTrigger } from "@/component/ui/drawer";
import { Download, Github, Menu, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useIsMobile } from "@/hooks/use-mobile";
import { useState } from "react";

const Navigation = () => {
  const { theme, setTheme } = useTheme();
  const isMobile = useIsMobile();
  const [open, setOpen] = useState(false);

  const handleResumeDownload = () => {
    // This will open the Google Drive link for resume download
    window.open("https://drive.google.com/file/d/16C-cjhwQH9ZY4PI3A2FOBMt503vspIl-/view?usp=drive_link", "_blank");
    setOpen(false);
  };

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
    setOpen(false);
  };

  const NavigationButtons = () => (
    <>
      <Button
        variant="outline"
        size="sm"
        onClick={toggleTheme}
        className="flex items-center gap-2"
      >
        {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
        {theme === "dark" ? "Light" : "Dark"}
      </Button>
      <Button
        variant="outline"
        size="sm"
        onClick={handleResumeDownload}
        className="flex items-center gap-2"
      >
        <Download size={16} />
        Resume
      </Button>
      <Button
        variant="outline"
        size="sm"
        asChild
      >
        <a 
          href="https://github.com/princek6318" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-2"
          onClick={() => setOpen(false)}
        >
          <Github size={16} />
          GitHub
        </a>
      </Button>
    </>
  );

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-4">
        {isMobile ? (
          <div className="flex items-center justify-between">
            <div className="flex-1 text-center">
              <div className="text-2xl font-bold text-foreground">
                Prince Kakadiya
              </div>
            </div>
            <Drawer open={open} onOpenChange={setOpen}>
              <DrawerTrigger asChild>
                <Button variant="outline" size="sm">
                  <Menu size={16} />
                </Button>
              </DrawerTrigger>
              <DrawerContent>
                <div className="flex flex-col gap-4 p-6">
                  <div className="text-center text-lg font-semibold mb-4">
                    Menu
                  </div>
                  <NavigationButtons />
                </div>
              </DrawerContent>
            </Drawer>
          </div>
        ) : (
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-foreground">
              Prince Kakadiya
            </div>
            <div className="flex items-center gap-4">
              <NavigationButtons />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
