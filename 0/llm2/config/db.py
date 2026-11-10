import os 
import mysql.connector

def get_connection():
    return mysql.connector.connect(
        host=os.getenv('DB_HOST', '127.0.0.1'),
        port=int(os.getenv('DB_PORT', '3306')),
        user=os.getenv('DB_USER', 'appuser'),
        password=os.getenv('DB_PASSWORD', ''),
        database=os.getenv('DB_NAME', 'school_db'),
    )
