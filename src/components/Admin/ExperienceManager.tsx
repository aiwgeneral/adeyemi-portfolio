import { useState } from 'react'
import { motion } from 'framer-motion'
import { useAdmin, Experience } from '../../context/AdminContext'
import { Trash2, Edit2, Plus } from 'lucide-react'

const ExperienceManager = () => {
  const { experiences, addExperience, updateExperience, deleteExperience } = useAdmin()
  const [isAdding, setIsAdding] = useState(false)
  const [editingId, setEditingId] = useState<string | null>(null)
  const [formData, setFormData] = useState<Omit<Experience, 'id'>>({
    year: '',
    title: '',
    description: ''
  })

  const handleAdd = () => {
    if (formData.year && formData.title && formData.description) {
      addExperience(formData)
      resetForm()
    }
  }

  const handleUpdate = (id: string) => {
    updateExperience(id, formData)
    resetForm()
  }

  const resetForm = () => {
    setFormData({ year: '', title: '', description: '' })
    setIsAdding(false)
    setEditingId(null)
  }

  const editExperience = (experience: Experience) => {
    setFormData(experience)
    setEditingId(experience.id)
    setIsAdding(true)
  }

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold gradient-text">Manage Experience</h2>
        {!isAdding && (
          <button
            onClick={() => setIsAdding(true)}
            className="flex items-center gap-2 primary-btn px-6 py-2 rounded-lg"
          >
            <Plus size={20} />
            Add Experience
          </button>
        )}
      </div>

      {/* Form */}
      {isAdding && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-dark p-8 rounded-2xl space-y-6"
        >
          <h3 className="text-2xl font-semibold text-gold">
            {editingId ? 'Edit Experience' : 'Add New Experience'}
          </h3>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Year/Duration
              </label>
              <input
                type="text"
                value={formData.year}
                onChange={(e) => setFormData({ ...formData, year: e.target.value })}
                className="w-full bg-dark-900 border border-white/10 rounded-lg px-4 py-2 text-white"
                placeholder="e.g., 2020 - 2024"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Job Title
              </label>
              <input
                type="text"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                className="w-full bg-dark-900 border border-white/10 rounded-lg px-4 py-2 text-white"
                placeholder="e.g., Senior Developer"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Description
              </label>
              <textarea
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                className="w-full bg-dark-900 border border-white/10 rounded-lg px-4 py-2 text-white min-h-[100px]"
                placeholder="What did you do in this role?"
              />
            </div>
          </div>

          <div className="flex gap-3">
            <button
              onClick={() => editingId ? handleUpdate(editingId) : handleAdd()}
              className="flex-1 primary-btn px-6 py-3 rounded-lg font-semibold"
            >
              {editingId ? 'Update' : 'Add'} Experience
            </button>
            <button
              onClick={resetForm}
              className="px-6 py-3 ghost-btn rounded-lg"
            >
              Cancel
            </button>
          </div>
        </motion.div>
      )}

      {/* Experience List */}
      <div className="grid gap-4">
        {experiences.map((experience) => (
          <motion.div
            key={experience.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass-dark p-6 rounded-2xl flex items-start justify-between hover:bg-white/5 transition"
          >
            <div className="flex-1">
              <div className="flex items-center gap-4 mb-2">
                <span className="text-gold font-semibold">{experience.year}</span>
                <h3 className="text-xl font-semibold text-gray-100">{experience.title}</h3>
              </div>
              <p className="text-gray-400">{experience.description}</p>
            </div>
            <div className="flex gap-2 ml-4">
              <button
                onClick={() => editExperience(experience)}
                className="p-2 hover:bg-white/10 rounded-lg transition"
              >
                <Edit2 size={18} className="text-blue-400" />
              </button>
              <button
                onClick={() => deleteExperience(experience.id)}
                className="p-2 hover:bg-white/10 rounded-lg transition"
              >
                <Trash2 size={18} className="text-red-400" />
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default ExperienceManager
