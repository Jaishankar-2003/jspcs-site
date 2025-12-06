'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { Star, Quote } from 'lucide-react'
import { useEffect, useState } from 'react'

const testimonials = [
  {
    name: 'Rajesh Kumar',
    rating: 5,
    text: 'Excellent service! They fixed my laptop motherboard issue quickly and at a reasonable price. Highly recommended!',
    location: 'Chennai',
  },
  {
    name: 'Priya Sharma',
    rating: 5,
    text: 'Professional team with genuine parts. My PC is running like new after their repair service. Great experience!',
    location: 'Chennai',
  },
  {
    name: 'Vikram Singh',
    rating: 5,
    text: 'Best PC repair service in town. Fast turnaround, transparent pricing, and excellent customer support. 5 stars!',
    location: 'Chennai',
  },
  {
    name: 'Anita Reddy',
    rating: 5,
    text: 'They built a custom gaming PC for me. Amazing work, great price, and the system runs perfectly. Thank you!',
    location: 'Chennai',
  },
  {
    name: 'Suresh Menon',
    rating: 5,
    text: 'Recovered all my important data from a crashed hard drive. Professional service and very reliable. Highly satisfied!',
    location: 'Chennai',
  },
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="testimonials" className="relative py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            What Our <span className="text-gradient">Clients Say</span>
          </h2>
          <p className="text-lg text-primary-light/70 max-w-2xl mx-auto">
            Trusted by hundreds of satisfied customers
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="glass-strong rounded-3xl p-8 md:p-12 neon-border"
            >
              <Quote className="w-12 h-12 text-primary-cyan mb-6 opacity-50" />
              <p className="text-xl text-primary-light mb-6 leading-relaxed">
                "{testimonials[currentIndex].text}"
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-xl font-bold text-white mb-1">
                    {testimonials[currentIndex].name}
                  </h4>
                  <p className="text-primary-light/60">
                    {testimonials[currentIndex].location}
                  </p>
                </div>
                <div className="flex gap-1">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-6 h-6 fill-accent-yellow text-accent-yellow"
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-primary-cyan w-8'
                    : 'bg-primary-light/30 hover:bg-primary-light/50'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

