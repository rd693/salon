import { Card, CardContent } from './ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from './ui/carousel'
import { Star, Quote, CheckCircle2, User } from 'lucide-react'
import { featuredTestimonial, testimonials } from '../data/testimonials'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const renderStars = (rating: number) => {
  const validRating = Math.min(5, Math.max(0, Math.floor(rating)))
  return (
    <div className="flex gap-1" role="img" aria-label={`${validRating} out of 5 stars`}>
      {[...Array(validRating)].map((_, i) => (
        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" aria-hidden="true" />
      ))}
    </div>
  )
}

export function TestimonialsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="testimonials" className="py-20 md:py-32 bg-gradient-to-br from-blue-50 via-white to-green-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-600 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-green-500 rounded-full blur-3xl"></div>
      </div>

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            What Our <span className="text-blue-600">Clients</span> Say
          </h2>
          <p className="text-xl text-gray-600">Real reviews from real people</p>
        </motion.div>

        {/* Featured Testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
          className="max-w-5xl mx-auto mb-20"
        >
          <Card className="bg-gradient-to-br from-white to-blue-50 shadow-2xl border border-gray-200 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-blue-600 rounded-full blur-3xl opacity-10"></div>
            <CardContent className="p-10 md:p-14 relative">
              <div className="flex justify-center mb-8">
                <Quote className="w-16 h-16 text-blue-600 opacity-30" />
              </div>
              <div className="flex justify-center mb-6">
                {renderStars(featuredTestimonial.rating)}
              </div>
              <blockquote className="text-2xl md:text-3xl text-gray-800 leading-relaxed mb-8 text-center font-medium">
                "{featuredTestimonial.quote}"
              </blockquote>
              <div className="flex items-center justify-center gap-4">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-blue-400 rounded-full flex items-center justify-center shadow-lg">
                  <User className="w-8 h-8 text-white" />
                </div>
                <div className="text-left">
                  <p className="text-lg font-bold text-gray-900">{featuredTestimonial.author}</p>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckCircle2 className="w-4 h-4 text-green-600" />
                    <span className="font-semibold">{featuredTestimonial.source}</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Carousel Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.3 }}
        >
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full max-w-6xl mx-auto"
          >
            <CarouselContent className="-ml-4">
              {testimonials.map((testimonial) => (
                <CarouselItem key={testimonial.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <Card className="h-full bg-gradient-to-br from-white to-blue-50 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-200">
                    <CardContent className="p-7">
                      <div className="flex items-start justify-between mb-4">
                        {renderStars(testimonial.rating)}
                        <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                      </div>
                      <blockquote className="text-gray-800 mb-6 leading-relaxed text-base min-h-[120px] font-medium">
                        "{testimonial.quote}"
                      </blockquote>
                      <div className="pt-4 border-t border-gray-200">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-500 rounded-full flex items-center justify-center shadow-md flex-shrink-0">
                            <User className="w-5 h-5 text-white" />
                          </div>
                          <div>
                            <p className="font-bold text-gray-900 text-sm">{testimonial.author}</p>
                            <p className="text-xs text-gray-700 font-semibold">{testimonial.source}</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </motion.div>
      </div>
    </section>
  )
}
