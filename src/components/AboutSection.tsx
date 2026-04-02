import { Users, Check, DollarSign, Clock, Star, Award } from 'lucide-react'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const AboutSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const features = [
    {
      icon: Users,
      title: 'Expert Therapists',
      description: 'Licensed professionals Emmy & Lucy with years of experience',
    },
    {
      icon: Check,
      title: 'Proven Results',
      description: '4.8-star rating from 67+ satisfied clients',
    },
    {
      icon: DollarSign,
      title: 'Affordable Pricing',
      description: 'Premium therapeutic care at competitive rates',
    },
    {
      icon: Clock,
      title: 'Flexible Hours',
      description: 'Open 7 days a week, 10 AM - 9 PM',
    },
    {
      icon: Award,
      title: 'Professional Care',
      description: 'Orthopedic & postural specialists',
    },
  ]

  return (
    <section id="about" className="py-20 md:py-28 bg-gradient-to-br from-white via-blue-50 to-green-50">
      <div ref={ref} className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/images/spa-interior.jpg"
                alt="Relaxing spa interior"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>
            <div className="absolute -bottom-6 -right-6 bg-gradient-to-br from-blue-600 to-blue-500 text-white p-8 rounded-2xl shadow-2xl">
              <div className="text-center">
                <div className="text-5xl font-bold mb-2">4.8</div>
                <div className="flex gap-1 justify-center mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-300 text-yellow-300" />
                  ))}
                </div>
                <div className="text-sm font-medium">67+ Reviews</div>
              </div>
            </div>
          </motion.div>

          {/* Right: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Expert Therapeutic Care in <span className="text-primary">Lincoln Heights</span>
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Welcome to 81 Massage Therapy Spa, your premier destination for therapeutic massage
              and spa services. Our experienced therapists, Emmy and Lucy, bring years of expertise
              and dedication to every treatment.
            </p>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              We specialize in providing personalized therapeutic care that addresses your unique
              needs. Whether you're seeking relief from chronic pain, stress reduction, or simply a
              moment of relaxation, our team is committed to your wellness.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feature, idx) => (
                <div
                  key={feature.title}
                  className="flex gap-3 items-start"
                >
                  <div className="flex-shrink-0">
                    <div className={`w-12 h-12 ${idx % 2 === 0 ? 'bg-blue-100' : 'bg-green-100'} rounded-lg flex items-center justify-center shadow-sm`}>
                      <feature.icon className={`w-6 h-6 ${idx % 2 === 0 ? 'text-blue-600' : 'text-green-600'}`} />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-gray-900 mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-gray-700">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
