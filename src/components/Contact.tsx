import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from 'lucide-react'

const Contact = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log(formData)
  }

  return (
    <section id="contact" className="py-20 gradient-bg">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            Get In Touch
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Let's collaborate and build something amazing together
          </p>
        </motion.div>

        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="glass-dark p-8 rounded-2xl h-full">
              <h3 className="text-2xl font-bold text-gold mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 glass rounded-full flex items-center justify-center">
                    <Mail className="text-gold" size={24} />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Email</p>
                    <a href="mailto:generaldavilardo@gmail.com" className="text-gray-200 hover:text-gold transition-colors">
                      generaldavilardo@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 glass rounded-full flex items-center justify-center">
                    <Phone className="text-gold" size={24} />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Phone</p>
                    <a href="tel:+2348166413040" className="text-gray-200 hover:text-gold transition-colors">
                      08166413040
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 glass rounded-full flex items-center justify-center">
                    <MapPin className="text-gold" size={24} />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Location</p>
                    <p className="text-gray-200">Nigeria</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="text-gray-200 font-semibold mb-4">Follow Me</h4>
                <div className="flex gap-4">
                  <a href="#" className="w-12 h-12 glass rounded-full flex items-center justify-center hover:text-gold transition-colors">
                    <Github size={24} />
                  </a>
                  <a href="#" className="w-12 h-12 glass rounded-full flex items-center justify-center hover:text-gold transition-colors">
                    <Linkedin size={24} />
                  </a>
                  <a href="#" className="w-12 h-12 glass rounded-full flex items-center justify-center hover:text-gold transition-colors">
                    <Twitter size={24} />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <form onSubmit={handleSubmit} className="glass-dark p-8 rounded-2xl">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-gray-400 text-sm mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 glass rounded-lg bg-transparent text-gray-200 focus:outline-none focus:border-gold"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-400 text-sm mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 glass rounded-lg bg-transparent text-gray-200 focus:outline-none focus:border-gold"
                    required
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label className="block text-gray-400 text-sm mb-2">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 glass rounded-lg bg-transparent text-gray-200 focus:outline-none focus:border-gold"
                  required
                />
              </div>
              
              <div className="mb-6">
                <label className="block text-gray-400 text-sm mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 glass rounded-lg bg-transparent text-gray-200 focus:outline-none focus:border-gold resize-none"
                  required
                />
              </div>
              
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gold text-black font-semibold rounded-full hover:bg-yellow-600 transition-all"
              >
                Send Message <Send size={20} />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact