'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { FADE_DOWN_ANIMATION_VARIANTS, FADE_UP_ANIMATION_VARIANTS } from '@/lib/constants'
import SectionWrapper from '../shared/SectionWrapper'

const imageAnimation = {
  initial: { scale: 0.8, opacity: 0, rotate: -5 },
  animate: { 
    scale: 1, 
    opacity: 1,
    rotate: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
      delay: 0.1,
    }
  }
}

const floatingAnimation = {
  animate: {
    y: [0, -10, 0],
    rotate: [-1, 1, -1],
    transition: {
      duration: 5,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut"
    }
  }
}

const glowAnimation = {
  animate: {
    opacity: [0.3, 0.6, 0.3],
    scale: [1, 1.05, 1],
    rotate: [0, 5, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut"
    }
  }
}

const shimmerAnimation = {
  animate: {
    background: [
      "linear-gradient(45deg, rgba(var(--color-primary), 0.2) 0%, rgba(var(--color-primary), 0.1) 50%, rgba(var(--color-primary), 0.2) 100%)",
      "linear-gradient(45deg, rgba(var(--color-primary), 0.1) 0%, rgba(var(--color-primary), 0.2) 50%, rgba(var(--color-primary), 0.1) 100%)",
    ],
    transition: {
      duration: 3,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut"
    }
  }
}

export default function Hero() {
  return (
    <SectionWrapper className="pt-32 pb-16" animate={false}>
      <div className="flex flex-col lg:flex-row items-center gap-12">
        <motion.div 
          initial="hidden"
          animate="show"
          viewport={{ once: true }}
          className="flex-1 space-y-8"
        >
          <div className="space-y-4">
            <motion.div
              variants={FADE_DOWN_ANIMATION_VARIANTS}
              className="flex items-center gap-2"
            >
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10">
                <span className="text-sm">📍</span>
              </div>
              <span className="text-sm font-medium">Dayton, Ohio 🇺🇸</span>
            </motion.div>
            
            <motion.h1 
              variants={FADE_UP_ANIMATION_VARIANTS}
              className="text-4xl sm:text-5xl md:text-6xl font-bold"
            >
              Hi there, <br />
              I&apos;m{" "}
              <span className="text-primary">
                Pulkit Khursija
              </span>
            </motion.h1>
          </div>

          <motion.p 
            variants={FADE_UP_ANIMATION_VARIANTS}
            className="text-lg text-secondary dark:text-secondary-dark max-w-2xl"
          >
            A well-accomplished Strategic Project Manager with direct working experience in IOT and AI Products. 
            Self-motivated and results-oriented individual with a strong go-to-market experience and sound business acumen.
          </motion.p>

          <motion.div 
            variants={FADE_UP_ANIMATION_VARIANTS}
            className="flex flex-wrap gap-4"
          >
            <motion.a
              href="/PK1a.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Download Resume
            </motion.a>
            <motion.a
              href="#contact"
              className="border border-primary text-primary px-6 py-3 rounded-lg hover:bg-primary/10 transition"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Me
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div 
          variants={imageAnimation}
          initial="initial"
          animate="animate"
          className="flex-1 relative"
        >
          <motion.div 
            variants={floatingAnimation}
            animate="animate"
            whileHover={{ 
              scale: 1.05, 
              rotate: [0, -2, 2, 0],
              transition: { duration: 0.3 }
            }}
            className="relative w-[280px] sm:w-[320px] md:w-[400px] aspect-[4/5] mx-auto group"
          >
            {/* Animated background effects */}
            <motion.div
              className="absolute -inset-4 rounded-2xl opacity-75 blur-2xl"
              animate={{
                background: [
                  "radial-gradient(circle at 50% 50%, rgba(var(--color-primary), 0.3) 0%, transparent 70%)",
                  "radial-gradient(circle at 50% 50%, rgba(var(--color-primary), 0.15) 0%, transparent 70%)",
                ],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
            />

            {/* Gradient overlay */}
            <motion.div
              className="absolute inset-0 rounded-2xl overflow-hidden"
              variants={shimmerAnimation}
              animate="animate"
            >
              <motion.div
                variants={glowAnimation}
                animate="animate"
                className="w-full h-full rounded-2xl bg-gradient-to-br from-primary/20 via-primary/10 to-transparent"
              />
            </motion.div>

            {/* Image container with hover effect */}
            <motion.div
              className="relative w-full h-full rounded-2xl overflow-hidden"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <Image
                src="/profile.jpg"
                alt="Pulkit Khursija"
                fill
                className="object-cover object-top rounded-2xl transition-transform duration-300 group-hover:scale-105"
                priority
                sizes="(max-width: 640px) 280px, (max-width: 768px) 320px, 400px"
              />

              {/* Shine effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-tr from-transparent via-white to-transparent opacity-0 group-hover:opacity-10"
                animate={{
                  translateX: ["100%", "-100%"],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatDelay: 0.5,
                  ease: "easeInOut",
                }}
              />
            </motion.div>

            {/* Corner decorations */}
            <div className="absolute -top-2 -left-2 w-4 h-4 border-t-2 border-l-2 border-primary/30 rounded-tl-lg" />
            <div className="absolute -top-2 -right-2 w-4 h-4 border-t-2 border-r-2 border-primary/30 rounded-tr-lg" />
            <div className="absolute -bottom-2 -left-2 w-4 h-4 border-b-2 border-l-2 border-primary/30 rounded-bl-lg" />
            <div className="absolute -bottom-2 -right-2 w-4 h-4 border-b-2 border-r-2 border-primary/30 rounded-br-lg" />
          </motion.div>
        </motion.div>
      </div>
    </SectionWrapper>
  )
} 