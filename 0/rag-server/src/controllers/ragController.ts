import {
  Request,
  Response
} from 'express'

import {
  askDocuments,
} from '../services/ragService'
import { addDocument } from '../services/documentService'
import {
  getAllDocuments,
  searchDocuments
} from '../services/documentService'

// ============================================
// ragController
//
// האחריות: Request, Validation, Response.
// אין כאן קוד של Gemini ואין כאן SQL.
// ============================================

export async function ask(
  req: Request,
  res: Response
) {

  try {

    const { question } = req.body

    if (
      !question ||
      typeof question !== 'string' ||
      question.trim().length === 0
    ) {

      return res
        .status(400)
        .json({
          error: 'Question is required'
        })
    }

    const result =
      await askDocuments(
        question.trim()
      )

    // ההחזרה כוללת גם sources,
    // כדי שהמשתמש יוכל לדעת מאיפה הגיעה התשובה.
    res.json(result)

  } catch (error) {

    console.error(error)

    res.status(500).json({
      error: 'Failed to answer question'
    })
  }
}


// Endpoint עזר לבדיקה בלבד.
// מאפשר לראות את תוצאות ה-Vector Search
// בלי לשלוח כלום ל-Gemini.
export async function search(
  req: Request,
  res: Response
) {

  try {

    const { question, limit } = req.body

    if (
      !question ||
      typeof question !== 'string'
    ) {

      return res
        .status(400)
        .json({
          error: 'Question is required'
        })
    }

    const documents =
      await searchDocuments(
        question,
        Number(limit) || 3
      )

    res.json(
      documents.map(document => ({
        document_id: document.document_id,
        title: document.title,
        distance: document.distance
      }))
    )

  } catch (error) {

    console.error(error)

    res.status(500).json({
      error: 'Search failed'
    })
  }
}


export async function list(
  _req: Request,
  res: Response
) {

  try {

    const documents =
      await getAllDocuments()

    res.json(documents)

  } catch (error) {

    console.error(error)

    res.status(500).json({
      error: 'Failed to load documents'
    })
  }
}

export async function searchOne(
  req: Request,
  res: Response
) {
  try {

    const { question } = req.body

    if (!question || typeof question !== 'string') {
      return res.status(400).json({
        error: 'Question is required'
      })
    }

    const documents = await searchDocuments(
      question,
      1
    )

    if (documents.length === 0) {
      return res.status(404).json({
        error: 'No relevant document found'
      })
    }

    res.json({
      title: documents[0].title,
      distance: documents[0].distance
    })

  } catch (error) {

    console.error(error)

    res.status(500).json({
      error: 'Search failed'
    })
  }
}


export async function addNewDocument(
  req: Request,
  res: Response
) {
  try {

    const { title, content } = req.body
    if (!title || !content) {
      return res.status(400).json({
        error: 'Title and content are required'
      })
    }
    try {
      const document = await addDocument(
        title,
        content
      )
      res.status(201).json(document)
    } catch (error) {
      console.error(error)
      res.status(500).json({
        error: "Failed to add document"
      })
    }
  } catch (error) {

    console.error(error)

    res.status(500).json({
      error: "Failed to add document"
    })
  }
}


