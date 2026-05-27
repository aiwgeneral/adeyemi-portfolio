import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'CTO, TechStart Inc.',
    content: 'Adeyemi\'s innovative approach to problem-solving and exceptional design skills have transformed our product. His work on the UI/UX redesign increased our user engagement by over 60%.',
    avatar: 'SJ'
  },
  {
    name: 'Michael Chen',
    role: 'Founder, DigitalBridge',
    content: 'Working with Adeyemi on NOVACORE was an incredible experience. His technical expertise combined with creative vision delivers results that exceed expectations every time.',
    avatar: 'MC'
  },
  {
    name: 'Amaka Okafor',
    role: 'Product Manager, FinTech Africa',
    content: 'A rare combination of technical brilliance and artistic creativity. Adeyemi brings fresh perspectives to every challenge and delivers solutions that are both elegant and powerful.',
    avatar: 'AO'
  }
]

const Testimonials = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  return (
    <section id="testimonials" className="py-20 gradient-bg">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            Testimonials
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            What colleagues and clients say about working with me
          </p>
        </motion.div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-dark p-8 rounded-2xl card-hover relative"
            >
              <Quote className="text-gold/30 absolute top-6 right-6" size={48} />
              <p className="text-gray-300 mb-6 leading-relaxed relative z-10">
                "{testimonial.content}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 glass rounded-full flex items-center justify-center font-bold text-gold">
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="text-gray-100 font-semibold">{testimonial.name}</h4>
                  <p className="text-gray-400 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials