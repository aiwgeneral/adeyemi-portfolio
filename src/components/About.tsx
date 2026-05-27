import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const About = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  return (
    <section id="about" className="py-20 gradient-bg">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 gradient-text">
            About Me
          </h2>
          
          <div className="glass-dark p-8 md:p-12 rounded-3xl card-hover">
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              As a passionate Computer Scientist with over 4 years of experience in tech and digital solutions, 
              I've dedicated my career to bridging the gap between cutting-edge technology and human-centered design. 
              My journey began with a fascination for how code can transform ideas into reality, leading me to 
              specialize in creating solutions that are not just functional, but truly transformative.
            </p>
            
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              My expertise spans across web development, UI/UX design, and innovative problem-solving. I'm particularly 
              drawn to futuristic engineering concepts and sustainable technology solutions. From designing intuitive 
              user interfaces to developing complex web applications, I bring a unique blend of technical skill 
              and creative vision to every project.
            </p>
            
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              As a writer, I believe in the power of storytelling to communicate complex technological concepts 
              in accessible ways. This passion for clear communication drives my approach to design and development, 
              ensuring that every solution I create is both powerful and user-friendly.
            </p>
            
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              In leadership roles, I've learned to harness creativity as a catalyst for innovation. This mindset 
              culminated in founding NOVACORE, a technology venture focused on pioneering solutions that push 
              the boundaries of what's possible. My vision is to create a platform where innovation meets 
              practical application, delivering tomorrow's solutions today.
            </p>
            
            <div className="mt-8 p-6 glass rounded-2xl">
              <h3 className="text-2xl font-bold text-gold mb-2">Vision for NOVACORE</h3>
              <p className="text-gray-300">
                To become a global catalyst for technological innovation, empowering creators and entrepreneurs 
                to build solutions that transcend traditional boundaries and create lasting impact.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About