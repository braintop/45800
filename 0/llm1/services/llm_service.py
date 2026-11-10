import os

from google import genai
from google.genai import types

client = genai.Client(
    api_key=os.getenv("GEMINI_API_KEY"),
    http_options=types.HttpOptions(
        api_version="v1beta"
    )
)

MODEL = os.getenv("GEMINI_MODEL", "gemini-2.5-flash")


def ask_llm(message):
    response = client.models.generate_content(
        model=MODEL,
        contents=message
    )
    return response.text or ''
