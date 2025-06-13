'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { 
  FADE_UP_ANIMATION_VARIANTS,
  FLOAT_ANIMATION
} from '@/lib/constants'
import SectionWrapper from '../shared/SectionWrapper'
import SectionHeading from '../shared/SectionHeading'

const reviews = [
  {
    name: 'Spikey Dee',
    role: 'CEO & Founder',
    company: 'Fluffr',
    image: '/Spikey.jpeg',
    quote: '"Working with Pulkit was an absolute game-changer for Fluffr. As our freelance Software Project Manager, he brought structure, clarity, and momentum to the entire development process. From planning to execution, Pulkit ensured every milestone was hit on time—without compromising quality. His ability to lead a cross-functional team and keep everyone aligned made a huge difference. We couldn\'t have built Fluffr without him."'
  }
]

export default function Reviews() {
  return (
    <SectionWrapper id="reviews">
      <div className="space-y-12">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={FADE_UP_ANIMATION_VARIANTS}
        >
          <SectionHeading>Customer Reviews</SectionHeading>
        </motion.div>

        <div className="grid grid-cols-1 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              variants={FADE_UP_ANIMATION_VARIANTS}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="relative overflow-hidden rounded-2xl bg-gray-900/50 backdrop-blur-sm border border-gray-800 p-8"
            >
              <div className="flex flex-col md:flex-row gap-8 items-start">
                {/* Reviewer Image */}
                <motion.div 
                  className="relative w-32 h-32 rounded-full overflow-hidden flex-shrink-0 bg-gray-800"
                  {...FLOAT_ANIMATION}
                >
                  <img
                    src={review.image}
                    alt={review.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      console.error('Error loading image:', e);
                      const target = e.target as HTMLImageElement;
                      target.src = '/profile.jpg'; // Fallback image
                    }}
                  />
                </motion.div>

                {/* Review Content */}
                <div className="flex-1 space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                      {review.name}
                    </h3>
                    <p className="text-gray-400">
                      {review.role} at {review.company}
                    </p>
                  </div>
                  
                  <blockquote className="text-gray-300 text-lg leading-relaxed italic">
                    {review.quote}
                  </blockquote>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
} 