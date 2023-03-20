import { DiaryEntry, NoSensitiveInfoDiaryEntry, NewDiaryEntry } from '../types'
import diaryData from './diariesData.json'

const diaries: DiaryEntry[] = diaryData as DiaryEntry[]

export const getEntries = (): DiaryEntry[] => diaries

export const getEntriesWithoutSensibleInfo = (): NoSensitiveInfoDiaryEntry[] => {
  return diaries.map(({ id, visibility, date, weather }) => {
    return { id, visibility, date, weather }
  }
  )
}

export const getEntry = (id: number): NoSensitiveInfoDiaryEntry | undefined => {
  const entry = diaries.find(d => d.id === id)

  if (entry != null) {
    const { comment, ...restOfEntry } = entry
    return restOfEntry
  }
  return undefined
}

export const addEntry = (entry: NewDiaryEntry): DiaryEntry => {
  const newEntry = {
    ...entry,
    id: Math.max(...diaries.map(d => d.id)) + 1
  }

  diaries.push(newEntry)

  return newEntry
}
