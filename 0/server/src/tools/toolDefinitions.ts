import { Type } from '@google/genai'

// ============================================
// הכלים שהמודל רשאי לבקש.
//
// שלושה דברים לכל כלי:
//   name        - מה נקבל בחזרה כשהוא יבחר בו
//   description - מתי להשתמש בו. החלק החשוב ביותר.
//   parameters  - אילו ארגומנטים, ובאיזה טיפוס
//
// המודל לא רואה את הקוד שלנו.
// הוא מחליט לפי התיאור בלבד.
// ============================================

export const searchDocumentsTool = {

  name: 'search_documents',

  description:
    'Search the company knowledge base ' +
    'for policies, shipping, warranty, ' +
    'refunds, payments and support hours. ' +
    'Use this for general questions about ' +
    'the company. ' +
    'Do NOT use this for questions about ' +
    'the user own tasks.',

  parameters: {

    type: Type.OBJECT,

    properties: {

      question: {
        type: Type.STRING,

        description:
          'The user question, in English'
      }
    },

    required: ['question']
  }
}


export const createTaskTool = {

  name: 'create_task',

  description:
    'Create a new task for the current ' +
    'user. Use this when the user asks to ' +
    'add, create or remember something ' +
    'to do.',

  parameters: {

    type: Type.OBJECT,

    properties: {

      title: {
        type: Type.STRING,
        description: 'Short task title'
      },

      priority: {
        type: Type.STRING,

        enum: ['low', 'medium', 'high'],

        description:
          'How urgent the task is. ' +
          'Default is medium.'
      }
    },

    required: ['title', 'priority']
  }
}


export const listTasksTool = {

  name: 'list_tasks',

  description:
    'Get the tasks of the current user. ' +
    'Use this when the user asks what they ' +
    'need to do, what is open, or what is ' +
    'left.',

  parameters: {

    type: Type.OBJECT,

    properties: {

      status: {
        type: Type.STRING,

        enum: ['open', 'done', 'all'],

        description:
          'Which tasks to return. ' +
          'Default is open.'
      }
    },

    // ריק בכוונה:
    // המודל יכול לקרוא לכלי הזה גם בלי פרמטרים
    required: []
  }
}


export const allTools = [
  searchDocumentsTool,
  createTaskTool,
  listTasksTool
]
