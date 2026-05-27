import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ExternalLink } from 'lucide-react'

const projects = [
  {
    title: 'NOVACORE',
    description: 'A technology venture focused on pioneering innovative solutions and digital transformation for businesses and creators.',
    tech: ['React', 'Node.js', 'Tailwind CSS', 'AI Integration'],
    image: 'novacore'
  },
  {
    title: 'Project New Flight',
    description: 'Revolutionary aviation technology project aimed at transforming air travel experiences through innovative design and engineering.',
    tech: ['Aerospace Engineering', 'UI/UX', 'IoT', 'Sustainability'],
    image: 'flight'
  },
  {
    title: 'Aurora Deep-Sea Vehicle',
    description: 'Advanced underwater exploration vehicle designed for deep-sea research and maritime innovation.',
    tech: ['Robotics', 'Marine Engineering', 'Sensor Tech', 'Autonomous Systems'],
    image: 'aurora'
  },
  {
    title: 'Flare Energy System',
    description: 'Sustainable energy solution integrating renewable sources with smart grid technology for efficient power distribution.',
    tech: ['Energy Tech', 'Smart Grid', 'IoT', 'React'],
    image: 'flare'
  },
  {
    title: 'Crystalline HDA Fuel System',
    description: 'Next-generation hydrogen fuel technology system for clean energy transportation solutions.',
    tech: ['Hydrogen Tech', 'Clean Energy', 'Innovation', 'Research'],
    image: 'crystalline'
  },
  {
    title: 'Crypto Tips Web App',
    description: 'A modern web application providing cryptocurrency education and real-time market insights with an intuitive interface.',
    tech: ['Web3', 'React', 'Blockchain', 'Real-time API'],
    image: 'crypto'
  }
]

const ProjectCard = ({ project, index, inView }: { project: typeof projects[0], index: number, inView: boolean }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="glass-dark rounded-2xl overflow-hidden card-hover group"
    >
      <div className="h-48 bg-gradient-to-br from-dark-700 to-dark-600 relative">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-6xl font-bold gradient-text opacity-20">
            {project.image === 'novacore' && 'N'}
            {project.image === 'flight' && '✈'}
            {project.image === 'aurora' && '🌊'}
            {project.image === 'flare' && '⚡'}
            {project.image === 'crystalline' && '💎'}
            {project.image === 'crypto' && '₿'}
          </div>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-2xl font-bold text-gold mb-3">{project.title}</h3>
        <p className="text-gray-300 mb-4">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((t) => (
            <span key={t} className="px-3 py-1 glass text-sm text-neon rounded-full">
              {t}
            </span>
          ))}
        </div>
        
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-2 px-4 py-2 glass text-gold rounded-full hover:bg-white/10 transition-all"
        >
          View Project <ExternalLink size={16} />
        </motion.button>
      </div>
    </motion.div>
  )
}

const Projects = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  return (
    <section id="projects" className="py-20 gradient-bg">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            Featured Projects
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Showcasing innovation across technology, design, and entrepreneurship
          </p>
        </motion.div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects