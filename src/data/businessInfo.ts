export interface BusinessInfo {
  name: string
  tagline: string
  phone: string
  address: string
  city: string
  state: string
  zip: string
  hours: string
  rating: number
  reviewCount: number
  googleMapsUrl: string
}

export const businessInfo: BusinessInfo = {
  name: "81 Massage Therapy Spa",
  tagline: "Therapeutic Massage Specialists",
  phone: "(323) 371-5126",
  address: "2415 Pasadena Ave E",
  city: "Los Angeles",
  state: "CA",
  zip: "90031",
  hours: "Monday - Sunday: 10:00 AM - 9:00 PM",
  rating: 4.8,
  reviewCount: 67,
  googleMapsUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3304.8162892847644!2d-118.20756!3d34.07826!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDA0JzQxLjgiTiAxMTjCsDEyJzI3LjIiVw!5e0!3m2!1sen!2sus!4v1234567890123"
}
