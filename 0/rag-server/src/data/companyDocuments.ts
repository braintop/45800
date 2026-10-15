// ============================================
// 12 קטעי מידע על החברה.
// דרישת התרגיל: לפחות 10.
//
// שימו לב:
// המסמכים כתובים באנגלית "רגילה",
// ולא במילים המדויקות של השאלות.
// זו בדיוק הנקודה של Semantic Search.
// ============================================

export type CompanyDocument = {
  title: string
  content: string
}

export const companyDocuments: CompanyDocument[] = [
  {
    title: 'Company Policy',
    content:
      'BrainTop Electronics is an online store that sells laptops, ' +
      'tablets and accessories. Every employee and every customer ' +
      'is expected to be treated with respect. Customer data is ' +
      'never sold or shared with third parties.'
  },

  {
    title: 'Refund Policy',
    content:
      'Customers may return unopened products within 14 days of ' +
      'purchase and receive a full refund. Opened products can be ' +
      'returned within 7 days if they are undamaged. Refunds are ' +
      'issued to the original payment method within 5 business days.'
  },

  {
    title: 'Shipping Policy',
    content:
      'Orders are normally delivered within 3 to 5 business days. ' +
      'Express delivery arrives on the next business day for an ' +
      'extra fee of 29 shekels. Orders above 300 shekels are ' +
      'shipped for free.'
  },

  {
    title: 'Delivery Areas',
    content:
      'We deliver to every city in Israel. Deliveries to Eilat and ' +
      'to the Golan Heights may take two additional business days. ' +
      'We do not ship outside of Israel.'
  },

  {
    title: 'Warranty',
    content:
      'Electronic products include a one year warranty from the ' +
      'purchase date. The warranty covers manufacturing defects. ' +
      'It does not cover water damage, a broken screen or damage ' +
      'caused by the customer.'
  },

  {
    title: 'Support Hours',
    content:
      'Customer support is available Sunday through Thursday from ' +
      '09:00 to 17:00. On Friday support is available from 09:00 ' +
      'to 13:00. The office is closed on Saturday and on national ' +
      'holidays.'
  },

  {
    title: 'Technical Support',
    content:
      'Technical problems can be reported by email to ' +
      'support@braintop-electronics.example or by phone. ' +
      'A support ticket is normally answered within one business ' +
      'day. Urgent hardware failures are answered within 4 hours.'
  },

  {
    title: 'Payments',
    content:
      'We accept credit cards, PayPal and bank transfer. Payment ' +
      'in up to 12 installments is available for orders above 1000 ' +
      'shekels. Cash on delivery is not supported.'
  },

  {
    title: 'Cancellation Policy',
    content:
      'An order can be cancelled free of charge as long as it has ' +
      'not been shipped. After the order has been shipped the ' +
      'regular return policy applies and the shipping fee is not ' +
      'refunded.'
  },

  {
    title: 'Products',
    content:
      'Our catalog includes laptops from 2500 shekels, tablets ' +
      'from 900 shekels, monitors, keyboards, mice and headphones. ' +
      'Every product page shows the stock status in real time.'
  },

  {
    title: 'Working Hours',
    content:
      'The physical store in Tel Aviv is open Sunday through ' +
      'Thursday from 10:00 to 19:00 and on Friday from 09:00 to ' +
      '14:00. The online store accepts orders 24 hours a day.'
  },

  {
    title: 'Privacy',
    content:
      'We store only the details required to complete an order: ' +
      'name, address, phone number and email. Credit card numbers ' +
      'are handled by the payment provider and are never stored on ' +
      'our servers. A customer may ask to delete their account at ' +
      'any time.'
  }
]
