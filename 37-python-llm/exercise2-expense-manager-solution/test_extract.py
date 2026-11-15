# שלב 5: בדיקה ישירות מהטרמינל, לפני Controller ו-Route
# הרצה:  python test_extract.py

from dotenv import load_dotenv

load_dotenv()

from services.llm_service import extract_expense
from controllers.expense_controller import is_valid_expense

for m in [
    'שילמתי 340 שקל על דלק אתמול',
    'קניתי פיצה ב-65 שקל במזומן',
    'I paid 1200 for electricity',
    'bought a movie ticket for 45',
]:
    expense = extract_expense(m)
    print(m)
    print('   ', expense)
    print('    amount type:', type(expense.get('amount')).__name__,
          '| valid:', is_valid_expense(expense))
