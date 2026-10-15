import 'dotenv/config'

import {
  addDocument
} from './services/documentService'

import {
  splitIntoChunks
} from './services/chunkService'

// ============================================
// Bonus 1: הכנסת מסמך ארוך עם Chunking
//
// npm run seed:long
//
// כל Chunk נשמר כשורה נפרדת בטבלה,
// עם Embedding משלו.
// ============================================

const documentName = 'Employee Handbook'

const longText = `
Working hours. Employees work Sunday through Thursday from 09:00
to 18:00. A lunch break of 45 minutes is included in the working
day. Employees may start between 08:00 and 10:00 as long as they
complete a full working day.

Remote work. Every employee may work from home up to two days per
week. Remote days must be coordinated with the team leader at
least one day in advance. On team meeting days all employees are
expected to be in the office.

Vacation. Every employee receives 20 vacation days per year.
Vacation days must be approved by the direct manager. Unused
vacation days can be moved to the next year, up to a maximum of
10 days.

Sick leave. Sick days are paid from the first day. A medical
certificate is required starting from the third consecutive day
of absence.

Equipment. Every employee receives a laptop and a monitor. The
equipment stays the property of the company and must be returned
when the employee leaves. Personal use of the laptop is allowed
as long as it does not break the security policy.

Security. Passwords must not be shared between employees. API
keys must never be written inside the source code and must never
be uploaded to GitHub. Every employee must use two factor
authentication on the company accounts.

Travel. Business travel is approved in advance by the manager.
The company covers flights, hotel and a daily allowance of 60
dollars. Receipts must be submitted within 30 days of the return
date.
`

async function seedLong() {

  const chunks =
    splitIntoChunks(longText, 800, 100)

  console.log(
    `Document split into ${chunks.length} chunks`
  )

  for (let i = 0; i < chunks.length; i++) {

    // ה-title מציין גם את שם המסמך וגם את מספר החתיכה,
    // כדי שאפשר יהיה להציג Source ברור.
    const title =
      `${documentName} (part ${i + 1})`

    console.log(`Adding: ${title}`)

    await addDocument(
      title,
      chunks[i]
    )
  }

  console.log('')
  console.log('Long document added successfully')
}

seedLong().catch(error => {
  console.error(error)
  process.exit(1)
})
