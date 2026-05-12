'use client'
import { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { NewsItem, Competition, Athlete, Document, Announcement } from '@/types/models'

// ── INITIAL DATA ──────────────────────────────
const initialNews: NewsItem[] = [
  { id: 1, title: "Buxoroda yoshlar birinchiligi yakunlandi", category: 'Musobaqa', date: '11 May 2026', content: "Buxoro viloyatida yoshlar o'rtasida musobaqa muvaffaqiyatli o'tkazildi.", image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=400&q=80', status: 'active', views: 124 },
  { id: 2, title: "Sport maktablarida yozgi tayyorgarlik boshlandi", category: 'Tadbir', date: '8 May 2026', content: "Viloyat sport maktablarida yozgi tayyorgarlik mashg'ulotlari boshlandi.", image: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?w=400&q=80', status: 'active', views: 98 },
  { id: 3, title: "Respublika chempionatida 12 ta medal", category: 'Yangilik', date: '5 May 2026', content: "Buxoro sportchilari respublika chempionatida 12 ta medal qo'lga kiritdi.", image: 'https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?w=400&q=80', status: 'active', views: 211 },
]

const initialCompetitions: Competition[] = [
  { id: 1, title: "Viloyat kurash chempionati", sport: 'Kurash', date: '20 May 2026', location: 'Buxoro shahri', status: 'upcoming' },
  { id: 2, title: "Yoshlar boks turniri", sport: 'Boks', date: '15 May 2026', location: "G'ijduvon tumani", status: 'upcoming' },
  { id: 3, title: "Respublika judo chempionati", sport: 'Judo', date: '1 May 2026', location: 'Toshkent', status: 'finished' },
]

const initialAthletes: Athlete[] = [
  { id: 1, name: 'Azizbek Salohiddinov', sport: 'Para armrestling', medal: 'Oltin', year: 2024, image: '' },
  { id: 2, name: 'Nodira Xolmatova', sport: 'Judo', medal: 'Kumush', year: 2024, image: '' },
  { id: 3, name: 'Sherzod Toshmatov', sport: 'Boks', medal: 'Oltin', year: 2025, image: '' },
  { id: 4, name: 'Mahliyo Ergasheva', sport: 'Taekwondo', medal: 'Bronza', year: 2025, image: '' },
]

const initialDocuments: Document[] = [
  { id: 1, title: "Jismoniy tarbiya va sport to'g'risidagi Qonun", category: 'Qonun', date: '2023', fileUrl: '#' },
  { id: 2, title: 'Sport unvonlari berish reglamenti', category: 'Reglament', date: '2024', fileUrl: '#' },
  { id: 3, title: 'Viloyat sport boshqarmasi nizomi', category: 'Buyruq', date: '2024', fileUrl: '#' },
]

const initialAnnouncements: Announcement[] = [
  { id: 1, title: 'Viloyat chempionati boshlandi', date: '2026-04-13', image: 'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=600&q=80', content: '' },
  { id: 2, title: "Xalqaro uloq-ko'pkari turniri", date: '2026-03-25', image: '', content: '' },
]

// ── CONTEXT TYPE ──────────────────────────────
interface DataContextType {
  news: NewsItem[]
  competitions: Competition[]
  athletes: Athlete[]
  documents: Document[]
  announcements: Announcement[]

  addNews: (item: Omit<NewsItem, 'id' | 'views'>) => void
  updateNews: (id: number, item: Partial<NewsItem>) => void
  deleteNews: (id: number) => void

  addCompetition: (item: Omit<Competition, 'id'>) => void
  updateCompetition: (id: number, item: Partial<Competition>) => void
  deleteCompetition: (id: number) => void

  addAthlete: (item: Omit<Athlete, 'id'>) => void
  deleteAthlete: (id: number) => void

  addDocument: (item: Omit<Document, 'id'>) => void
  deleteDocument: (id: number) => void

  addAnnouncement: (item: Omit<Announcement, 'id'>) => void
  deleteAnnouncement: (id: number) => void
}

const DataContext = createContext<DataContextType | null>(null)

// ── HELPER: load from localStorage ────────────
function loadData<T>(key: string, fallback: T[]): T[] {
  if (typeof window === 'undefined') return fallback
  try {
    const saved = localStorage.getItem(key)
    return saved ? JSON.parse(saved) : fallback
  } catch { return fallback }
}

function saveData<T>(key: string, data: T[]) {
  if (typeof window !== 'undefined') {
    localStorage.setItem(key, JSON.stringify(data))
  }
}

// ── PROVIDER ──────────────────────────────────
export function DataProvider({ children }: { children: ReactNode }) {
  const [news, setNews] = useState<NewsItem[]>([])
  const [competitions, setCompetitions] = useState<Competition[]>([])
  const [athletes, setAthletes] = useState<Athlete[]>([])
  const [documents, setDocuments] = useState<Document[]>([])
  const [announcements, setAnnouncements] = useState<Announcement[]>([])

  // Load from localStorage on mount
  useEffect(() => {
    setNews(loadData('bxs_news', initialNews))
    setCompetitions(loadData('bxs_competitions', initialCompetitions))
    setAthletes(loadData('bxs_athletes', initialAthletes))
    setDocuments(loadData('bxs_documents', initialDocuments))
    setAnnouncements(loadData('bxs_announcements', initialAnnouncements))
  }, [])

  // ── NEWS CRUD ──
  const addNews = (item: Omit<NewsItem, 'id' | 'views'>) => {
    const newItem = { ...item, id: Date.now(), views: 0 }
    const updated = [newItem, ...news]
    setNews(updated); saveData('bxs_news', updated)
  }
  const updateNews = (id: number, item: Partial<NewsItem>) => {
    const updated = news.map(n => n.id === id ? { ...n, ...item } : n)
    setNews(updated); saveData('bxs_news', updated)
  }
  const deleteNews = (id: number) => {
    const updated = news.filter(n => n.id !== id)
    setNews(updated); saveData('bxs_news', updated)
  }

  // ── COMPETITIONS CRUD ──
  const addCompetition = (item: Omit<Competition, 'id'>) => {
    const updated = [{ ...item, id: Date.now() }, ...competitions]
    setCompetitions(updated); saveData('bxs_competitions', updated)
  }
  const updateCompetition = (id: number, item: Partial<Competition>) => {
    const updated = competitions.map(c => c.id === id ? { ...c, ...item } : c)
    setCompetitions(updated); saveData('bxs_competitions', updated)
  }
  const deleteCompetition = (id: number) => {
    const updated = competitions.filter(c => c.id !== id)
    setCompetitions(updated); saveData('bxs_competitions', updated)
  }

  // ── ATHLETES CRUD ──
  const addAthlete = (item: Omit<Athlete, 'id'>) => {
    const updated = [{ ...item, id: Date.now() }, ...athletes]
    setAthletes(updated); saveData('bxs_athletes', updated)
  }
  const deleteAthlete = (id: number) => {
    const updated = athletes.filter(a => a.id !== id)
    setAthletes(updated); saveData('bxs_athletes', updated)
  }

  // ── DOCUMENTS CRUD ──
  const addDocument = (item: Omit<Document, 'id'>) => {
    const updated = [{ ...item, id: Date.now() }, ...documents]
    setDocuments(updated); saveData('bxs_documents', updated)
  }
  const deleteDocument = (id: number) => {
    const updated = documents.filter(d => d.id !== id)
    setDocuments(updated); saveData('bxs_documents', updated)
  }

  // ── ANNOUNCEMENTS CRUD ──
  const addAnnouncement = (item: Omit<Announcement, 'id'>) => {
    const updated = [{ ...item, id: Date.now() }, ...announcements]
    setAnnouncements(updated); saveData('bxs_announcements', updated)
  }
  const deleteAnnouncement = (id: number) => {
    const updated = announcements.filter(a => a.id !== id)
    setAnnouncements(updated); saveData('bxs_announcements', updated)
  }

  return (
    <DataContext.Provider value={{
      news, competitions, athletes, documents, announcements,
      addNews, updateNews, deleteNews,
      addCompetition, updateCompetition, deleteCompetition,
      addAthlete, deleteAthlete,
      addDocument, deleteDocument,
      addAnnouncement, deleteAnnouncement,
    }}>
      {children}
    </DataContext.Provider>
  )
}

export function useData() {
  const ctx = useContext(DataContext)
  if (!ctx) throw new Error('useData must be used within DataProvider')
  return ctx
}
