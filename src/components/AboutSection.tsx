import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Database, BarChart3, Brain, Code2 } from "lucide-react";

const AboutSection = () => {
  const skills = [
    "Python", "SQL", "R", "Tableau", "Power BI", "Excel",
    "PostgreSQL", "MongoDB", "Apache Spark", "Pandas",
    "Machine Learning", "Statistical Analysis", "Data Visualization",
    "ETL Processes", "Data Warehousing", "Business Intelligence"
  ];

  const expertise = [
    {
      icon: Database,
      title: "Data Architecture",
      description: "Design and implement scalable data infrastructure and warehousing solutions."
    },
    {
      icon: BarChart3,
      title: "Analytics & Insights",
      description: "Transform complex datasets into actionable business intelligence and strategic insights."
    },
    {
      icon: Brain,
      title: "Machine Learning",
      description: "Develop predictive models and automated analysis systems for business optimization."
    },
    {
      icon: Code2,
      title: "Process Automation",
      description: "Streamline data workflows and create efficient ETL processes for better operations."
    }
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I'm a passionate data manager with over 5 years of experience turning complex data 
            into strategic business insights. My expertise spans from data architecture to 
            machine learning implementations.
          </p>
        </div>

        {/* Expertise Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {expertise.map((item, index) => {
            const Icon = item.icon;
            return (
              <Card key={index} className="shadow-card hover:shadow-card-hover transition-smooth bg-gradient-card">
                <CardContent className="p-6 text-center">
                  <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-3">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Skills */}
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-8">Technical Skills</h3>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {skills.map((skill, index) => (
              <Badge 
                key={index} 
                variant="secondary" 
                className="px-4 py-2 text-sm hover:bg-primary/10 hover:text-primary transition-smooth cursor-default"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;