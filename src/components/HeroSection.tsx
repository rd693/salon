import { Star } from 'lucide-react'
import { businessInfo } from '../data/businessInfo'
import { Button } from './ui/button'

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
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
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
            className="bg-primary hover:bg-primary/90 text-white"
          >
            View Services
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() => scrollToSection('contact')}
            className="bg-white/10 hover:bg-white/20 text-white border-white/30"
          >
            Book Now
          </Button>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
