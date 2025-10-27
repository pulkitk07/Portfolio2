'use client'

import { motion } from 'framer-motion'
import { FADE_UP_ANIMATION_VARIANTS, FLOAT_ANIMATION } from '@/lib/constants'
import SectionWrapper from '../shared/SectionWrapper'
import SectionHeading from '../shared/SectionHeading'

const experiences = [
  {
    title: 'Software Product Manager',
    company: 'Tungsten Automation',
    location: '🇺🇲',
    duration: 'Aug 2023 - Present',
  },
  {
    title: 'Solutions Engineer/ Product Owner',
    company: 'Codeboxx',
    location: '🇺🇲',
    duration: 'May 2023 - Jul 2023',
  },
  {
    title: 'Product Owner',
    company: 'Denken Solutions',
    location: '🇺🇲',
    duration: 'Jan 2023 - Apr 2023',
  },
  {
    title: 'Software Engineer',
    company: 'Imagery',
    location: '🇺🇲',
    duration: 'Jan 2022 - Aug 2022',
  },
  {
    title: 'Graduate Research and Teaching Assistant',
    company: 'Wright State University',
    location: '🇺🇲',
    duration: 'Feb 2021 - Dec 2021',
  },
  {
    title: 'Assistant Systems Engineer',
    company: 'Tata Consultancy Services',
    location: '🇮🇳',
    duration: 'Jul 2019 - Feb 2021',
  },
  {
    title: 'Software Engineer Intern',
    company: 'Center for Development of Advanced Computing',
    location: '🇮🇳',
    duration: 'Jan 2018 - Aug 2018',
  },
]

export default function Experience() {
  return (
    <SectionWrapper id="experience">
      <div className="space-y-8">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={FADE_UP_ANIMATION_VARIANTS}
        >
          <SectionHeading>Experience</SectionHeading>
        </motion.div>
        <div className="space-y-12">
          {experiences.map((experience, index) => (
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
                {experience.duration}
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
                  {experience.title}
                  <motion.span 
                    className="text-base"
                    {...FLOAT_ANIMATION}
                  >
                    {experience.location}
                  </motion.span>
                </h3>
                <p className="text-primary mt-1">{experience.company}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
} 
