import { motion } from 'framer-motion'

const Footer = () => {
  return (
    <footer className="py-12 gradient-bg">
      <div className="container mx-auto px-6">
        <div className="glass-dark rounded-2xl p-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-3xl font-bold gradient-text mb-4">
              NOVACORE
            </p>
            
            <blockquote className="text-xl italic text-gray-400 mb-8 max-w-2xl mx-auto">
              "Innovation distinguishes between a leader and a follower. 
              At NOVACORE, we don't just follow trends – we create them."
            </blockquote>
            
            <div className="border-t border-gray-700 pt-6">
              <p className="text-gray-500">
                © 2024 Adeyemi David Adeniyi. All rights reserved.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}

export default Footer