// ============================================
// Bonus 1: Chunking
//
// מסמך קצר אפשר להכניס כמו שהוא.
// מסמך של 20 עמודים - לא.
//
// למה?
// 1. Embedding אחד לכל המסמך "מרח" את המשמעות.
// 2. ה-Context שנשלח ל-Gemini יהיה ענק ויקר.
//
// לכן חותכים את המסמך לחתיכות,
// וכל חתיכה מקבלת Embedding משלה.
// ============================================

export function splitIntoChunks(
  text: string,
  chunkSize: number = 800,
  overlap: number = 100
): string[] {

  if (chunkSize <= overlap) {
    throw new Error(
      'chunkSize must be bigger than overlap'
    )
  }

  const chunks: string[] = []

  // ה-step קטן מ-chunkSize,
  // ולכן כל chunk חופף במעט לקודם.
  // כך משפט שנחתך בדיוק בגבול לא הולך לאיבוד.
  const step = chunkSize - overlap

  for (
    let i = 0;
    i < text.length;
    i += step
  ) {

    const chunk =
      text
        .slice(i, i + chunkSize)
        .trim()

    if (chunk.length > 0) {
      chunks.push(chunk)
    }
  }

  return chunks
}
