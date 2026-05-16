export interface NewsItem {
  id: number
  title: string
  category: string
  date: string
  content: string
  image: string
  status: 'active' | 'draft'
  views: number
}

export interface Competition {
  id: number
  title: string
  sport: string
  date: string
  location: string
  status: 'upcoming' | 'ongoing' | 'finished'
}

export interface Athlete {
  id: number
  name: string
  sport: string
  medal: 'Oltin' | 'Kumush' | 'Bronza'
  year: number
  image: string
}

export interface Document {
  id: number
  title: string
  category: 'Qonun' | 'Buyruq' | 'Reglament'
  date: string
  fileUrl: string
}

export interface Announcement {
  id: number
  title: string
  date: string
  image: string
  content: string
}

export interface AthleteResult {
  id: number
  name: string
  org: string
  program: string
  photo: string
  medal: 'oltin' | 'kumush' | 'bronza'
}

export interface SportRegionResult {
  id: number
  sport: string
  region: string
  gold: number
  silver: number
  bronze: number
  athletes: AthleteResult[]
  createdAt: string
}
