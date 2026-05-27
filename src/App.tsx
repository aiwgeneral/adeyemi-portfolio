import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { ArrowDown, Brain, Calendar, CodeXml, Download, ExternalLink, Github, Headphones, Lightbulb, Linkedin, Mail, MapPin, Moon, Palette, PanelsTopLeft, PenTool, Phone, Quote, Send, Sun, Target, Users } from 'lucide-react'

export default function App() {
  const [isDark, setIsDark] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setIsDark(true)
    }
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [isDark])

  const navItems = ["Home", "About", "Skills", "Projects", "Experience", "Testimonials", "Contact"]

  return (
    <div className="min-h-screen bg-dark-900 text-gray-200">
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? "glass-dark py-2" : "py-4"}`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          <motion.div whileHover={{ scale: 1.05 }} className="text-2xl font-bold gradient-text">
            ADA
          </motion.div>
          <div className="hidden md:flex space-x-8">
            {navItems.map(item => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                whileHover={{ scale: 1.1 }}
                className="text-gray-300 hover:text-gold transition-colors capitalize"
              >
                {item}
              </motion.a>
            ))}
          </div>
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsDark(!isDark)}
            className="p-2 rounded-full glass text-gold"
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </motion.button>
        </div>
      </motion.nav>

      <section id="home" className="min-h-screen flex items-center justify-center gradient-bg relative overflow-hidden py-24">
        <div className="absolute inset-0 bg-grid"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="shell-panel glass rounded-[32px] p-6 md:p-10 grid lg:grid-cols-[1.05fr_0.95fr] gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-left"
            >
              <p className="text-gold text-sm font-mono mb-4">Computer Scientist | Tech Designer | Writer</p>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Adeyemi David <span className="gradient-text">Adeniyi</span>
              </h1>
              <p className="text-gray-400 mb-8 max-w-lg">
                Founder of NOVACORE. Building Ideas Beyond Tomorrow through technology and innovation.
              </p>
              <div className="flex flex-wrap gap-4">
                <motion.a
                  href="#projects"
                  whileHover={{ scale: 1.05 }}
                  className="px-6 py-3 bg-gold text-dark-900 rounded-lg font-medium"
                >
                  View Projects
                </motion.a>
                <motion.a
                  href="/resume.pdf"
                  download
                  whileHover={{ scale: 1.05 }}
                  className="px-6 py-3 glass rounded-lg font-medium flex items-center gap-2"
                >
                  <Download size={18} /> Resume
                </motion.a>
              </div>
            </motion.div>
            <div className="relative">
              <div className="animate-float">
                <img
                  src="/dav.jpg"
                  alt="Adeyemi David"
                  className="rounded-2xl w-full max-w-sm mx-auto glass p-2"
                />
              </div>
            </div>
          </div>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="mt-12 flex justify-center"
          >
            <ArrowDown className="text-gold" size={32} />
          </motion.div>
        </div>
      </section>

      <section id="about" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gray-400 mb-4">
                I'm a Computer Scientist with a passion for creating innovative solutions and beautiful experiences.
              </p>
              <p className="text-gray-400">
                As the founder of NOVACORE, I focus on building technologies that push boundaries and create real impact.
              </p>
            </div>
            <div className="glass p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-4 text-gold">Quick Facts</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center gap-2"><MapPin size={16} /> Based in Nigeria</li>
                <li className="flex items-center gap-2"><Calendar size={16} /> Available for work</li>
                <li className="flex items-center gap-2"><Headphones size={16} /> Music enthusiast</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="py-20 gradient-bg">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            My <span className="gradient-text">Skills</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {['React', 'TypeScript', 'Node.js', 'Design', 'Writing', 'Innovation'].map(skill => (
              <motion.div
                key={skill}
                whileHover={{ scale: 1.05 }}
                className="glass p-6 rounded-xl text-center"
              >
                <CodeXml className="mx-auto mb-4 text-gold" size={40} />
                <h3 className="font-bold">{skill}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {['Project 1', 'Project 2', 'Project 3'].map((project, i) => (
              <motion.div
                key={project}
                whileHover={{ y: -10 }}
                className="glass rounded-xl overflow-hidden"
              >
                <div className="h-48 bg-gradient-to-br from-gold/20 to-neon/20"></div>
                <div className="p-6">
                  <h3 className="font-bold text-lg mb-2">{project}</h3>
                  <p className="text-gray-400 text-sm mb-4">
                    A brief description of this project and its impact.
                  </p>
                  <motion.a
                    href="#"
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-2 text-gold"
                  >
                    View Project <ExternalLink size={16} />
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="experience" className="py-20 gradient-bg">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gold/30"></div>
            {['NOVACORE - Founder', 'Previous Role'].map((exp, i) => (
              <motion.div
                key={exp}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="relative pl-12 pb-8"
              >
                <div className="absolute left-0 w-8 h-8 bg-gold rounded-full"></div>
                <h3 className="font-bold text-lg">{exp}</h3>
                <p className="text-gray-400">Building the future through technology</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="testimonials" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Client <span className="gradient-text">Testimonials</span>
          </h2>
          <div className="max-w-3xl mx-auto">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="glass p-8 rounded-xl relative"
            >
              <Quote className="absolute -top-4 -left-4 text-gold/30" size={40} />
              <p className="text-lg italic mb-4">
                "Working with Adeyemi was transformative. His vision and technical expertise brought our ideas to life."
              </p>
              <p className="font-bold">- Client Name</p>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 gradient-bg">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <div className="max-w-xl mx-auto glass p-8 rounded-xl">
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 glass rounded-lg outline-none focus:ring-2 focus:ring-gold"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 glass rounded-lg outline-none focus:ring-2 focus:ring-gold"
              />
              <textarea
                placeholder="Your Message"
                rows={4}
                className="w-full p-3 glass rounded-lg outline-none focus:ring-2 focus:ring-gold"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="w-full py-3 bg-gold text-dark-900 rounded-lg font-medium flex items-center justify-center gap-2"
              >
                Send Message <Send size={18} />
              </motion.button>
            </form>
            <div className="mt-6 flex justify-center gap-4">
              <motion.a whileHover={{ scale: 1.2 }} href="#" className="text-gold"><Github size={24} /></motion.a>
              <motion.a whileHover={{ scale: 1.2 }} href="#" className="text-gold"><Linkedin size={24} /></motion.a>
              <motion.a whileHover={{ scale: 1.2 }} href="mailto:" className="text-gold"><Mail size={24} /></motion.a>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-8 text-center border-t border-white/10">
        <p className="text-gray-400">
          © {new Date().getFullYear()} Adeyemi David Adeniyi. All rights reserved.
        </p>
      </footer>
    </div>
  )
}