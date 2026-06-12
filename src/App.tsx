import { useState } from 'react'
import AdminLogin from './components/Admin/AdminLogin'
import AdminPanel from './components/Admin/AdminPanel'
import { AdminProvider } from './context/AdminContext'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false)

  const handleAdminLogin = () => {
    setIsAdminLoggedIn(true)
  }

  const handleAdminLogout = () => {
    setIsAdminLoggedIn(false)
  }

  // Admin panel view
  if (isAdminLoggedIn) {
    return (
      <AdminProvider>
        <AdminPanel onLogout={handleAdminLogout} />
      </AdminProvider>
    )
  }

  // Check if user is trying to access admin
  const isAdminPath = window.location.pathname === '/admin'

  if (isAdminPath) {
    return <AdminLogin onLogin={handleAdminLogin} />
  }

  // Regular portfolio view
  return (
    <AdminProvider>
      <div className="min-h-screen bg-dark-900 text-gray-200">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Testimonials />
        <Contact />
        <Footer />
      </div>
    </AdminProvider>
  )
}
