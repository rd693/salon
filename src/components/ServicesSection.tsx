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
    <section id="services" className="py-16 md:py-24 bg-gradient-to-br from-blue-50 to-white">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Therapeutic Services
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Professional massage therapy tailored to your wellness needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = iconMap[service.icon] || Heart

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, ease: 'easeOut', delay: index * 0.1 }}
              >
                <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 h-full border-2 hover:border-primary/30 bg-white">
                <CardContent className="p-8">
                  <div className="flex flex-col gap-6">
                    {/* Icon & Name */}
                    <div className="flex items-center gap-4">
                      <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center shadow-lg">
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 leading-tight">
                        {service.name}
                      </h3>
                    </div>

                    {/* Description */}
                    <p className="text-base text-gray-700 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Pricing */}
                    <div className="pt-4 border-t border-gray-200">
                      <div className="text-sm font-semibold text-gray-900 mb-3 uppercase tracking-wide">Pricing</div>
                      <div className="space-y-3">
                        {service.pricing.map((price) => (
                          <div
                            key={price.duration}
                            className="flex justify-between items-center bg-blue-50 p-3 rounded-lg"
                          >
                            <span className="text-gray-900 font-medium">{price.duration}</span>
                            <span className="text-xl font-bold text-primary">{price.price}</span>
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
