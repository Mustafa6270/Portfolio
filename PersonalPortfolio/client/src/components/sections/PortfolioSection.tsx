import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { portfolioItems } from "@/lib/data";

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="py-16 bg-light section">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Portfolio</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Showcasing my professional work and aviation projects.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item) => (
            <Card 
              key={item.id}
              className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105"
            >
              <div className="w-full h-52 overflow-hidden">
                <img 
                  src={item.imageUrl} 
                  alt={`${item.title}`} 
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.technologies.map((tech, index) => (
                    <span 
                      key={index} 
                      className="px-3 py-1 bg-accent text-primary rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a href={item.projectUrl} className="text-primary font-medium hover:underline">
                  View Details
                </a>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            className="px-6 py-3 bg-primary text-white rounded-md font-medium hover:bg-blue-600 transition"
          >
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
}
