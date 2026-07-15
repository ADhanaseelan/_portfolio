import { 
  Monitor, 
  Layers, 
  Sparkles, 
  Code
} from 'lucide-react'

export interface Project {
  title: string
  category: string
  tech: string
  description: string
  features: string[]
  link?: string
}

export interface Skill {
  name: string
  level: number
}

export interface SkillCategory {
  name: string
  skills: Skill[]
}

export interface Certification {
  title: string
  issuer: string
  date: string
}

export interface Achievement {
  title: string
  highlight: string
  desc: string
}

export interface Service {
  title: string
  desc: string
  icon: any
  gradient: string
}

export interface TimelineNode {
  year: string
  title: string
  desc: string
}

export interface StatItem {
  value: string
  label: string
}

// Navigation links
export const navigationItems = [
  { label: 'About', href: '#about' },
  { label: 'Education', href: '#education' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Journey', href: '#journey' },
  { label: 'Stats', href: '#stats' },
  { label: 'DhanaGPT', href: '#chatbot' },
  { label: 'Contact', href: '#contact' },
]

// All projects list
export const projectItems: Project[] = [
  {
    title: 'Turf Booking Web Application',
    category: 'Full Stack',
    tech: 'React.js • TypeScript • Tailwind CSS',
    description: 'Developed a responsive sports turf booking platform enabling users to browse available turfs, book slots, and manage reservations with an intuitive interface.',
    features: ['Responsive UI', 'Easy Booking', 'Mobile Friendly', 'Fast Performance'],
    link: 'https://turrfzone.com/'
  },
  {
    title: 'Gym Management System',
    category: 'Frontend',
    tech: 'React.js • TypeScript • Tailwind CSS',
    description: 'Created a complete gym management application for handling memberships, attendance tracking, and customer information visualization.',
    features: ['Member Management', 'Interactive Dashboard', 'Responsive Layout'],
    link: 'https://gym.artechology.pro/'
  },
  {
    title: 'Timetable Scheduler',
    category: 'AI & Backend',
    tech: 'React.js • Node.js • PostgreSQL',
    description: 'Developed an AI-assisted timetable scheduling system that automates scheduling conflicts resolution, room allocations, and faculty constraints management.',
    features: ['Conflict-Free Scheduling', 'Classroom Allocation', 'Faculty Management'],
    link: 'https://github.com/ADhanaseelan'
  },
  {
    title: 'Railax: Railway Waiting Hall Booking System',
    category: 'Full Stack',
    tech: 'React.js • Node.js • PostgreSQL',
    description: 'Built an online booking platform for AC railway waiting halls with seat reservation and payment support.',
    features: ['Seat Reservation', 'AC Hall Allocation', 'Payment Gateway Integration'],
    link: 'https://railax.artechnologi.com/'
  },
  {
    title: 'Park Ease: Smart Parking Management',
    category: 'Mobile / IoT',
    tech: 'React Native • Firebase',
    description: 'Designed a mobile application for real-time parking slot tracking and smart parking status management.',
    features: ['Slot Tracking', 'Firebase Database Sync', 'Mobile Navigation'],
    link: 'https://play.google.com/store'
  },
]

// Skill categories
export const skillCategories: SkillCategory[] = [
  {
    name: 'Programming Languages',
    skills: [
      { name: 'Java', level: 90 },
      { name: 'Python', level: 85 },
      { name: 'C', level: 80 }
    ]
  },
  {
    name: 'Frontend Web & Mobile',
    skills: [
      { name: 'React.js', level: 95 },
      { name: 'TypeScript', level: 90 },
      { name: 'JavaScript', level: 95 },
      { name: 'Tailwind CSS', level: 95 },
      { name: 'React Native', level: 80 },
      { name: 'NativeWind', level: 75 },
      { name: 'HTML5 & CSS3', level: 95 }
    ]
  },
  {
    name: 'Backend & Database',
    skills: [
      { name: 'Node.js', level: 85 },
      { name: 'Express.js', level: 85 },
      { name: 'REST API', level: 90 },
      { name: 'PostgreSQL', level: 85 },
      { name: 'MySQL', level: 90 },
      { name: 'MongoDB', level: 80 },
      { name: 'Firebase', level: 80 }
    ]
  },
  {
    name: 'AI, CS Core & UI/UX',
    skills: [
      { name: 'TensorFlow', level: 70 },
      { name: 'OpenCV', level: 75 },
      { name: 'Data Structures & Algorithms', level: 85 },
      { name: 'OOP & DBMS', level: 90 },
      { name: 'Computer Networks & OS', level: 80 },
      { name: 'Responsive Web Design', level: 95 },
      { name: 'User Interface Design', level: 90 }
    ]
  }
]

// Certifications
export const certificationItems: Certification[] = [
  { title: 'Java Programming', issuer: 'Oracle / Coursera', date: '2024' },
  { title: 'Python Programming', issuer: 'Kaggle / Coursera', date: '2024' },
  { title: 'Frontend Development', issuer: 'Meta / Coursera', date: '2025' },
  { title: 'React.js Developer', issuer: 'Meta / freeCodeCamp', date: '2025' },
  { title: 'AI & Machine Learning Foundations', issuer: 'Google Cloud / NPTEL', date: '2025' },
]

// Achievements & Highlights
export const achievementItems: Achievement[] = [
  {
    title: 'Frontend Developer Intern',
    highlight: 'AST Technologies',
    desc: 'Secured and completed a frontend internship, deploying features onto core production dashboards.'
  },
  {
    title: 'Developed 5+ Full Stack Projects',
    highlight: 'Advanced Architectures',
    desc: 'Independently designed and built booking engines, scheduling systems, and smart parking mobile apps.'
  },
  {
    title: 'Built AI-based Applications',
    highlight: 'Intelligence Systems',
    desc: 'Created conflict-free scheduling modules and machine learning tools for computer vision tasks.'
  },
  {
    title: 'Strong Problem Solving Skills',
    highlight: 'LeetCode 400+ Club',
    desc: 'Solved over 420 problems on LeetCode with consistent algorithms practice.'
  },
  {
    title: 'Active GitHub Contributor',
    highlight: 'Open Source Spirit',
    desc: 'Maintained active commit history and built public software repositories.'
  }
]

// Services
export const serviceItems: Service[] = [
  {
    title: 'Frontend Development',
    desc: 'Building high-performance, smooth, and interactive user interfaces using React, TypeScript, and modern styling libraries.',
    icon: Monitor,
    gradient: 'from-orange-500/20 to-amber-500/20 border-orange-500/30'
  },
  {
    title: 'Full Stack Development',
    desc: 'Building complete database-driven web platforms using React, Node.js, Express, and PostgreSQL/MongoDB architectures.',
    icon: Layers,
    gradient: 'from-purple-500/20 to-indigo-500/20 border-purple-500/30'
  },
  {
    title: 'UI/UX Design Integration',
    desc: 'Translating design concepts and Figma wireframes into pixel-perfect responsive code with an emphasis on layouts and ease of use.',
    icon: Sparkles,
    gradient: 'from-pink-500/20 to-rose-500/20 border-pink-500/30'
  },
  {
    title: 'API Integration & Backend',
    desc: 'Designing RESTful interfaces, secure authentication models, state synchronization engines, and connecting frontends with databases.',
    icon: Code,
    gradient: 'from-blue-500/20 to-cyan-500/20 border-blue-500/30'
  }
]

// Timeline Nodes
export const journeyTimeline: TimelineNode[] = [
  { year: '2023', title: 'Started B.Tech Information Technology', desc: 'Enrolled at Nandha Engineering College, establishing academic foundations in systems science.' },
  { year: '2023', title: 'Learned HTML, CSS & JavaScript', desc: 'Discovered web standards, scripting syntaxes, and layouts structuring.' },
  { year: '2024', title: 'Built Responsive Websites', desc: 'Crafted multi-device web layouts, handling grids, media queries, and flexbox configurations.' },
  { year: '2024', title: 'Learned React & TypeScript', desc: 'Adopted type-safe component design architectures, hooks, and client state machines.' },
  { year: '2025', title: 'Frontend Developer Internship', desc: 'Completed residency at AST Technologies, delivering commercial dashboard components.' },
  { year: '2025', title: 'Started Full Stack Development', desc: 'Bridged databases (PostgreSQL/MongoDB) and API services using Express/Node.js.' },
  { year: '2025', title: 'Developed AI-based Projects', desc: 'Engineered auto-scheduling timetable managers and real-time parking analyzers.' },
  { year: 'Present', title: 'Seeking Opportunities', desc: 'Looking for Full Stack / Frontend Software Engineer internship or full-time roles.' }
]

// Dev process steps
export const devProcessSteps = [
  'Idea', 'Research', 'UI Design', 'Frontend Development', 'Backend Development', 
  'Database Design', 'Testing', 'Deployment', 'Continuous Improvement'
]

// Stats numbers
export const statsByNumbers: StatItem[] = [
  { value: '5+', label: 'Major Projects' },
  { value: '10+', label: 'Technologies Learned' },
  { value: '200+', label: 'Git Commits' },
  { value: '1000+', label: 'Hours of Coding' },
  { value: 'Final Year', label: 'B.Tech IT Student' },
  { value: '8.4', label: 'CGPA' }
]

// Featured project details
export const featuredProject = {
  title: 'AI Smart Timetable Generator',
  problem: 'Creating college timetables manually is extremely time-consuming and highly prone to faculty, class, or room scheduling conflicts.',
  solution: 'Developed an intelligent timetable generation system using React, PostgreSQL, and optimization scheduling logic to allocate clash-free classes.',
  features: [
    'Automatic timetable generation',
    'Faculty conflict detection',
    'Classroom allocation',
    'Responsive admin dashboard'
  ]
}

// Learning list
export const learningTopics = [
  'Next.js (App Router)', 'Docker Containers', 'AWS Cloud (EC2, S3)', 
  'System Design (Lld/Hld)', 'Advanced DSA in Java', 'Generative AI APIs'
]

// Hobbies beyond coding
export const beyondCodingHobbies = [
  { label: 'Learning new technologies', icon: '📚' },
  { label: 'Solving coding challenges', icon: '🧩' },
  { label: 'Exploring open-source projects', icon: '🌐' },
  { label: 'Designing modern user interfaces', icon: '🎨' },
  { label: 'Collaborating on innovative ideas', icon: '🤝' }
]

// Highlight list
export const textHighlights = [
  'Frontend Developer Intern',
  '5+ Real World Projects',
  'AI + Web Development',
  'REST API Integration',
  'Responsive UI Expert',
  'Team Collaboration',
  'Quick Learner',
  'Problem Solver'
]

// Chatbot database
export const chatbotDatabase: Record<string, string> = {
  'what projects have you built?': 
    'I have built several full-stack projects: \n1. **Turf Booking App**: A responsive booking app using React, TS, and Tailwind.\n2. **Gym Management System**: Handles customer accounts and dashboard analysis.\n3. **Timetable Scheduler**: An AI-assisted conflict-free timetabling tool using PostgreSQL.\n4. **Railway Waiting Hall Booking**: AC waiting hall reservation system.\n5. **Smart Parking System**: A React Native app featuring Firebase real-time status tracker.',
  
  'what is your strongest frontend skill?': 
    'My strongest skill is building robust interfaces with **React.js, TypeScript, and Tailwind CSS**. I excel at creating highly performant layouts, writing type-safe components, integrating backend REST APIs, and implementing premium custom animations.',
  
  'how do you approach animation work?': 
    'I believe animations should feel premium, smooth, and intentional. I use **GSAP (GreenSock)** and **ScrollTrigger** for page transitions, **Lenis** for smooth inertia scrolling, and Canvas-based graphics to maintain 60 FPS performance without cluttering the browser layout.',
  
  'what are you open to next?': 
    'I am looking for **Frontend Developer, Full Stack Developer, or Software Engineer** internships and entry-level positions. I am ready to bring my React, TypeScript, and Node.js skills to a fast-paced development team!',
}
