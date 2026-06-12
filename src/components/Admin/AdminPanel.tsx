import { useState } from 'react'
import { motion } from 'framer-motion'
import { LogOut, Menu, X } from 'lucide-react'
import ProjectsManager from './ProjectsManager'
import TestimonialsManager from './TestimonialsManager'
import ExperienceManager from './ExperienceManager'
import SkillsManager from './SkillsManager'

interface AdminPanelProps {
  onLogout: () => void
}

type Tab = 'projects' | 'testimonials' | 'experience' | 'skills'

const AdminPanel = ({ onLogout }: AdminPanelProps) => {
  const [activeTab, setActiveTab] = useState<Tab>('projects')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const tabs: { id: Tab; label: string }[] = [
    { id: 'projects', label: 'Projects' },
    { id: 'testimonials', label: 'Testimonials' },
    { id: 'experience', label: 'Experience' },
    { id: 'skills', label: 'Skills' }
  ]

  return (
    <div className="min-h-screen bg-dark-900 text-gray-200">
      {/* Header */}
      <header className="glass-dark border-b border-white/10 sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold gradient-text">Portfolio Admin</h1>
          <div className="flex items-center gap-4">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-gray-300"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            <button
              onClick={onLogout}
              className="flex items-center gap-2 px-4 py-2 ghost-btn rounded-lg"
            >
              <LogOut size={18} />
              <span className="hidden sm:inline">Logout</span>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-white/10 p-4 space-y-2">
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveTab(tab.id)
                  setMobileMenuOpen(false)
                }}
                className={`w-full text-left px-4 py-2 rounded-lg transition ${
                  activeTab === tab.id
                    ? 'bg-gold/20 text-gold'
                    : 'text-gray-300 hover:bg-white/5'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        )}
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className="hidden md:block w-64 glass-dark border-r border-white/10 min-h-[calc(100vh-80px)]">
          <nav className="p-6 space-y-2">
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`w-full text-left px-4 py-3 rounded-lg transition ${
                  activeTab === tab.id
                    ? 'bg-gold/20 text-gold font-semibold'
                    : 'text-gray-300 hover:bg-white/5'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6 md:p-8">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {activeTab === 'projects' && <ProjectsManager />}
            {activeTab === 'testimonials' && <TestimonialsManager />}
            {activeTab === 'experience' && <ExperienceManager />}
            {activeTab === 'skills' && <SkillsManager />}
          </motion.div>
        </main>
      </div>
    </div>
  )
}

export default AdminPanel
