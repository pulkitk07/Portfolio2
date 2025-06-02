'use client'

import { motion } from 'framer-motion'
import { FADE_UP_ANIMATION_VARIANTS } from '@/lib/constants'
import SectionWrapper from '../shared/SectionWrapper'
import SectionHeading from '../shared/SectionHeading'

export default function About() {
  return (
    <SectionWrapper id="about">
      <div className="space-y-8">
        <SectionHeading>About Me</SectionHeading>
        <motion.div
          variants={FADE_UP_ANIMATION_VARIANTS}
          className="space-y-4 text-lg text-secondary dark:text-secondary-dark"
        >
          <p>
            I am a Project Manager with over 4 years of management experience, currently based in Dayton, Ohio. 
            Throughout my career, I have developed excellent management and leadership skills, coupled with strong 
            problem-solving abilities, effective communication, and exceptional organizational and interpersonal skills.
          </p>
          <p>
            I thrive in technically complex environments, capable of delivering results under aggressive timeframes 
            and high-pressure circumstances. My adaptability allows me to quickly grasp new technologies and methodologies, 
            while my proven track record in product and project management demonstrates my ability to drive successful outcomes.
          </p>
          <p>
            What sets me apart is my unique combination of technical expertise and management acumen. I specialize in 
            bridging the gap between technical teams and business stakeholders, ensuring project goals align with 
            organizational objectives while maintaining technical excellence.
          </p>
        </motion.div>
      </div>
    </SectionWrapper>
  )
} 