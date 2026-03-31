import { Card, CardContent } from './ui/card'
import { services } from '../data/services'
import * as LucideIcons from 'lucide-react'

export function ServicesSection() {
  return (
    <section id="services" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Therapeutic Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Professional massage therapy tailored to your wellness needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service) => {
            const IconComponent = (LucideIcons as any)[service.icon] || LucideIcons.Heart

            return (
              <Card
                key={service.id}
                className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
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
                        {service.pricing.map((price, index) => (
                          <div
                            key={index}
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
            )
          })}
        </div>
      </div>
    </section>
  )
}
