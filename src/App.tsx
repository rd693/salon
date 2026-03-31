import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import { ServicesSection } from './components/ServicesSection'
import { TestimonialsSection } from './components/TestimonialsSection'

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <TestimonialsSection />

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
