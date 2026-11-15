from flask import jsonify, request

from services.llm_service import ask_llm


class ChatController:

    @staticmethod
    def chat():
        try:
            data = request.get_json(silent=True) or {}
            message = data.get('message')

            if not message:
                return jsonify({'error': 'Message is required'}), 400

            answer = ask_llm(message)
            return jsonify({'answer': answer})

        except Exception as error:
            # מדפיסים לשרת, לא מחזירים ללקוח.
            # str(e) יכול לחשוף פרטים פנימיים.
            print(error)
            return jsonify({'error': 'Failed to get AI response'}), 500
