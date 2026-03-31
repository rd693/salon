import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutSection />

      {/* Services Section */}
      <section id="services" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {['Swedish Massage', 'Deep Tissue Massage', 'Thai Massage', 'Hot Stone Therapy', 'Reflexology', 'Aromatherapy'].map((service) => (
              <div key={service} className="bg-surface p-6 rounded-lg border border-gray-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{service}</h3>
                <p className="text-gray-600">Experience the healing benefits of our professional {service.toLowerCase()} treatment.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-16 bg-surface">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Client Testimonials</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: 'Sarah Johnson', text: 'Amazing experience! The therapists are very professional and the atmosphere is so relaxing.' },
              { name: 'Mike Chen', text: 'Best massage I have ever had. Will definitely come back for more treatments.' },
              { name: 'Emma Davis', text: 'Highly recommend! The staff is friendly and the quality of service is exceptional.' },
            ].map((testimonial) => (
              <div key={testimonial.name} className="bg-white p-6 rounded-lg border border-gray-200">
                <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                <p className="font-semibold text-gray-900">— {testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Contact Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Get in Touch</h3>
              <p className="text-gray-600 mb-4">
                <strong>Phone:</strong> (323) 371-5126
              </p>
              <p className="text-gray-600 mb-4">
                <strong>Address:</strong> 2415 Pasadena Ave E, Los Angeles, CA 90031
              </p>
              <p className="text-gray-600">
                <strong>Hours:</strong> Monday - Sunday: 10:00 AM - 9:00 PM
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Book an Appointment</h3>
              <p className="text-gray-600">
                Ready to experience the best therapeutic massage? Contact us today to schedule your appointment.
                Our friendly staff is here to help!
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default App
