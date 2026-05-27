import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Briefcase, Calendar } from 'lucide-react'

const experiences = [
  {
    year: '2020 - 2024',
    title: 'Senior Technology Consultant',
    description: 'Led digital transformation initiatives for startups and established companies, delivering innovative solutions that increased efficiency by 40%.'
  },
  {
    year: '2019 - 2020',
    title: 'Founder & CEO',
    description: 'Established NOVACORE, focusing on cutting-edge technology solutions and creative innovation in the Nigerian tech ecosystem.'
  },
  {
    year: '2018 - 2019',
    title: 'Lead UI/UX Designer',
    description: 'Designed user-centered interfaces for fintech and e-commerce platforms, improving user engagement by 65%.'
  },
  {
    year: '2017 - 2018',
    title: 'Full Stack Developer',
    description: 'Developed scalable web applications using modern frameworks, contributing to products used by thousands of users daily.'
  }
]

const Experience = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  return (
    <section id="experience" className="py-20 gradient-bg">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            Experience
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Over 4 years of delivering exceptional tech solutions
          </p>
        </motion.div>

        <div ref={ref} className="max-w-4xl mx-auto relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gold/30" />
          
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`flex items-start gap-6 mb-8 ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-gold rounded-full transform -translate-x-1/2" />
              
              <div className={`glass-dark p-6 rounded-2xl flex-1 ml-12 md:ml-0 ${
                index % 2 === 0 ? 'md:mr-12' : 'md:ml-12'
              }`}>
                <div className="flex items-center gap-2 mb-2">
                  <Calendar className="text-neon" size={18} />
                  <span className="text-gold font-medium">{exp.year}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-100 mb-2">{exp.title}</h3>
                <p className="text-gray-300">{exp.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience