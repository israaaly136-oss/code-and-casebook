import { Button } from "@/components/ui/button";
import PortfolioCard from "./PortfolioCard";
import { useState } from "react";

const PortfolioSection = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const portfolioItems = [
    {
      id: 1,
      title: "Customer Analytics Dashboard",
      description: "Interactive dashboard analyzing customer behavior patterns and predicting churn using machine learning algorithms. Built with Python, Plotly, and Streamlit.",
      tags: ["Python", "Streamlit", "Machine Learning", "Plotly", "Pandas"],
      type: "code" as const,
      link: "https://example.com/dashboard",
      githubLink: "https://github.com/example/customer-analytics"
    },
    {
      id: 2,
      title: "E-commerce Data Pipeline",
      description: "ETL pipeline processing 1M+ daily transactions, implementing real-time analytics and automated reporting systems for business intelligence.",
      tags: ["Apache Spark", "PostgreSQL", "Docker", "Airflow", "AWS"],
      type: "code" as const,
      githubLink: "https://github.com/example/ecommerce-pipeline"
    },
    {
      id: 3,
      title: "Retail Sales Optimization Case Study",
      description: "Comprehensive analysis of retail sales data leading to 15% increase in revenue through strategic inventory management and customer segmentation.",
      tags: ["R", "Statistical Analysis", "Business Intelligence", "Tableau"],
      type: "case" as const,
      link: "https://example.com/case-study-retail"
    },
    {
      id: 4,
      title: "The Future of Data Warehousing",
      description: "In-depth article exploring modern data warehousing architectures, cloud migration strategies, and the impact of real-time analytics on business decisions.",
      tags: ["Data Architecture", "Cloud Computing", "Analytics", "Strategy"],
      type: "article" as const,
      link: "https://medium.com/@example/future-data-warehousing"
    },
    {
      id: 5,
      title: "Supply Chain Analytics Platform",
      description: "Real-time supply chain monitoring system with predictive maintenance and demand forecasting capabilities, reducing costs by 20%.",
      tags: ["Python", "TensorFlow", "MongoDB", "React", "D3.js"],
      type: "code" as const,
      link: "https://example.com/supply-chain",
      githubLink: "https://github.com/example/supply-chain-analytics"
    },
    {
      id: 6,
      title: "Healthcare Data Privacy Implementation",
      description: "Case study on implementing HIPAA-compliant data processing systems while maintaining analytical capabilities for a major healthcare provider.",
      tags: ["Data Privacy", "HIPAA", "Security", "Healthcare Analytics"],
      type: "case" as const,
      link: "https://example.com/healthcare-case"
    }
  ];

  const filters = [
    { key: "all", label: "All Work" },
    { key: "code", label: "Code Projects" },
    { key: "case", label: "Case Studies" },
    { key: "article", label: "Articles" }
  ];

  const filteredItems = activeFilter === "all" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.type === activeFilter);

  return (
    <section id="portfolio" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            My Portfolio
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Explore my latest work in data management, analytics, and strategic insights. 
            Each project represents a unique challenge and innovative solution.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((filter) => (
            <Button
              key={filter.key}
              variant={activeFilter === filter.key ? "default" : "outline"}
              onClick={() => setActiveFilter(filter.key)}
              className={`transition-smooth ${
                activeFilter === filter.key 
                  ? "bg-gradient-hero text-white shadow-hero" 
                  : "hover:bg-primary/10 hover:text-primary"
              }`}
            >
              {filter.label}
            </Button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <PortfolioCard
              key={item.id}
              title={item.title}
              description={item.description}
              tags={item.tags}
              type={item.type}
              link={item.link}
              githubLink={item.githubLink}
            />
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-12">
            <p className="text-lg text-muted-foreground">
              No items found for the selected filter.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default PortfolioSection;