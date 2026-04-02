import { Card, CardContent } from './ui/card'
import { services } from '../data/services'
import { Dumbbell, Sparkles, Activity, Target, Heart, Footprints } from 'lucide-react'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Dumbbell,
  Sparkles,
  Activity,
  Target,
  Heart,
  Footprints
}

export function ServicesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="services" className="py-16 md:py-24 bg-white">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Therapeutic Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Professional massage therapy tailored to your wellness needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => {
            const IconComponent = iconMap[service.icon] || Heart

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, ease: 'easeOut', delay: index * 0.1 }}
              >
                <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full">
                <CardContent className="p-6">
                  <div className="flex flex-col sm:flex-row gap-4">
                    {/* Left: Icon, Name, Description */}
                    <div className="flex-1">
                      <div className="flex items-start gap-3 mb-3">
                        <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                          <IconComponent className="w-6 h-6 text-primary" />
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900">
                          {service.name}
                        </h3>
                      </div>
                      <p className="text-sm text-gray-600">
                        {service.description}
                      </p>
                    </div>

                    {/* Right: Pricing Table */}
                    <div className="sm:border-l sm:border-gray-200 sm:pl-4">
                      <div className="text-sm font-medium text-gray-500 mb-2">Pricing</div>
                      <div className="space-y-1">
                        {service.pricing.map((price) => (
                          <div
                            key={price.duration}
                            className="flex justify-between gap-4 text-sm"
                          >
                            <span className="text-gray-600">{price.duration}</span>
                            <span className="font-semibold text-primary">{price.price}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
