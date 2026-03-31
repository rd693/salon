export interface Service {
  id: string
  name: string
  description: string
  icon: string
  pricing: {
    duration: string
    price: string
  }[]
}

export const services: Service[] = [
  {
    id: "deep-tissue",
    name: "Deep Tissue Massage",
    description: "Intensive therapy targeting chronic muscle tension and pain. Ideal for athletes and those with persistent discomfort.",
    icon: "Dumbbell",
    pricing: [
      { duration: "60 min", price: "$48" },
      { duration: "90 min", price: "$72" },
      { duration: "120 min", price: "$96" }
    ]
  },
  {
    id: "swedish",
    name: "Swedish Massage",
    description: "Classic relaxation massage using gentle, flowing strokes to reduce stress and promote full-body wellness.",
    icon: "Sparkles",
    pricing: [
      { duration: "60 min", price: "$48" },
      { duration: "90 min", price: "$72" },
      { duration: "120 min", price: "$96" }
    ]
  },
  {
    id: "thai",
    name: "Thai Massage",
    description: "Traditional stretching-based therapy combining acupressure and assisted yoga postures for flexibility and energy flow.",
    icon: "Activity",
    pricing: [
      { duration: "60 min", price: "$48" },
      { duration: "90 min", price: "$72" },
      { duration: "120 min", price: "$96" }
    ]
  },
  {
    id: "sports",
    name: "Sports Massage",
    description: "Specialized treatment for athletic performance, injury prevention, and post-workout recovery.",
    icon: "Target",
    pricing: [
      { duration: "60 min", price: "$48" },
      { duration: "90 min", price: "$72" },
      { duration: "120 min", price: "$96" }
    ]
  },
  {
    id: "therapeutic",
    name: "Therapeutic Massage",
    description: "Medical-grade treatment for orthopedic conditions, postural issues, and chronic pain management.",
    icon: "Heart",
    pricing: [
      { duration: "60 min", price: "$48" },
      { duration: "90 min", price: "$72" },
      { duration: "120 min", price: "$96" }
    ]
  },
  {
    id: "reflexology",
    name: "Foot Reflexology",
    description: "Pressure point therapy focusing on feet to promote healing and balance throughout the body.",
    icon: "Footprints",
    pricing: [
      { duration: "60 min", price: "$48" },
      { duration: "90 min", price: "$72" }
    ]
  }
]
