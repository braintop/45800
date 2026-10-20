// ============================================
// משימות להדגמה.
//
// המשימות האלה נכנסות למשתמש הדמו ב-npm run seed:all.
//
// שימו לב לתערובת:
//   - שלוש עדיפויות
//   - חלק סגורות וחלק פתוחות
//   - חלק בעברית וחלק באנגלית
//
// זה לא קישוט. זה מה שמאפשר להדגים
// list_tasks עם status שונה, ולהראות
// שהמודל עובד באותה מידה בשתי השפות.
// ============================================

export type DemoTask = {
  title: string
  priority: 'low' | 'medium' | 'high'
  completed: boolean
}

export const demoTasks: DemoTask[] = [
  {
    title: 'Finish the quarterly report',
    priority: 'high',
    completed: false
  },
  {
    title: 'Call the supplier about the delayed shipment',
    priority: 'high',
    completed: false
  },
  {
    title: 'Update the FAQ page',
    priority: 'medium',
    completed: false
  },
  {
    title: 'Review the new refund policy draft',
    priority: 'medium',
    completed: false
  },
  {
    title: 'Buy milk',
    priority: 'low',
    completed: false
  },
  {
    title: 'לתאם פגישה עם רואה החשבון',
    priority: 'medium',
    completed: false
  },
  {
    title: 'להזמין מחשב נייד חדש לעובד החדש',
    priority: 'high',
    completed: false
  },
  {
    title: 'Order office supplies',
    priority: 'low',
    completed: true
  },
  {
    title: 'Send the invoice to the accountant',
    priority: 'medium',
    completed: true
  },
  {
    title: 'Book the meeting room for Thursday',
    priority: 'low',
    completed: true
  }
]
