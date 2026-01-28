import React, { useState } from 'react';
import { Mail, Send, CheckCircle } from 'lucide-react';
import { useToast } from '../hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    serviceType: '',
    date: '',
    location: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Received!",
        description: "Thank you for reaching out. We'll get back to you within 24 hours.",
      });
      
      setFormData({
        name: '',
        email: '',
        serviceType: '',
        date: '',
        location: '',
        message: '',
      });
      setIsSubmitting(false);
    }, 1500);
  };

  const handleEmailClick = () => {
    window.location.href = 'mailto:cjaycinematics@outlook.com';
  };

  return (
    <section id="contact" className="py-24 px-4 bg-deep-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-off-white mb-4 gold-accent inline-block">Get in Touch</h2>
          <p className="text-warm-cream text-lg max-w-3xl mx-auto opacity-90">
            Ready to preserve your story? Let's discuss how we can capture your most meaningful moments.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-serif text-gold mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Mail size={28} className="text-gold flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-off-white font-semibold mb-1">Email</p>
                    <a 
                      href="mailto:cjaycinematics@outlook.com"
                      className="text-warm-cream hover:text-gold transition-colors"
                    >
                      cjaycinematics@outlook.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Email Button */}
            <button
              onClick={handleEmailClick}
              className="btn-primary w-full sm:w-auto"
            >
              <Mail size={20} />
              Email Cjay Cinematics
            </button>

            {/* Service Areas */}
            <div className="p-6 bg-charcoal/50 border border-gold/20 rounded-lg">
              <h4 className="text-xl font-serif text-gold mb-3">Service Areas</h4>
              <p className="text-warm-cream mb-2">
                Proudly serving Muskogee, Oklahoma and surrounding areas
              </p>
              <p className="text-warm-cream text-sm opacity-80">
                Travel available for destination events and special circumstances.
              </p>
            </div>

            {/* Social Media Links */}
            <div>
              <h4 className="text-xl font-serif text-gold mb-4">Follow Us</h4>
              <div className="space-y-3">
                <a 
                  href="https://www.instagram.com/cjaycinematics?igsh=MWhzOHI5MXUyMGx0MQ%3D%3D&utm_source=qr" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-warm-cream hover:text-gold transition-colors"
                >
                  <span className="text-sm">Instagram:</span>
                  <span className="font-medium">@cjaycinematics</span>
                </a>
                <a 
                  href="https://www.facebook.com/share/187chw8RpE/?mibextid=wwXIfr" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-warm-cream hover:text-gold transition-colors"
                >
                  <span className="text-sm">Facebook:</span>
                  <span className="font-medium">Cjay Cinematics</span>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form">
            <h3 className="text-2xl font-serif text-gold mb-6">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="form-group">
                <label htmlFor="name" className="form-label">Full Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="form-input"
                  required
                  placeholder="Enter your full name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email" className="form-label">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="form-input"
                  required
                  placeholder="your.email@example.com"
                />
              </div>

              <div className="form-group">
                <label htmlFor="serviceType" className="form-label">Service Type *</label>
                <select
                  id="serviceType"
                  name="serviceType"
                  value={formData.serviceType}
                  onChange={handleChange}
                  className="form-select"
                  required
                >
                  <option value="">Select a service</option>
                  <option value="memorial">Memorial/Funeral Service</option>
                  <option value="celebration">Celebration of Life</option>
                  <option value="wedding">Wedding</option>
                  <option value="event">Special Event</option>
                  <option value="legacy">Legacy Interview</option>
                  <option value="other">Other/Custom</option>
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="form-group">
                  <label htmlFor="date" className="form-label">Event Date</label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="location" className="form-label">Location</label>
                  <input
                    type="text"
                    id="location"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="City, State"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="form-textarea"
                  required
                  placeholder="Tell us about your needs and any questions you have..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary w-full justify-center"
              >
                {isSubmitting ? (
                  <>
                    <span className="animate-spin">⏳</span>
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send size={20} />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
