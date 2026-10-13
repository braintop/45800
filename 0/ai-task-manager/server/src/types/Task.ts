export type Task = {
  task_id: number
  title: string
  priority: 'low' | 'medium' | 'high'
  category: string
  user_id: number
}

export type NewTask = {
  title: string
  priority: 'low' | 'medium' | 'high'
  category: string
}
