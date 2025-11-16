import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, FileText } from "lucide-react";

interface ProjectModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  overview: string;
  tech: string;
  results: string;
  github?: string;
  report?: string;
  demo?: string;
  demoLabel?: string;
}
const ProjectModal = ({
  open,
  onOpenChange,
  title,
  overview,
  tech,
  results,
  github,
  report,
  demo,
  demoLabel = "Project"
}: ProjectModalProps) => {
  return <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">{title}</DialogTitle>
        </DialogHeader>
        
        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="tech">Tech</TabsTrigger>
            <TabsTrigger value="results">Results</TabsTrigger>
          </TabsList>
          
          <TabsContent value="overview" className="space-y-4 pt-4">
            <p className="text-muted-foreground leading-relaxed text-left">{overview}</p>
          </TabsContent>
          
          <TabsContent value="tech" className="space-y-4 pt-4">
            <div className="bg-card border border-border rounded-lg p-4">
              <p className="text-muted-foreground leading-relaxed text-left">{tech}</p>
            </div>
          </TabsContent>
          
          <TabsContent value="results" className="space-y-4 pt-4">
            <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
              <p className="text-muted-foreground leading-relaxed text-left">{results}</p>
            </div>
          </TabsContent>
        </Tabs>

        <div className="flex gap-3 pt-4 border-t border-border">
          {github && (
            <Button variant="outline" className="gap-2 flex-1" asChild>
              <a href={github} target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4" />
                GitHub
              </a>
            </Button>
          )}
          {report && (
            <Button variant="outline" className="gap-2 flex-1" asChild>
              <a href={report} target="_blank" rel="noopener noreferrer">
                <FileText className="h-4 w-4" />
                Report
              </a>
            </Button>
          )}
          {demo && (
            <Button variant="outline" className="gap-2 flex-1" asChild>
              <a href={demo} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4" />
                {demoLabel}
              </a>
            </Button>
          )}
        </div>
      </DialogContent>
    </Dialog>;
};
export default ProjectModal;