import { NewDiaryEntry } from './types'
import { Weather, Visibility } from './enums'

const parseComment = (commentFromRequest: any): string => {
  if (!isString(commentFromRequest)) {
    throw new Error('Incorrect or missing comment')
  }
  return commentFromRequest
}

const parseDate = (dateFromRequest: any): string => {
  if (!isString(dateFromRequest) || !isDate(dateFromRequest)) {
    throw new Error('Incorrect or missing date')
  }
  return dateFromRequest
}

const parseWeather = (weatherFromRequest: any): Weather => {
  if (!isString(weatherFromRequest) || !isWeather(weatherFromRequest)) {
    throw Error('Incorrect or missing weather')
  }
  return weatherFromRequest
}

const parseVisibility = (visibilityFromRequest: any): Visibility => {
  if (!isString(visibilityFromRequest) || !isVisibility(visibilityFromRequest)) {
    throw Error('Incorrect or missing visibility')
  }
  return visibilityFromRequest
}

const isString = (string: string): boolean => typeof (string) === 'string'

const isDate = (date: string): boolean => Boolean(Date.parse(date))

const isWeather = (param: any): boolean => Object.values(Weather).includes(param)

const isVisibility = (param: any): boolean => Object.values(Visibility).includes(param)

const toNewDiaryEntry = (object: any): NewDiaryEntry => {
  const newEntry: NewDiaryEntry = {
    comment: parseComment(object.comment),
    date: parseDate(object.date),
    visibility: parseVisibility(object.visibility),
    weather: parseWeather(object.weather)
  }
  return newEntry
}

export default toNewDiaryEntry
