import { useState } from 'react'
import { motion } from 'framer-motion'
import { useAdmin, Testimonial } from '../../context/AdminContext'
import { Trash2, Edit2, Plus } from 'lucide-react'

const TestimonialsManager = () => {
  const { testimonials, addTestimonial, updateTestimonial, deleteTestimonial } = useAdmin()
  const [isAdding, setIsAdding] = useState(false)
  const [editingId, setEditingId] = useState<string | null>(null)
  const [formData, setFormData] = useState<Omit<Testimonial, 'id'>>({
    name: '',
    role: '',
    content: '',
    avatar: ''
  })

  const handleAdd = () => {
    if (formData.name && formData.role && formData.content && formData.avatar) {
      addTestimonial(formData)
      resetForm()
    }
  }

  const handleUpdate = (id: string) => {
    updateTestimonial(id, formData)
    resetForm()
  }

  const resetForm = () => {
    setFormData({ name: '', role: '', content: '', avatar: '' })
    setIsAdding(false)
    setEditingId(null)
  }

  const editTestimonial = (testimonial: Testimonial) => {
    setFormData(testimonial)
    setEditingId(testimonial.id)
    setIsAdding(true)
  }

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold gradient-text">Manage Testimonials</h2>
        {!isAdding && (
          <button
            onClick={() => setIsAdding(true)}
            className="flex items-center gap-2 primary-btn px-6 py-2 rounded-lg"
          >
            <Plus size={20} />
            Add Testimonial
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
            {editingId ? 'Edit Testimonial' : 'Add New Testimonial'}
          </h3>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Name
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-dark-900 border border-white/10 rounded-lg px-4 py-2 text-white"
                placeholder="Full name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Role
              </label>
              <input
                type="text"
                value={formData.role}
                onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                className="w-full bg-dark-900 border border-white/10 rounded-lg px-4 py-2 text-white"
                placeholder="e.g., CTO, TechStart Inc."
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Avatar (2 letter initials)
              </label>
              <input
                type="text"
                value={formData.avatar}
                onChange={(e) => setFormData({ ...formData, avatar: e.target.value.toUpperCase().slice(0, 2) })}
                maxLength={2}
                className="w-full bg-dark-900 border border-white/10 rounded-lg px-4 py-2 text-white"
                placeholder="SJ"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Testimonial Content
              </label>
              <textarea
                value={formData.content}
                onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                className="w-full bg-dark-900 border border-white/10 rounded-lg px-4 py-2 text-white min-h-[120px]"
                placeholder="What do they say about you?"
              />
            </div>
          </div>

          <div className="flex gap-3">
            <button
              onClick={() => editingId ? handleUpdate(editingId) : handleAdd()}
              className="flex-1 primary-btn px-6 py-3 rounded-lg font-semibold"
            >
              {editingId ? 'Update' : 'Add'} Testimonial
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

      {/* Testimonials List */}
      <div className="grid gap-4">
        {testimonials.map((testimonial) => (
          <motion.div
            key={testimonial.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass-dark p-6 rounded-2xl flex items-start justify-between hover:bg-white/5 transition"
          >
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 glass rounded-full flex items-center justify-center font-bold text-gold text-sm">
                  {testimonial.avatar}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-100">{testimonial.name}</h3>
                  <p className="text-sm text-gray-400">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-300 italic">"{testimonial.content}"</p>
            </div>
            <div className="flex gap-2 ml-4">
              <button
                onClick={() => editTestimonial(testimonial)}
                className="p-2 hover:bg-white/10 rounded-lg transition"
              >
                <Edit2 size={18} className="text-blue-400" />
              </button>
              <button
                onClick={() => deleteTestimonial(testimonial.id)}
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

export default TestimonialsManager
