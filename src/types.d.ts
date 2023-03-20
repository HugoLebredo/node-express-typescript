// export type Weather = 'sunny' | 'rainy' | 'cloudy' | 'windy' | 'stormy'

export interface DiaryEntry {
  id: number
  weather: Weather
  visibility: Visibility
  date: string
  comment: string
}

// Utilities de typescript

// export type NoSensitiveInfoDiaryEntry = Pick<DiaryEntry, 'id' | 'date' | 'visibility' | 'weather'>

export type NoSensitiveInfoDiaryEntry = Omit<DiaryEntry, 'comment'>
export type NewDiaryEntry = Omit<DiaryEntry, 'id'>
