import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Download } from 'lucide-react'

const Resume = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  return (
    <section id="resume" className="py-20 gradient-bg">
      <div className="container mx-auto px-6 text-center">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            Resume & CV
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-8">
            Download my complete CV to learn more about my experience and qualifications
          </p>
          
          <motion.a
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(212, 175, 55, 0.5)' }}
            whileTap={{ scale: 0.95 }}
            href="/cv.pdf"
            download
            className="inline-flex items-center gap-3 px-8 py-4 bg-gold text-black font-semibold rounded-full hover:bg-yellow-600 transition-all"
          >
            <Download size={20} />
            Download CV
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default Resume