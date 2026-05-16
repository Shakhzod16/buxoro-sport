'use client'
import { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { NewsItem, Competition, Athlete, Document, Announcement, SportRegionResult, AthleteResult } from '@/types/models'

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
  {
    id: 1,
    title: "Jismoniy tarbiya va sport to'g'risidagi Qonun",
    category: 'Qonun',
    date: '2023',
    fileUrl: 'https://lex.uz/docs/-6243887',
  },
  {
    id: 2,
    title: 'Sport unvonlari berish reglamenti',
    category: 'Reglament',
    date: '2024',
    fileUrl: 'https://sport.uz/uz/documents',
  },
  {
    id: 3,
    title: 'Viloyat sport boshqarmasi nizomi',
    category: 'Buyruq',
    date: '2024',
    fileUrl: 'https://buxoro-sport.vercel.app/hujjatlar',
  },
]

const initialAnnouncements: Announcement[] = [
  { id: 1, title: 'Viloyat chempionati boshlandi', date: '2026-04-13', image: 'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=600&q=80', content: '' },
  { id: 2, title: "Xalqaro uloq-ko'pkari turniri", date: '2026-03-25', image: '', content: '' },
]

const initialResults: SportRegionResult[] = [
  {
    id: 1,
    sport: 'Boks',
    region: 'Toshkent viloyati',
    gold: 5,
    silver: 2,
    bronze: 6,
    createdAt: '2025-01-01',
    athletes: [
      { id: 1, name: "ABDUKADIROV ASILBEK ABDUMALIK O'G'LI", org: 'Chirchiq olimpiya va paralimpiya sport turlariga tayyorlash markazi', program: '60', photo: '', medal: 'oltin' },
      { id: 2, name: 'TURGUNOVA SAMIRA MADYAR QIZI', org: 'Chirchiq olimpiya va paralimpiya sport turlariga tayyorlash markazi', program: '75', photo: '', medal: 'oltin' },
      { id: 3, name: "IKROMOV ILG'ORJON ISAQJON-O'G'LI", org: 'Chirchiq olimpiya va paralimpiya sport turlariga tayyorlash markazi', program: '54', photo: '', medal: 'kumush' },
      { id: 4, name: 'Xusanova Mubina Zohid qizi', org: 'Sportning yakka kurash turlariga ixtisoslashtirilgan SM', program: '60', photo: '', medal: 'bronza' },
    ],
  },
  {
    id: 2,
    sport: 'Boks',
    region: 'Buxoro viloyati',
    gold: 1,
    silver: 2,
    bronze: 7,
    createdAt: '2025-01-01',
    athletes: [
      { id: 5, name: "Ibodulloev Asilbek Ilhom o'g'li", org: '"Qilichbozlik" federatsiyasi Buxoro viloyat bulimi', program: 'shpaga-jamoaviy', photo: '', medal: 'oltin' },
      { id: 6, name: 'Yusupov Sherzod Bahodir', org: 'Buxoro viloyat sport maktabi', program: '60', photo: '', medal: 'kumush' },
      { id: 7, name: 'Toshmatov Akbar Rustam', org: 'Buxoro viloyat sport maktabi', program: '69', photo: '', medal: 'bronza' },
    ],
  },
]

// ── CONTEXT TYPE ──────────────────────────────
interface DataContextType {
  news: NewsItem[]
  competitions: Competition[]
  athletes: Athlete[]
  documents: Document[]
  announcements: Announcement[]
  results: SportRegionResult[]

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

  addResult: (item: Omit<SportRegionResult, 'id' | 'createdAt'>) => void
  updateResult: (id: number, item: Partial<SportRegionResult>) => void
  deleteResult: (id: number) => void
  addAthleteToResult: (resultId: number, athlete: Omit<AthleteResult, 'id'>) => void
  removeAthleteFromResult: (resultId: number, athleteId: number) => void
}

const DataContext = createContext<DataContextType | null>(null)

function saveData<T>(key: string, data: T[]) {
  if (typeof window !== 'undefined') {
    localStorage.setItem(key, JSON.stringify(data))
  }
}

function saveResults(data: SportRegionResult[]) {
  if (typeof window !== 'undefined') {
    localStorage.setItem('bxs_results', JSON.stringify(data))
  }
}

// ── PROVIDER ──────────────────────────────────
export function DataProvider({ children }: { children: ReactNode }) {
  const [news, setNews] = useState<NewsItem[]>(initialNews)
  const [competitions, setCompetitions] = useState<Competition[]>(initialCompetitions)
  const [athletes, setAthletes] = useState<Athlete[]>(initialAthletes)
  const [documents, setDocuments] = useState<Document[]>(initialDocuments)
  const [announcements, setAnnouncements] = useState<Announcement[]>(initialAnnouncements)
  const [results, setResults] = useState<SportRegionResult[]>(initialResults)

  useEffect(() => {
    /* eslint-disable react-hooks/set-state-in-effect -- one-time hydrate from localStorage on mount */
    const savedNews = localStorage.getItem('bxs_news')
    if (savedNews) { try { setNews(JSON.parse(savedNews)) } catch {} }

    const savedComps = localStorage.getItem('bxs_competitions')
    if (savedComps) { try { setCompetitions(JSON.parse(savedComps)) } catch {} }

    const savedAthletes = localStorage.getItem('bxs_athletes')
    if (savedAthletes) { try { setAthletes(JSON.parse(savedAthletes)) } catch {} }

    const savedDocs = localStorage.getItem('bxs_documents')
    if (savedDocs) { try { setDocuments(JSON.parse(savedDocs)) } catch {} }

    const savedAnn = localStorage.getItem('bxs_announcements')
    if (savedAnn) { try { setAnnouncements(JSON.parse(savedAnn)) } catch {} }

    const savedResults = localStorage.getItem('bxs_results')
    if (savedResults) { try { setResults(JSON.parse(savedResults)) } catch {} }
    /* eslint-enable react-hooks/set-state-in-effect */
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

  // ── SPORT REGION RESULTS CRUD ──
  const addResult = (item: Omit<SportRegionResult, 'id' | 'createdAt'>) => {
    const athletes = item.athletes
    const newItem: SportRegionResult = {
      ...item,
      id: Date.now(),
      athletes,
      gold: athletes.filter(a => a.medal === 'oltin').length,
      silver: athletes.filter(a => a.medal === 'kumush').length,
      bronze: athletes.filter(a => a.medal === 'bronza').length,
      createdAt: new Date().toLocaleDateString('uz-UZ'),
    }
    const updated = [newItem, ...results]
    setResults(updated)
    saveResults(updated)
  }

  const updateResult = (id: number, item: Partial<SportRegionResult>) => {
    const updated = results.map(r => {
      if (r.id !== id) return r
      const merged = { ...r, ...item }
      const athletes = item.athletes ?? r.athletes
      return {
        ...merged,
        athletes,
        gold: athletes.filter(a => a.medal === 'oltin').length,
        silver: athletes.filter(a => a.medal === 'kumush').length,
        bronze: athletes.filter(a => a.medal === 'bronza').length,
      }
    })
    setResults(updated)
    saveResults(updated)
  }

  const deleteResult = (id: number) => {
    const updated = results.filter(r => r.id !== id)
    setResults(updated)
    saveResults(updated)
  }

  const addAthleteToResult = (resultId: number, athlete: Omit<AthleteResult, 'id'>) => {
    const newAthlete: AthleteResult = { ...athlete, id: Date.now() }
    const updated = results.map(r => {
      if (r.id !== resultId) return r
      const athletes = [...r.athletes, newAthlete]
      return {
        ...r,
        athletes,
        gold: athletes.filter(a => a.medal === 'oltin').length,
        silver: athletes.filter(a => a.medal === 'kumush').length,
        bronze: athletes.filter(a => a.medal === 'bronza').length,
      }
    })
    setResults(updated)
    saveResults(updated)
  }

  const removeAthleteFromResult = (resultId: number, athleteId: number) => {
    const updated = results.map(r => {
      if (r.id !== resultId) return r
      const athletes = r.athletes.filter(a => a.id !== athleteId)
      return {
        ...r,
        athletes,
        gold: athletes.filter(a => a.medal === 'oltin').length,
        silver: athletes.filter(a => a.medal === 'kumush').length,
        bronze: athletes.filter(a => a.medal === 'bronza').length,
      }
    })
    setResults(updated)
    saveResults(updated)
  }

  return (
    <DataContext.Provider value={{
      news, competitions, athletes, documents, announcements, results,
      addNews, updateNews, deleteNews,
      addCompetition, updateCompetition, deleteCompetition,
      addAthlete, deleteAthlete,
      addDocument, deleteDocument,
      addAnnouncement, deleteAnnouncement,
      addResult, updateResult, deleteResult,
      addAthleteToResult, removeAthleteFromResult,
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
