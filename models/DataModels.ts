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
export interface SciCommItem {
  id: string | number
  title: string
  description: string
  type: 'podcast' | 'article' | 'video' | 'talk' 
  date: string
  url: string
  platform: string
}
export interface Graduation {
  id: string | number
  title: string   
  level: 'Bachelor' | 'Master' | 'phd' | 'Doctorate'| 'Master/Doctorate'  
  institution: string     
  period: string          
  description: string     
  link?: string          
}
export interface Course {
  id: string | number
  title: string           
  type: 'course' | 'workshop' | 'seminar' | 'bootcamp'
  platform: string        
  period: string          
  description: string     
  link?: string          
}
export interface ConferencePresentation {
  id: string
  title: string
  authors: string[] 
  conferenceName: string 
  year: number
  status: 'presented' | 'upcoming' 
  type: 'poster' | 'oral' | 'attendee' 
  description?: string 
  image?: string 
  links?: {
    instagram?: string 
    anais?: string 
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

export interface LabInfo {
  name: string
  fullName: string
  description: string
  acronym?: string
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

export interface News {
  id: string
  title: string
  description: string
  image?: string
  date: string
  link?: string
  author?: string
}

export interface Tool {
  id: string
  name: string
  description: string
  link?: string
  type?: 'server' | 'application' | 'software' | 'platform'
  databases?: Array<{
    name: string
    type: string
    description: string
    sequences?: number
  }>
}

export interface Teaching {
  id: string
  title: string
  description: string
  period?: string
  link?: string
  type?: 'course' | 'workshop' | 'seminar' | 'discipline'
}

export interface TeamMember {
  id: string
  name: string
  role: string
  description?: string
  image?: string
  email?: string
  link?: string
  type: 'current' | 'alumni'
  category?: 'principal_investigator' | 'postdoc' | 'phd' | 'masters' | 'undergraduate' | 'alumni'
}

