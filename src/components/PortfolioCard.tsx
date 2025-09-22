import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, Github } from "lucide-react";

interface PortfolioCardProps {
  title: string;
  description: string;
  tags: string[];
  type: "code" | "case" | "article";
  link?: string;
  githubLink?: string;
  imageUrl?: string;
}

const PortfolioCard = ({ 
  title, 
  description, 
  tags, 
  type, 
  link, 
  githubLink, 
  imageUrl 
}: PortfolioCardProps) => {
  const getTypeColor = () => {
    switch (type) {
      case "code":
        return "bg-primary/10 text-primary border-primary/20";
      case "case":
        return "bg-accent/10 text-accent border-accent/20";
      case "article":
        return "bg-warning/10 text-warning border-warning/20";
      default:
        return "bg-muted";
    }
  };

  const getTypeLabel = () => {
    switch (type) {
      case "code":
        return "Code Project";
      case "case":
        return "Case Study";
      case "article":
        return "Article";
      default:
        return "";
    }
  };

  return (
    <Card className="group shadow-card hover:shadow-card-hover transition-smooth bg-gradient-card border-border/50">
      {imageUrl && (
        <div className="aspect-video w-full overflow-hidden rounded-t-lg">
          <img 
            src={imageUrl} 
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
          />
        </div>
      )}
      
      <CardHeader>
        <div className="flex items-center justify-between mb-2">
          <Badge variant="secondary" className={getTypeColor()}>
            {getTypeLabel()}
          </Badge>
        </div>
        <CardTitle className="text-xl group-hover:text-primary transition-smooth">
          {title}
        </CardTitle>
        <CardDescription className="text-muted-foreground leading-relaxed">
          {description}
        </CardDescription>
      </CardHeader>

      <CardContent>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <Badge key={index} variant="outline" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>

        <div className="flex gap-2">
          {link && (
            <Button 
              size="sm" 
              className="flex-1"
              onClick={() => window.open(link, '_blank')}
            >
              View Project
              <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
          )}
          {githubLink && (
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => window.open(githubLink, '_blank')}
            >
              <Github className="h-4 w-4" />
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default PortfolioCard;