import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Code2, Palette, Layout, Brain, PenTool, Users, Headphones, Target, Lightbulb } from 'lucide-react'

const skills = [
  { name: 'Web Development', level: 95, icon: Code2 },
  { name: 'Graphic Design', level: 90, icon: Palette },
  { name: 'UI/UX Design', level: 88, icon: Layout },
  { name: 'Problem Solving', level: 92, icon: Brain },
  { name: 'Content Writing', level: 85, icon: PenTool },
  { name: 'Leadership', level: 87, icon: Users },
  { name: 'Technical Support', level: 90, icon: Headphones },
  { name: 'Digital Strategy', level: 82, icon: Target },
  { name: 'Creative Innovation', level: 94, icon: Lightbulb }
]

const SkillCard = ({ skill, index, inView }: { skill: { name: string, level: number, icon: React.ElementType }, index: number, inView: boolean }) => {
  const Icon = skill.icon
  const circumference = 2 * Math.PI * 45
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5, boxShadow: '0 20px 40px rgba(212, 175, 55, 0.2)' }}
      className="glass-dark p-6 rounded-2xl text-center"
    >
      <div className="relative w-24 h-24 mx-auto mb-4">
        <svg className="w-full h-full" viewBox="0 0 100 100">
          <circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke="#2a2a3a"
            strokeWidth="8"
          />
          <motion.circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke={`url(#gradient-${index})`}
            strokeWidth="8"
            strokeLinecap="round"
            initial={{ strokeDasharray: 0, strokeDashoffset: 0 }}
            animate={inView ? { strokeDasharray: circumference, strokeDashoffset: circumference - (skill.level / 100) * circumference } : {}}
            transition={{ duration: 1, ease: 'easeOut' }}
          />
          <defs>
            <linearGradient id={`gradient-${index}`}>
              <stop offset="0%" stopColor="#d4af37" />
              <stop offset="100%" stopColor="#00d4ff" />
            </linearGradient>
          </defs>
        </svg>
        <span className="absolute inset-0 flex items-center justify-center text-2xl font-bold text-gold">
          {skill.level}%
        </span>
      </div>
      <Icon className="w-8 h-8 mx-auto mb-3 text-neon" />
      <h3 className="text-lg font-semibold text-gray-200">{skill.name}</h3>
    </motion.div>
  )
}

const Skills = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  return (
    <section id="skills" className="py-20 gradient-bg">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4 text-center">
            Skills & Expertise
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-center mb-12">
            A comprehensive blend of technical expertise and creative innovation
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <SkillCard key={skill.name} skill={skill} index={index} inView={inView} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills