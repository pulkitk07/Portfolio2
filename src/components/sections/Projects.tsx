'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { 
  FADE_UP_ANIMATION_VARIANTS, 
  FLOAT_ANIMATION,
  PULSE_ANIMATION,
  BOUNCE_ANIMATION 
} from '@/lib/constants'
import SectionWrapper from '../shared/SectionWrapper'
import SectionHeading from '../shared/SectionHeading'

const projects = [
  {
    title: 'Fluffr Colab – Creator Collaboration Platform',
    abstract: `Bootstrapped and launched a networking platform for content creators across YouTube, TikTok, OnlyFans, Instagram, Twitch, and more. The app allows users to connect, filter by niche, location, and follower count, and explore potential collaborations. Designed to simplify creator discovery and foster meaningful partnerships within the digital creator community.`,
    link: '#',
    year: '2025 (Current)',
    platform: 'Web & Mobile Platform',
    techStack: [
      'Next.js',
      'React',
      'Flutter',
      'Social Networking',
      'Creator Economy',
      'User Discovery',
      'Agile Project Management',
      'Product Roadmapping',
      'Sprint Planning'
    ],
    image: '/projects/creator-platform.svg'
  },
  {
    title: 'Golf Course Ball Tracking & Hole Management App',
    abstract: `Bootstrapped and developed a mobile application that tracks golf ball positions using GPS and real-time mapping for efficient hole management. Enabled course admins to monitor player progress, manage tee times, and optimize course flow. Built with a focus on usability, performance, and minimal infrastructure.`,
    link: '#',
    year: '2024',
    platform: 'Mobile App',
    techStack: [
      'Flutter',
      'React Native',
      'GPS Tracking',
      'Real-time Mapping',
      'Course Management',
      'Mobile Development',
      'Scrum Management',
      'User Story Mapping',
      'Release Planning'
    ],
    image: '/projects/golf-app.svg'
  },
  {
    title: 'Smart Shoes for Assisting People: A Short Survey',
    abstract: `Lately smart shoes have also become a kind of a fashion for the general public and athletes. However, leggs and feet diseases are more common problems among elderly people as time progresses and to those with certain feet disabilities [1], so smart shoes may offer some comfort to their situation. In particular people with osteoarthritis suffer for movement of the cartilage in a joint wears away over time causing bones to rub against each other [2]. In addition, arthritis is the leading cause of disability for the elderly in the United States of America [2]. Thus, a cause of osteoarthritis is mainly from poor gait, otherwise known as walking patterns, where there is unevenly distributed pressure across the foot while walking. This leads to development of severe pain in the knees over time which progressively gets worse. The uneven wear and tear to the knee cartilage is the specific cause of Osteoarthritis. According to the Centers for Disease Control and Prevention (CDC), more than 50 million adults have been diagnosed with Arthritis, i.e., approximately 1 in 5 adults. The CDC also predicts that by 2040, more than 78 million people will be diagnosed with Arthritis.`,
    link: 'https://www.researchgate.net/publication/356689760_Smart_Shoes_for_Assisting_People_A_Short_Survey',
    year: '2021',
    platform: 'ResearchGate',
    techStack: ['Research', 'Healthcare Technology', 'Literature Review']
  }
]

export default function Projects() {
  return (
    <SectionWrapper id="projects">
      <div className="space-y-12">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={FADE_UP_ANIMATION_VARIANTS}
        >
          <SectionHeading>Projects</SectionHeading>
        </motion.div>
        <div className="grid grid-cols-1 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={FADE_UP_ANIMATION_VARIANTS}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="relative overflow-hidden rounded-2xl bg-gray-900/50 backdrop-blur-sm border border-gray-800 transition-colors hover:bg-gray-900/60"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Left side - Project Image/Abstract */}
                <div className="p-6 bg-gray-900/80 border-r border-gray-800">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <motion.svg 
                        {...PULSE_ANIMATION}
                        className="w-6 h-6 text-primary" 
                        fill="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path d="M12.5 2h-9c-.8 0-1.5.7-1.5 1.5v17c0 .8.7 1.5 1.5 1.5h17c.8 0 1.5-.7 1.5-1.5v-9zm3.5 9.5c0 .3-.2.5-.5.5h-2v2c0 .3-.2.5-.5.5h-1c-.3 0-.5-.2-.5-.5v-2h-2c-.3 0-.5-.2-.5-.5v-1c0-.3.2-.5.5-.5h2v-2c0-.3.2-.5.5-.5h1c.3 0 .5.2.5.5v2h2c.3 0 .5.2.5.5z"/>
                      </motion.svg>
                      <span className="text-sm font-medium text-gray-400">{project.platform}</span>
                    </div>
                    <motion.a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-primary/80 transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </motion.a>
                  </div>
                  {project.image ? (
                    <motion.div 
                      className="relative w-full aspect-video mb-4 rounded-lg overflow-hidden"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 }}
                    >
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover"
                      />
                    </motion.div>
                  ) : null}
                  <motion.div 
                    className="prose prose-sm prose-invert max-w-none"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                  >
                    <div className="bg-black/30 rounded-lg p-4 text-gray-300 text-sm leading-relaxed font-mono">
                      {project.abstract}
                    </div>
                  </motion.div>
                </div>

                {/* Right side - Project Info */}
                <div className="p-6">
                  <div className="space-y-6">
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 }}
                    >
                      <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                        {project.title}
                      </h3>
                      <div className="flex items-center gap-2 mt-2 text-gray-400">
                        <span>{project.year}</span>
                        <span>•</span>
                        <span>{project.platform}</span>
                      </div>
                    </motion.div>

                    <motion.div 
                      className="space-y-4"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 }}
                    >
                      <div className="flex flex-wrap gap-2">
                        {project.techStack.map((tech, techIndex) => (
                          <motion.span
                            key={techIndex}
                            className="px-3 py-1 text-sm rounded-full bg-primary/10 text-primary border border-primary/20"
                            whileHover={{ scale: 1.05, backgroundColor: "rgba(var(--color-primary), 0.2)" }}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 * techIndex }}
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </motion.div>

                    <motion.a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
                      {...BOUNCE_ANIMATION}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span>View Project</span>
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
} 