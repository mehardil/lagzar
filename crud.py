from database import get_connection

# Create a user
def create_user(full_name, email, password, phone_number, address):
    conn = get_connection()
    cursor = conn.cursor()
    query = "INSERT INTO users (full_name, email, password, phone_number, address) VALUES (%s, %s, %s, %s, %s)"
    cursor.execute(query, (full_name, email, password, phone_number, address))
    conn.commit()
    cursor.close()
    conn.close()
    return {"message": "User created successfully"}

# Get all users
def get_all_users():
    conn = get_connection()
    cursor = conn.cursor(dictionary=True)
    cursor.execute("SELECT * FROM users")
    users = cursor.fetchall()
    cursor.close()
    conn.close()
    return users

# Get all products
def get_all_products():
    conn = get_connection()
    cursor = conn.cursor(dictionary=True)
    cursor.execute("SELECT * FROM products")
    products = cursor.fetchall()
    cursor.close()
    conn.close()
    return products
