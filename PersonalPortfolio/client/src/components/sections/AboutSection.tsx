import { Button } from "@/components/ui/button";

export default function AboutSection() {
  const education = [
    "Boğaziçi Aviation College (2024-2025)",
    "Sultanbeyli Sabiha Gökçen Vocational and Technical Anatolian High School (2021-2024)",
    "Aircraft Maintenance Technician Training",
    "English Language Proficiency (B2)"
  ];

  return (
    <section id="about" className="py-20 bg-white section">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Mustafa Yıldırım - Aircraft Maintenance Technician" 
              className="rounded-lg shadow-xl w-full max-w-md mx-auto"
            />
          </div>

          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">About Me</h2>
            <p className="text-lg text-secondary mb-6">
              I'm an Aircraft Maintenance Technician with specialized training and hands-on experience in the aviation industry. 
              My internship at Turkish Engine Center (Pratt & Whitney THY Technic) provided valuable experience in engine module dismantling.
            </p>
            <p className="text-lg text-secondary mb-8">
              I combine technical maintenance skills with strong computer proficiency, including programming, CAD design, and multimedia tools.
              I'm team-oriented with quick adaptability to new environments and technical challenges.
            </p>

            <h3 className="text-xl font-bold mb-4">Education & Training</h3>
            <div className="grid grid-cols-1 gap-3 mb-8">
              {education.map((item, index) => (
                <div key={index} className="flex items-center">
                  <i className="fas fa-graduation-cap text-primary text-xl mr-3"></i>
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <Button 
              asChild
              className="px-6 py-3 bg-primary text-white rounded-md font-medium hover:bg-blue-600 transition"
            >
              <a href="#contact">Get In Touch</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
