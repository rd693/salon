export interface Testimonial {
  id: string
  quote: string
  rating: number
  author?: string
  source: string
}

export const featuredTestimonial: Testimonial = {
  id: "featured",
  quote: "Emmy and her staff are amazing and extremely knowledgeable when it comes to orthopedics, podiatry, and posture. If you have any spinal conditions affecting your posture, 81 Massage Therapy Spa is where you need to go.",
  rating: 5,
  source: "Verified Google Review"
}

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    quote: "Lucy is a very kind and very skilled physical therapist style practitioner who truly gives an attentive, skilled, and considerate massage. Always professional and sweet.",
    rating: 5,
    source: "Google Review"
  },
  {
    id: "t2",
    quote: "Got a 90 minute massage and it was absolutely mind blowing. I was so satisfied and relaxed.",
    rating: 5,
    source: "Google Review"
  },
  {
    id: "t3",
    quote: "The massage was incredible! The staff is so kind and they treated me like royalty.",
    rating: 5,
    source: "Google Review"
  },
  {
    id: "t4",
    quote: "Great massage for the price - just $48 for 60 minutes. Highly recommend!",
    rating: 5,
    source: "Google Review"
  },
  {
    id: "t5",
    quote: "The greeting was very nice and the massage was awesome. Helped with all my pain.",
    rating: 5,
    source: "Google Review"
  },
  {
    id: "t6",
    quote: "Emmy's expertise in orthopedics is unmatched. My posture has improved significantly after just a few sessions.",
    rating: 5,
    source: "Google Review"
  }
]
