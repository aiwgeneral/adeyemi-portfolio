import { useState } from 'react'
import { motion } from 'framer-motion'
import { Lock } from 'lucide-react'

interface AdminLoginProps {
  onLogin: (password: string) => void
}

// Simple password - in production, use proper authentication
const ADMIN_PASSWORD = 'admin123'

const AdminLogin = ({ onLogin }: AdminLoginProps) => {
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (password === ADMIN_PASSWORD) {
      onLogin(password)
      setPassword('')
    } else {
      setError('Invalid password')
      setPassword('')
    }
  }

  return (
    <div className="min-h-screen bg-dark-900 text-gray-200 flex items-center justify-center p-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="shell-panel glass rounded-[32px] p-8 md:p-12 max-w-md w-full"
      >
        <div className="text-center mb-8">
          <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-gold to-cyan-400 flex items-center justify-center">
            <Lock size={32} className="text-black" />
          </div>
          <h1 className="text-3xl font-bold gradient-text mb-2">Admin Access</h1>
          <p className="text-gray-400">Enter the admin password to continue</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value)
                setError('')
              }}
              className="w-full bg-dark-900 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gold"
              placeholder="••••••••"
              autoFocus
            />
          </div>

          {error && (
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-red-400 text-sm"
            >
              {error}
            </motion.p>
          )}

          <button
            type="submit"
            className="w-full primary-btn px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition"
          >
            Access Admin Panel
          </button>
        </form>

        <p className="text-center text-gray-500 text-sm mt-8">
          Demo password: <span className="text-gold">admin123</span>
        </p>
      </motion.div>
    </div>
  )
}

export default AdminLogin
