from flask import jsonify, request

from services.llm_service import ask_llm


class ChatController:

    @staticmethod
    def chat():
        try:
            data = request.get_json(silent=True) or {}
            message = data.get('message')

            if not message:
                return jsonify(
                    {'error': 'Message is required'}
                ), 400

            return jsonify({'answer': ask_llm(message)})

        except Exception as error:
            print(error)
            return jsonify(
                {'error': 'Failed to get AI response'}
            ), 500
