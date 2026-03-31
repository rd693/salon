import { Users, Check, DollarSign, Clock, Star } from 'lucide-react'

const AboutSection = () => {
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
      icon: Star,
      title: 'Premium Experience',
      description: 'Clean, modern facilities in a relaxing environment',
    },
  ]

  return (
    <section id="about" className="py-16 bg-surface">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Text Content */}
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Expert Therapeutic Care in Lincoln Heights
            </h2>
            <p className="text-lg text-gray-700 mb-4">
              Welcome to 81 Massage Therapy Spa, your premier destination for therapeutic massage
              and spa services in the heart of Lincoln Heights. Our experienced therapists, Emmy and
              Lucy, bring years of expertise and dedication to every treatment.
            </p>
            <p className="text-lg text-gray-700">
              We specialize in providing personalized therapeutic care that addresses your unique
              needs. Whether you're seeking relief from chronic pain, stress reduction, or simply a
              moment of relaxation, our team is committed to helping you achieve optimal wellness
              through professional massage therapy.
            </p>
          </div>

          {/* Features Grid */}
          <div className="space-y-4">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="flex gap-4 p-4 bg-white rounded-lg border border-gray-200"
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
