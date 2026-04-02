import { Star } from 'lucide-react'
import { businessInfo } from '../data/businessInfo'
import { Button } from './ui/button'
import { motion } from 'framer-motion'

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const offset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.scrollY - offset
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center text-white"
      style={{
        backgroundImage: 'url(/images/hero-bg.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="relative z-10 max-w-4xl mx-auto px-6 text-center"
      >
        <h1 className="text-5xl md:text-6xl font-bold mb-4">
          {businessInfo.name}
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-200">
          {businessInfo.tagline}
        </p>

        {/* Business Stats */}
        <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm md:text-base">
          <div className="flex items-center gap-2">
            <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
            <span className="font-semibold">{businessInfo.rating}</span>
            <span className="text-gray-300">({businessInfo.reviewCount} reviews)</span>
          </div>
          <div className="text-gray-300">
            {businessInfo.hours}
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            onClick={() => scrollToSection('services')}
            className="bg-primary hover:bg-secondary text-white text-lg px-10 py-7 shadow-2xl hover:shadow-primary/50 transition-all"
          >
            View Services
          </Button>
          <Button
            size="lg"
            onClick={() => scrollToSection('contact')}
            className="bg-white hover:bg-gray-100 text-primary text-lg px-10 py-7 font-bold shadow-2xl transition-all"
          >
            Book Appointment
          </Button>
        </div>
      </motion.div>
    </section>
  )
}

export default HeroSection
