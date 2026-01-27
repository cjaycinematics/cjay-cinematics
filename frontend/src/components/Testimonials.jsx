import React from 'react';
import { Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Cjay captured our mother's memorial service with such grace and professionalism. The film is a treasure we'll cherish forever. Thank you for honoring her memory so beautifully.",
      author: "The Johnson Family",
      role: "Memorial Service",
    },
    {
      quote: "The celebration of life film was absolutely perfect. Cjay's respectful approach and attention to detail meant everything to our family during a difficult time.",
      author: "Sarah Williams",
      role: "Celebration of Life",
    },
    {
      quote: "Our wedding film exceeded every expectation. The cinematography was stunning, and Cjay captured all the emotions and moments we didn't even realize happened. A true artist.",
      author: "Michael & Jessica Thompson",
      role: "Wedding Coverage",
    },
    {
      quote: "Professional, compassionate, and incredibly talented. The legacy interview with my grandmother is priceless. Future generations will treasure this gift.",
      author: "Robert Chen",
      role: "Legacy Interview",
    },
    {
      quote: "The highlight film from our anniversary party was breathtaking. Cjay has an incredible eye for storytelling and made our celebration feel like a Hollywood movie.",
      author: "David & Linda Martinez",
      role: "Anniversary Event",
    },
    {
      quote: "Working with Cjay Cinematics was seamless from start to finish. The quality of work, quick turnaround, and genuine care for our story made all the difference.",
      author: "Emily Anderson",
      role: "Family Tribute",
    },
  ];

  return (
    <section id="testimonials" className="py-24 px-4 bg-charcoal">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-off-white mb-4 gold-accent inline-block">What Families Say</h2>
          <p className="text-warm-cream text-lg max-w-3xl mx-auto opacity-90">
            Trusted by families across Oklahoma and beyond to preserve their most meaningful moments.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="testimonial-card hover-lift"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Quote size={32} className="text-gold mb-4 opacity-50" />
              
              <p className="testimonial-quote">
                "{testimonial.quote}"
              </p>
              
              <div className="mt-4 pt-4 border-t border-gold/20">
                <p className="testimonial-author">{testimonial.author}</p>
                <p className="testimonial-role">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
