
"""in this file we will make connection with database"""
import os
from dotenv import load_dotenv
import mysql.connector
load_dotenv()
def get_connection():
    db_config = {
        "host": os.getenv("DB_HOST"),
        "user": os.getenv("DB_USER"),
        "password": os.getenv("DB_PASSWORD"),
        "database": os.getenv("DB_NAME")
    }
    conn = mysql.connector.connect(**db_config)
    if conn.is_connected():
        print("Connected to the database successfully")
    return conn
