import { sql } from '../db'

// ============================================
// taskService
//
// קוד רגיל לגמרי. אין כאן AI.
// אלה הפונקציות שהכלים מפעילים.
//
// שימו לב: כל פונקציה מקבלת userId כארגומנט ראשון,
// והוא נכנס לתוך ה-WHERE.
// ============================================

export type Task = {
  task_id: number
  title: string
  priority: 'low' | 'medium' | 'high'
  completed: boolean
}

export const PRIORITIES = [
  'low',
  'medium',
  'high'
]

export async function createTask(
  userId: number,
  title: string,
  priority: string
): Promise<Task> {

  const rows = await sql`
    INSERT INTO tasks (
      user_id,
      title,
      priority
    )
    VALUES (
      ${userId},
      ${title},
      ${priority}
    )
    RETURNING
      task_id,
      title,
      priority,
      completed
  `

  return rows[0] as Task
}


export async function listTasks(
  userId: number,
  status: string = 'open'
): Promise<Task[]> {

  // שלוש שאילתות נפרדות ולא הרכבת מחרוזת,
  // כי status מגיע מהמודל.
  if (status === 'all') {

    const rows = await sql`
      SELECT task_id, title, priority, completed
      FROM tasks
      WHERE user_id = ${userId}
      ORDER BY task_id DESC
    `

    return rows as Task[]
  }

  const completed = status === 'done'

  const rows = await sql`
    SELECT task_id, title, priority, completed
    FROM tasks
    WHERE
      user_id = ${userId}
      AND completed = ${completed}
    ORDER BY task_id DESC
  `

  return rows as Task[]
}
