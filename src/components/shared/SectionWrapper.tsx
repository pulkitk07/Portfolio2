'use client'

import { motion } from 'framer-motion'
import { STAGGER_ANIMATION_VARIANTS } from '@/lib/constants'
import { cn } from '@/lib/utils'

interface SectionWrapperProps {
  children: React.ReactNode
  id?: string
  className?: string
  animate?: boolean
}

export default function SectionWrapper({ 
  children, 
  id, 
  className,
  animate = true 
}: SectionWrapperProps) {
  if (!animate) {
    return (
      <section id={id} className={cn("container", className)}>
        {children}
      </section>
    )
  }

  return (
    <motion.section
      id={id}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={STAGGER_ANIMATION_VARIANTS}
      className={cn("container py-24 sm:py-32", className)}
    >
      {children}
    </motion.section>
  )
} 