import React, { createContext, useContext, useState, ReactNode } from 'react'

export interface Project {
  id: string
  title: string
  description: string
  tech: string[]
  image: string
}

export interface Testimonial {
  id: string
  name: string
  role: string
  content: string
  avatar: string
}

export interface Experience {
  id: string
  year: string
  title: string
  description: string
}

export interface Skill {
  id: string
  name: string
  level: number
  icon: string
}

interface AdminContextType {
  projects: Project[]
  testimonials: Testimonial[]
  experiences: Experience[]
  skills: Skill[]
  
  addProject: (project: Omit<Project, 'id'>) => void
  updateProject: (id: string, project: Partial<Project>) => void
  deleteProject: (id: string) => void
  
  addTestimonial: (testimonial: Omit<Testimonial, 'id'>) => void
  updateTestimonial: (id: string, testimonial: Partial<Testimonial>) => void
  deleteTestimonial: (id: string) => void
  
  addExperience: (experience: Omit<Experience, 'id'>) => void
  updateExperience: (id: string, experience: Partial<Experience>) => void
  deleteExperience: (id: string) => void
  
  addSkill: (skill: Omit<Skill, 'id'>) => void
  updateSkill: (id: string, skill: Partial<Skill>) => void
  deleteSkill: (id: string) => void
}

const AdminContext = createContext<AdminContextType | undefined>(undefined)

// Initial data matching your portfolio
const initialProjects: Project[] = [
  {
    id: '1',
    title: 'NOVACORE',
    description: 'A technology venture focused on pioneering innovative solutions and digital transformation for businesses and creators.',
    tech: ['React', 'Node.js', 'Tailwind CSS', 'AI Integration'],
    image: 'novacore'
  },
  {
    id: '2',
    title: 'Project New Flight',
    description: 'Revolutionary aviation technology project aimed at transforming air travel experiences through innovative design and engineering.',
    tech: ['Aerospace Engineering', 'UI/UX', 'IoT', 'Sustainability'],
    image: 'flight'
  },
  {
    id: '3',
    title: 'Aurora Deep-Sea Vehicle',
    description: 'Advanced underwater exploration vehicle designed for deep-sea research and maritime innovation.',
    tech: ['Robotics', 'Marine Engineering', 'Sensor Tech', 'Autonomous Systems'],
    image: 'aurora'
  },
  {
    id: '4',
    title: 'Flare Energy System',
    description: 'Sustainable energy solution integrating renewable sources with smart grid technology for efficient power distribution.',
    tech: ['Energy Tech', 'Smart Grid', 'IoT', 'React'],
    image: 'flare'
  },
  {
    id: '5',
    title: 'Crystalline HDA Fuel System',
    description: 'Next-generation hydrogen fuel technology system for clean energy transportation solutions.',
    tech: ['Hydrogen Tech', 'Clean Energy', 'Innovation', 'Research'],
    image: 'crystalline'
  },
  {
    id: '6',
    title: 'Crypto Tips Web App',
    description: 'A modern web application providing cryptocurrency education and real-time market insights with an intuitive interface.',
    tech: ['Web3', 'React', 'Blockchain', 'Real-time API'],
    image: 'crypto'
  }
]

const initialTestimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    role: 'CTO, TechStart Inc.',
    content: 'Adeyemi\'s innovative approach to problem-solving and exceptional design skills have transformed our product. His work on the UI/UX redesign increased our user engagement by over 60%.',
    avatar: 'SJ'
  },
  {
    id: '2',
    name: 'Michael Chen',
    role: 'Founder, DigitalBridge',
    content: 'Working with Adeyemi on NOVACORE was an incredible experience. His technical expertise combined with creative vision delivers results that exceed expectations every time.',
    avatar: 'MC'
  },
  {
    id: '3',
    name: 'Amaka Okafor',
    role: 'Product Manager, FinTech Africa',
    content: 'A rare combination of technical brilliance and artistic creativity. Adeyemi brings fresh perspectives to every challenge and delivers solutions that are both elegant and powerful.',
    avatar: 'AO'
  }
]

const initialExperiences: Experience[] = [
  {
    id: '1',
    year: '2020 - 2024',
    title: 'Senior Technology Consultant',
    description: 'Led digital transformation initiatives for startups and established companies, delivering innovative solutions that increased efficiency by 40%.'
  },
  {
    id: '2',
    year: '2019 - 2020',
    title: 'Founder & CEO',
    description: 'Established NOVACORE, focusing on cutting-edge technology solutions and creative innovation in the Nigerian tech ecosystem.'
  },
  {
    id: '3',
    year: '2018 - 2019',
    title: 'Lead UI/UX Designer',
    description: 'Designed user-centered interfaces for fintech and e-commerce platforms, improving user engagement by 65%.'
  },
  {
    id: '4',
    year: '2017 - 2018',
    title: 'Full Stack Developer',
    description: 'Developed scalable web applications using modern frameworks, contributing to products used by thousands of users daily.'
  }
]

const initialSkills: Skill[] = [
  { id: '1', name: 'Web Development', level: 95, icon: 'Code2' },
  { id: '2', name: 'Graphic Design', level: 90, icon: 'Palette' },
  { id: '3', name: 'UI/UX Design', level: 88, icon: 'Layout' },
  { id: '4', name: 'Problem Solving', level: 92, icon: 'Brain' },
  { id: '5', name: 'Content Writing', level: 85, icon: 'PenTool' },
  { id: '6', name: 'Leadership', level: 87, icon: 'Users' },
  { id: '7', name: 'Technical Support', level: 90, icon: 'Headphones' },
  { id: '8', name: 'Digital Strategy', level: 82, icon: 'Target' },
  { id: '9', name: 'Creative Innovation', level: 94, icon: 'Lightbulb' }
]

export function AdminProvider({ children }: { children: ReactNode }) {
  const [projects, setProjects] = useState<Project[]>(initialProjects)
  const [testimonials, setTestimonials] = useState<Testimonial[]>(initialTestimonials)
  const [experiences, setExperiences] = useState<Experience[]>(initialExperiences)
  const [skills, setSkills] = useState<Skill[]>(initialSkills)

  const addProject = (project: Omit<Project, 'id'>) => {
    setProjects([...projects, { ...project, id: Date.now().toString() }])
  }

  const updateProject = (id: string, project: Partial<Project>) => {
    setProjects(projects.map(p => p.id === id ? { ...p, ...project } : p))
  }

  const deleteProject = (id: string) => {
    setProjects(projects.filter(p => p.id !== id))
  }

  const addTestimonial = (testimonial: Omit<Testimonial, 'id'>) => {
    setTestimonials([...testimonials, { ...testimonial, id: Date.now().toString() }])
  }

  const updateTestimonial = (id: string, testimonial: Partial<Testimonial>) => {
    setTestimonials(testimonials.map(t => t.id === id ? { ...t, ...testimonial } : t))
  }

  const deleteTestimonial = (id: string) => {
    setTestimonials(testimonials.filter(t => t.id !== id))
  }

  const addExperience = (experience: Omit<Experience, 'id'>) => {
    setExperiences([...experiences, { ...experience, id: Date.now().toString() }])
  }

  const updateExperience = (id: string, experience: Partial<Experience>) => {
    setExperiences(experiences.map(e => e.id === id ? { ...e, ...experience } : e))
  }

  const deleteExperience = (id: string) => {
    setExperiences(experiences.filter(e => e.id !== id))
  }

  const addSkill = (skill: Omit<Skill, 'id'>) => {
    setSkills([...skills, { ...skill, id: Date.now().toString() }])
  }

  const updateSkill = (id: string, skill: Partial<Skill>) => {
    setSkills(skills.map(s => s.id === id ? { ...s, ...skill } : s))
  }

  const deleteSkill = (id: string) => {
    setSkills(skills.filter(s => s.id !== id))
  }

  const value: AdminContextType = {
    projects,
    testimonials,
    experiences,
    skills,
    addProject,
    updateProject,
    deleteProject,
    addTestimonial,
    updateTestimonial,
    deleteTestimonial,
    addExperience,
    updateExperience,
    deleteExperience,
    addSkill,
    updateSkill,
    deleteSkill
  }

  return (
    <AdminContext.Provider value={value}>
      {children}
    </AdminContext.Provider>
  )
}

export function useAdmin() {
  const context = useContext(AdminContext)
  if (!context) {
    throw new Error('useAdmin must be used within AdminProvider')
  }
  return context
}
