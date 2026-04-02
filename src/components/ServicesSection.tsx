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
    <section id="services" className="py-20 md:py-32 bg-white">
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
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
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
                <Card className="hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 h-full bg-gradient-to-br from-white to-blue-50 border border-blue-100 hover:border-blue-300">
                <CardContent className="p-8">
                  <div className="flex flex-col gap-6">
                    {/* Icon & Name */}
                    <div className="flex items-center gap-4">
                      <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-400 rounded-2xl flex items-center justify-center shadow-lg">
                        <IconComponent className="w-9 h-9 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 leading-tight">
                        {service.name}
                      </h3>
                    </div>

                    {/* Description */}
                    <p className="text-base text-gray-700 leading-relaxed min-h-[60px]">
                      {service.description}
                    </p>

                    {/* Pricing */}
                    <div className="pt-4 border-t-2 border-blue-200">
                      <div className="text-sm font-bold text-gray-800 mb-4 uppercase tracking-wide flex items-center gap-2">
                        <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                        Pricing
                      </div>
                      <div className="space-y-3">
                        {service.pricing.map((price) => (
                          <div
                            key={price.duration}
                            className="flex justify-between items-center bg-white p-4 rounded-xl shadow-sm border border-blue-100 hover:border-blue-300 transition-colors"
                          >
                            <span className="text-gray-800 font-semibold">{price.duration}</span>
                            <span className="text-2xl font-bold text-blue-600">{price.price}</span>
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
