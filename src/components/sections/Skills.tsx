'use client'

import { motion } from 'framer-motion'
import { FADE_UP_ANIMATION_VARIANTS, FLOAT_ANIMATION } from '@/lib/constants'
import SectionWrapper from '../shared/SectionWrapper'
import SectionHeading from '../shared/SectionHeading'

const skillCategories = [
  {
    title: 'Product Management',
    skills: [
      'Agile',
      'Scrum',
      'Product Roadmaps',
      'Backlog Prioritization',
      'Stakeholder Management',
      'Requirement Gathering',
      'Release Planning',
      'User Story Writing',
      'Business Process Mapping',
      'Facilitation of Large Groups',
    ],
  },
  {
    title: 'Technical',
    skills: [
      'Financial Data Analysis (SQL, Pandas)',
      'Payment Processing Systems',
      'Python',
      'AWS',
      'REST APIs',
      'Machine Learning',
      'TensorFlow',
      'Keras',
      'Scikit-learn',
      'OpenCV',
    ],
  },
  {
    title: 'Tools',
    skills: [
      'Jira',
      'Confluence',
      'Postman',
      'Jenkins',
      'Git',
      'Tableau',
      'Financial model forecasting',
    ],
  },
  {
    title: 'Soft Skills',
    skills: [
      'Leadership',
      'Cross-Functional Collaboration',
      'Data-Driven Decision-Making',
    ],
  },
]

export default function Skills() {
  return (
    <SectionWrapper id="skills">
      <div className="space-y-8">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={FADE_UP_ANIMATION_VARIANTS}
        >
          <SectionHeading>Skills</SectionHeading>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={FADE_UP_ANIMATION_VARIANTS}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="space-y-4 p-6 rounded-xl bg-gray-50 dark:bg-gray-900/50 backdrop-blur-sm border border-gray-200 dark:border-gray-800"
            >
              <motion.h3 
                className="text-xl font-semibold text-primary"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                {category.title}
              </motion.h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skillIndex}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * skillIndex }}
                    whileHover={{ 
                      scale: 1.1,
                      backgroundColor: "rgba(var(--color-primary), 0.2)",
                    }}
                    className="px-3 py-1 bg-primary/10 dark:bg-primary/20 rounded-full text-sm cursor-default transition-colors hover:text-primary"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
} 