import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center gradient-bg relative overflow-hidden py-24">
      <div className="absolute inset-0 bg-grid" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="shell-panel glass rounded-[32px] p-6 md:p-10 grid lg:grid-cols-[1.05fr_0.95fr] gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left"
          >
            <p className="soft-chip inline-flex rounded-full px-4 py-2 text-xs uppercase tracking-[0.35em] text-cyan-100">Secure digital workspace</p>
            <h1 className="mt-6 text-5xl md:text-6xl font-black mb-4 gradient-text leading-tight">
              Adeyemi David Adeniyi
            </h1>

            <p className="text-xl md:text-2xl text-slate-300 mb-6">
              Computer Scientist | Tech Designer | Writer | Innovator
            </p>

            <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-white gold-glow">
              Building ideas beyond tomorrow
            </h2>

            <p className="text-lg text-slate-300 max-w-xl mb-8">
              I craft innovative digital solutions at the intersection of tech, design, and strategy.
              This space is designed with a refined, secure-access aesthetic for a premium portfolio experience.
            </p>

            <div className="flex flex-wrap gap-3 mb-8">
              <span className="soft-chip rounded-full px-4 py-2 text-sm">Futuristic UI</span>
              <span className="soft-chip rounded-full px-4 py-2 text-sm">Responsive design</span>
              <span className="soft-chip rounded-full px-4 py-2 text-sm">Creative systems</span>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#projects" className="primary-btn px-8 py-3 text-center">View Projects</a>
              <a href="#contact" className="ghost-btn px-8 py-3 text-center">Contact Me</a>
            </div>
          </motion.div>

          <motion.aside
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.25, duration: 0.8 }}
            className="glass-dark rounded-[28px] flex flex-col items-center justify-end p-6 border border-white/10 min-h-[340px]"
          >
            {/* Novacore logo placeholder (to be generated later) */}
            <div className="w-20 h-20 mb-4 rounded-full bg-gradient-to-br from-white via-purple-300 to-purple-600 flex items-center justify-center text-3xl font-bold text-black opacity-70">
              NC
            </div>
            <div className="upload-card overflow-hidden p-2 flex items-end justify-center w-full">
              <img
                src="/dav.jpg"
                alt="Adeyemi David Adeniyi"
                className="h-64 w-full rounded-[18px] object-cover mt-8 shadow-xl"
                style={{ objectPosition: 'center 30%' }}
              />
            </div>
          </motion.aside>
        </div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <ArrowDown className="text-gold" size={32} />
      </motion.div>

      <div className="absolute top-20 right-20 w-72 h-72 bg-gold rounded-full filter blur-3xl opacity-10 animate-float" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-cyan-400 rounded-full filter blur-3xl opacity-10 animate-float" />
    </section>
  )
}

export default Hero