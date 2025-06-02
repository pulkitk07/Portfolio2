'use client'

import { motion } from 'framer-motion'
import { FADE_UP_ANIMATION_VARIANTS, FLOAT_ANIMATION } from '@/lib/constants'
import SectionWrapper from '../shared/SectionWrapper'
import SectionHeading from '../shared/SectionHeading'

const education = [
  {
    degree: "Master's in Computer Science",
    university: 'Wright State University',
    location: '🇺🇲',
    year: '2021 - 2022',
    major: 'Computer Science',
  },
  {
    degree: "Bachelor's in Computer Science",
    university: 'A.P.J. Abdul Kalam Technical University',
    location: '🇮🇳',
    year: '2015 - 2019',
    major: 'Computer Science',
  },
]

export default function Education() {
  return (
    <SectionWrapper id="education">
      <div className="space-y-8">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={FADE_UP_ANIMATION_VARIANTS}
        >
          <SectionHeading>Education</SectionHeading>
        </motion.div>
        <div className="space-y-12">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={FADE_UP_ANIMATION_VARIANTS}
              className="flex flex-col md:flex-row gap-4 md:gap-8"
            >
              <motion.div 
                className="w-32 flex-shrink-0 text-secondary dark:text-secondary-dark font-medium"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                {edu.year}
              </motion.div>
              <motion.div 
                className="flex-grow"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                whileHover={{ x: 10 }}
              >
                <h3 className="text-xl font-semibold flex items-center gap-2">
                  {edu.degree}
                  <motion.span 
                    className="text-base"
                    {...FLOAT_ANIMATION}
                  >
                    {edu.location}
                  </motion.span>
                </h3>
                <motion.p 
                  className="text-primary mt-1"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                >
                  {edu.university}
                </motion.p>
                <motion.p 
                  className="text-secondary dark:text-secondary-dark mt-1"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 }}
                >
                  Major: {edu.major}
                </motion.p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
} 