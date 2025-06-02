'use client'

import { motion } from 'framer-motion'
import { FADE_UP_ANIMATION_VARIANTS } from '@/lib/constants'

interface SectionHeadingProps {
  children: React.ReactNode
}

export default function SectionHeading({ children }: SectionHeadingProps) {
  return (
    <motion.h2
      variants={FADE_UP_ANIMATION_VARIANTS}
      className="text-3xl md:text-4xl font-bold"
    >
      {children}
    </motion.h2>
  )
} 