import express from 'express'

import {
  ask,
  search,
  list,
  searchOne,
  addNewDocument
} from '../controllers/ragController'

const router = express.Router()

// POST /api/rag/ask      - השאלה המלאה, RAG מלא
router.post('/ask', ask)

// POST /api/rag/search   - Vector Search בלבד, לבדיקה
router.post('/search', search)
router.post('/search-one', searchOne)
// GET  /api/rag/documents - רשימת המסמכים שנשמרו
router.get('/documents', list)
router.post("/add-document", addNewDocument)
export default router


