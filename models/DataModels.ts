export interface Publication {
  id: string
  title: string
  authors: string[]
  journal: string
  year: number
  doi?: string
  link?: string
}

export interface Collaboration {
  id: string
  name: string
  institution: string
  description?: string
  link?: string
  lab?: string
  type?: 'active' | 'worked_with'
}

export interface Initiative {
  id: string
  title: string
  description: string
  image?: string
  links?: {
    instagram?: string
    website?: string
  }
}

export interface ContactInfo {
  email: string
  institutionalEmail?: string
  phone?: string
  address?: string
  socialMedia?: {
    linkedin?: string
    twitter?: string
    instagram?: string
    facebook?: string
    orcid?: string
  }
}

export interface PersonalInfo {
  name: string
  title: string
  bio: string
  image?: string
  interests?: string[]
  contact: ContactInfo
}

export interface ProfessionalExperience {
  id: string
  position: string
  institution: string
  period: string
  link?: string
}

export interface Education {
  id: string
  degree: string
  institution: string
  period: string
  link?: string
  thesisLink?: string
  thesisLanguage?: string
}

export interface Award {
  id: string
  title: string
  year: number
  description?: string
}

export interface EducationInitiative {
  id: string
  title: string
  period: string
  link?: string
}

export interface ProgrammingSkill {
  language: string
  level: 'beginner' | 'intermediary' | 'advanced'
  years?: number
  description?: string
}

export interface CurriculumLinks {
  googleScholar?: string
  lattes?: string
  orcid?: string
  publons?: string
  fapesp?: string
  github?: string
  gitlab?: string
}

