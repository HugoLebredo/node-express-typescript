import express from 'express'

import * as diaryServices from '../services/diary'
import toNewDiaryEntry from '../utils'

const router = express.Router()

router.get('/', (_req, res) => {
  res.send(diaryServices.getEntriesWithoutSensibleInfo())
})

router.get('/:id', (req, res) => {
  const diary = diaryServices.getEntry(+req.params.id)
  return (diary != null) ? res.send(diary) : res.status(404)
})

router.post('/', (req, res) => {
  const newEntry = toNewDiaryEntry(req.body)
  diaryServices.addEntry(newEntry)
  res.json(newEntry)
})

export default router
