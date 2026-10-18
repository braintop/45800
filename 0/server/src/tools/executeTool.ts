import { askDocuments } from '../services/ragService'

import {
  createTask,
  listTasks,
  PRIORITIES
} from '../services/taskService'

// ============================================
// executeTool
//
// זו נקודת האבטחה של המערכת.
//
// המודל בוחר מה. הקוד הזה קובע למי, ואם בכלל.
//
// שלוש נקודות:
//   1. switch מפורש. שם שלא ברשימה זורק שגיאה.
//   2. userId מגיע מהשרת, לא מתוך args.
//   3. ולידציה על כל ארגומנט לפני נגיעה במסד.
// ============================================

export type ToolResult =
  | { ok: true; data: unknown }
  | { ok: false; error: string }

export async function executeTool(
  name: string,
  args: any,
  userId: number
): Promise<ToolResult> {

  switch (name) {

    case 'search_documents': {

      if (
        typeof args?.question !== 'string' ||
        args.question.trim().length === 0
      ) {
        return {
          ok: false,
          error: 'question must be a non empty string'
        }
      }

      const result =
        await askDocuments(args.question)

      return { ok: true, data: result }
    }

    case 'create_task': {

      const title = args?.title

      const priority = args?.priority

      if (
        typeof title !== 'string' ||
        title.trim().length === 0
      ) {
        return {
          ok: false,
          error: 'title must be a non empty string'
        }
      }

      if (!PRIORITIES.includes(priority)) {
        return {
          ok: false,
          error:
            'priority must be low, medium or high'
        }
      }

      const task =
        await createTask(
          userId,
          title.trim(),
          priority
        )

      return { ok: true, data: task }
    }

    case 'list_tasks': {

      const status = args?.status ?? 'open'

      if (
        !['open', 'done', 'all'].includes(status)
      ) {
        return {
          ok: false,
          error:
            'status must be open, done or all'
        }
      }

      const tasks =
        await listTasks(userId, status)

      return { ok: true, data: tasks }
    }

    default:
      return {
        ok: false,
        error: `Unknown tool: ${name}`
      }
  }
}
