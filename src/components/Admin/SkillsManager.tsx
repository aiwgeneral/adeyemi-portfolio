import { useState } from 'react'
import { motion } from 'framer-motion'
import { useAdmin, Skill } from '../../context/AdminContext'
import { Trash2, Edit2, Plus } from 'lucide-react'

const ICON_OPTIONS = [
  'Code2', 'Palette', 'Layout', 'Brain', 'PenTool', 'Users',
  'Headphones', 'Target', 'Lightbulb', 'Zap', 'Shield', 'Star'
]

const SkillsManager = () => {
  const { skills, addSkill, updateSkill, deleteSkill } = useAdmin()
  const [isAdding, setIsAdding] = useState(false)
  const [editingId, setEditingId] = useState<string | null>(null)
  const [formData, setFormData] = useState<Omit<Skill, 'id'>>({
    name: '',
    level: 50,
    icon: 'Code2'
  })

  const handleAdd = () => {
    if (formData.name) {
      addSkill(formData)
      resetForm()
    }
  }

  const handleUpdate = (id: string) => {
    updateSkill(id, formData)
    resetForm()
  }

  const resetForm = () => {
    setFormData({ name: '', level: 50, icon: 'Code2' })
    setIsAdding(false)
    setEditingId(null)
  }

  const editSkill = (skill: Skill) => {
    setFormData(skill)
    setEditingId(skill.id)
    setIsAdding(true)
  }

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold gradient-text">Manage Skills</h2>
        {!isAdding && (
          <button
            onClick={() => setIsAdding(true)}
            className="flex items-center gap-2 primary-btn px-6 py-2 rounded-lg"
          >
            <Plus size={20} />
            Add Skill
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
            {editingId ? 'Edit Skill' : 'Add New Skill'}
          </h3>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Skill Name
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-dark-900 border border-white/10 rounded-lg px-4 py-2 text-white"
                placeholder="e.g., Web Development"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Proficiency Level: {formData.level}%
              </label>
              <input
                type="range"
                min="0"
                max="100"
                value={formData.level}
                onChange={(e) => setFormData({ ...formData, level: parseInt(e.target.value) })}
                className="w-full"
              />
              <div className="mt-2 bg-dark-900 rounded-lg h-3 overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-gold to-cyan-400 transition-all"
                  style={{ width: `${formData.level}%` }}
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Icon
              </label>
              <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                {ICON_OPTIONS.map((icon) => (
                  <button
                    key={icon}
                    onClick={() => setFormData({ ...formData, icon })}
                    className={`p-3 rounded-lg text-center transition ${
                      formData.icon === icon
                        ? 'bg-gold/20 border-2 border-gold'
                        : 'glass hover:bg-white/5 border border-white/10'
                    }`}
                  >
                    <span className="text-sm font-medium">{icon}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="flex gap-3">
            <button
              onClick={() => editingId ? handleUpdate(editingId) : handleAdd()}
              className="flex-1 primary-btn px-6 py-3 rounded-lg font-semibold"
            >
              {editingId ? 'Update' : 'Add'} Skill
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

      {/* Skills List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {skills.map((skill) => (
          <motion.div
            key={skill.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass-dark p-6 rounded-2xl hover:bg-white/5 transition relative group"
          >
            <div className="text-center mb-4">
              <h3 className="text-lg font-semibold text-gold mb-2">{skill.name}</h3>
              <div className="text-3xl font-bold text-gray-100 mb-3">{skill.level}%</div>
              <div className="bg-dark-900 rounded-lg h-2 overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-gold to-cyan-400 transition-all"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
            <p className="text-xs text-gray-400 text-center mb-4">Icon: {skill.icon}</p>
            <div className="flex gap-2 justify-center opacity-0 group-hover:opacity-100 transition">
              <button
                onClick={() => editSkill(skill)}
                className="p-2 hover:bg-white/10 rounded-lg transition"
              >
                <Edit2 size={16} className="text-blue-400" />
              </button>
              <button
                onClick={() => deleteSkill(skill.id)}
                className="p-2 hover:bg-white/10 rounded-lg transition"
              >
                <Trash2 size={16} className="text-red-400" />
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default SkillsManager
