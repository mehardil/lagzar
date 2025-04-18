from database import get_connection
from datetime import datetime

def insert_user_detials(order_info):
    """Insert or update information related to the order/user"""
    conn = get_connection()
    cursor = conn.cursor()
    try:
        # Extract data from order_info
        full_name = f"{order_info.first_name} {order_info.last_name}"
        email = order_info.contact
        password = "default_password"
        phone_number = order_info.phone
        city = order_info.city
        postal_code = order_info.postal_code
        price = order_info.price
        print(price ,"here is price")
        address = f"{order_info.address}, {order_info.apartment}, {order_info.city}, {order_info.postal_code}"

        # Check if user exists by phone number
        check_query = """SELECT id FROM users WHERE phone_number = %s"""
        cursor.execute(check_query, (phone_number,))
        user = cursor.fetchone()

        if user:
            update_query = """UPDATE users 
                SET full_name = %s, password = %s, address = %s, city = %s, postal_code = %s
                WHERE email = %s AND phone_number = %s
            """
            cursor.execute(update_query, (full_name, password, address, city, postal_code, email, phone_number))
            print("User updated.")
        else:
            
            insert_query = """
                INSERT INTO users (full_name, email, password, phone_number, address, city, postal_code)
                VALUES (%s, %s, %s, %s, %s, %s, %s)
            """
            cursor.execute(insert_query, (full_name, email, password, phone_number, address, city, postal_code))
            print("New user inserted.")
        conn.commit()
        
        select_query = """SELECT id FROM users WHERE phone_number = %s"""
        cursor.execute(select_query, (phone_number,))
        user_id = cursor.fetchone()
        if user_id:
            user_id = user_id[0]
        print("User ID:", user_id)
        status = 'pending'
        order_status = "INSERT INTO orders (user_id, total_price, status, created_at) VALUES (%s, %s, %s, %s)"
        cursor.execute(order_status, (user_id, price, status, datetime.now()))
        conn.commit()
        return user_id

    finally:
        cursor.close()
        conn.close()
