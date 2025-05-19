import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section id="home" className="section">
      <div 
        className="relative h-screen max-h-[800px] bg-cover bg-center" 
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60">
          <div className="container mx-auto px-4 md:px-6 lg:px-8 h-full flex flex-col justify-center">
            <div className="max-w-3xl text-white">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                Hi, I'm Mustafa Yıldırım
              </h1>
              <p className="text-xl md:text-2xl mb-4">
                Aircraft Maintenance Technician
              </p>
              <p className="text-lg md:text-xl mb-8">
                Specializing in aircraft engine maintenance with experience at Turkish Engine Center (Pratt & Whitney THY Technic)
              </p>
              <div className="flex flex-wrap gap-4">
                <Button
                  asChild
                  className="px-6 py-6 bg-primary text-white rounded-md font-medium hover:bg-blue-600 transition"
                >
                  <a href="#portfolio">View My Experience</a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="px-6 py-6 bg-transparent text-white border border-white rounded-md font-medium hover:bg-white hover:text-dark transition"
                >
                  <a href="#about">Learn More</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
