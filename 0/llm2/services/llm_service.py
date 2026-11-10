import os 
import json 
from google import genai
from google.genai import types

client = genai.Client(
    api_key=os.getenv('GEMINI_API_KEY'),

    # חובה. בלי השורה הזאת system_instruction
    # נדחה בשגיאה:
    #   Developer instruction is not enabled
    #   for api version v1
    http_options=types.HttpOptions(
        api_version='v1beta'
    )
)
MODEL = os.getenv(
    'GEMINI_MODEL',
    'gemini-2.5-flash'
)
# --------------------------------------------
# שיעור 1: שאלה חופשית, תשובה חופשית
# --------------------------------------------
def ask_llm(message):
    response = client.models.generate_content(
        model=MODEL,
        contents=message
    )

    return response.text or ''


SYSTEM_INSTRUCTION = """
You extract structured task data
from user requests.

Rules:

1. title must be short and clear.

2. priority must be:
   low, medium or high.

3. If priority is not specified,
   use medium.

4. category must be:
   study, work, personal or other.

5. Infer the category from context.

6. If no category can be inferred,
   use other.
"""

TASK_SCHEMA = {
    'type': 'OBJECT',

    'properties': {
        'title': {
            'type': 'STRING'
        },

        'priority': {
            'type': 'STRING',
            'enum': ['low', 'medium', 'high']
        },

        'category': {
            'type': 'STRING',
            'enum': ['study', 'work',
                     'personal', 'other']
        }
    },

    'required': ['title', 'priority', 'category']
}


def extract_task(message):

    response = client.models.generate_content(
        model=MODEL,
        contents=message,
        config=types.GenerateContentConfig(
            system_instruction=SYSTEM_INSTRUCTION,
            # שתי השורות יחד מכריחות את המודל
            # להחזיר JSON לפי הסכמה
            response_mime_type='application/json',
            response_schema=TASK_SCHEMA
        )
    )

    return json.loads(response.text or '{}') 



