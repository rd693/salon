import Navbar from './components/Navbar'

function App() {
  return (
    <>
      <Navbar />

      {/* Home Section */}
      <section id="home" className="pt-20 pb-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 py-20 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">81 Therapy Spa</h1>
          <p className="text-xl text-gray-600 mb-8">Therapeutic Massage Specialists</p>
          <button className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
            Book Your Appointment
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-surface">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">About Us</h2>
          <p className="text-lg text-gray-700 max-w-3xl mb-8">
            Welcome to 81 Therapy Spa, your premier destination for therapeutic massage and spa services.
            With over a decade of experience, we are dedicated to providing the highest quality treatments
            to help you relax, rejuvenate, and restore your body and mind.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Expert Therapists</h3>
              <p className="text-gray-600">Licensed professionals with years of experience</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Premium Facilities</h3>
              <p className="text-gray-600">Modern, clean, and relaxing treatment rooms</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Personalized Care</h3>
              <p className="text-gray-600">Customized treatments for your unique needs</p>
            </div>
          </div>
        </div>
      </section>

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
