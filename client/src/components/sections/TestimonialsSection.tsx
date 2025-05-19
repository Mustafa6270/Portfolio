import { testimonials } from "@/lib/data";

export default function TestimonialsSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Recommendations</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Feedback from professionals I've had the opportunity to work with during my training and internship.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-accent p-8 rounded-lg shadow-md">
              <div className="text-primary text-2xl mb-4">
                <i className="fas fa-quote-left"></i>
              </div>
              <p className="text-gray-800 mb-6">{testimonial.content}</p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-gray-300 flex items-center justify-center text-gray-600 mr-4">
                  <i className="fas fa-user text-lg"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-700">{testimonial.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
