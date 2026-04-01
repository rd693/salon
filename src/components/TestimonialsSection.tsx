import { Card, CardContent } from './ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from './ui/carousel'
import { Star, Quote } from 'lucide-react'
import { featuredTestimonial, testimonials } from '../data/testimonials'

const renderStars = (rating: number) => {
  const validRating = Math.min(5, Math.max(0, Math.floor(rating)))
  return (
    <div className="flex gap-1 justify-center" role="img" aria-label={`${validRating} out of 5 stars`}>
      {[...Array(validRating)].map((_, i) => (
        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" aria-hidden="true" />
      ))}
    </div>
  )
}

export function TestimonialsSection() {

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Featured Testimonial */}
        <div className="max-w-4xl mx-auto mb-16">
          <Card className="bg-white shadow-xl">
            <CardContent className="p-8 md:p-12 text-center">
              <Quote className="w-12 h-12 text-primary mx-auto mb-6 opacity-20" />
              <div className="mb-6">
                {renderStars(featuredTestimonial.rating)}
              </div>
              <blockquote className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-6">
                "{featuredTestimonial.quote}"
              </blockquote>
              <p className="text-sm font-medium text-gray-500">
                {featuredTestimonial.source}
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Carousel Section */}
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-6xl mx-auto"
        >
          <CarouselContent>
            {testimonials.map((testimonial) => (
              <CarouselItem key={testimonial.id} className="md:basis-1/2 lg:basis-1/3">
                <Card className="h-full">
                  <CardContent className="p-6">
                    <div className="mb-4">
                      {renderStars(testimonial.rating)}
                    </div>
                    <blockquote className="text-gray-700 mb-4 leading-relaxed">
                      "{testimonial.quote}"
                    </blockquote>
                    <p className="text-xs font-medium text-gray-500">
                      {testimonial.source}
                    </p>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  )
}
