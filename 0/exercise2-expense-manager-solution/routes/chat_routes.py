from flask import Blueprint
from controllers.chat_controller import ChatController

chat_bp = Blueprint('chat', __name__)

chat_bp.post('/chat')(ChatController.chat)






