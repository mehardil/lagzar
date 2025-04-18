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
    cursor.execute("SELECT * FROM `products` p INNER JOIN product_images pi on p.id = pi.id;")
    products = cursor.fetchall()
    cursor.close()
    conn.close()
    return products

def get_once_product(id):
    conn = get_connection()
    cursor = conn.cursor(dictionary=True)

    try:
        query = "SELECT * FROM products WHERE id = %s"
        cursor.execute(query, (id,))
        product = cursor.fetchone()
        if not product:
            return {"message": "Product not found."}
        image_query = "SELECT image_url FROM product_images WHERE product_id = %s"
        cursor.execute(image_query, (id,))
        product["images"] = [img["image_url"] for img in cursor.fetchall()]
        
        dimension_query = "SELECT * FROM product_dimensions WHERE product_id = %s"
        cursor.execute(dimension_query, (id,))
        dimension = cursor.fetchone()
        product["dimensions"] = dimension if dimension else {}

        review_query = "SELECT * FROM reviews WHERE product_id = %s"
        cursor.execute(review_query, (id,))
        product["reviews"] = cursor.fetchall()
        return product
    finally:
        cursor.close()
        conn.close()

###### get categories using 
def get_categories():
    print
    conn = get_connection()
    cursor = conn.cursor(dictionary=True)
    cursor.execute("SELECT distinct(category) FROM `products`;")
    products = cursor.fetchall()
    cursor.close()
    conn.close()
    return products

def get_specific_categories(categories):
    print(categories)
    conn = get_connection()
    cursor = conn.cursor(dictionary=True)
    cursor.execute(f"SELECT * FROM `products` p INNER JOIN product_images pi on p.id = pi.id where p.category = '{categories}';")
    products = cursor.fetchall()
    cursor.close()
    conn.close()
    return products


def get_once_product(id):
    conn = get_connection()
    cursor = conn.cursor(dictionary=True)

    try:
        query = "SELECT * FROM products WHERE id = %s"
        cursor.execute(query, (id,))
        product = cursor.fetchone()
        if not product:
            return {"message": "Product not found."}
        image_query = "SELECT image_url FROM product_images WHERE product_id = %s"
        cursor.execute(image_query, (id,))
        product["images"] = [img["image_url"] for img in cursor.fetchall()]
        
        dimension_query = "SELECT * FROM product_dimensions WHERE product_id = %s"
        cursor.execute(dimension_query, (id,))
        dimension = cursor.fetchone()
        product["dimensions"] = dimension if dimension else {}

        review_query = "SELECT * FROM reviews WHERE product_id = %s"
        cursor.execute(review_query, (id,))
        product["reviews"] = cursor.fetchall()
        return product
    finally:
        cursor.close()
        conn.close()

def related_product(id):
    conn = get_connection()
    cursor = conn.cursor(dictionary=True)
    sql = "select category from products where id = %s"
    cursor.execute(sql, (id,))
    category = cursor.fetchone()
    print(category,"here is category")
    category = category['category']
    print(category ,"here is category")
    related_sql = "SELECT * from products p inner JOIN product_images pi on p.id = pi.product_id where pi.is_primary =1 and p.category = %s limit 4;"
    cursor.execute(related_sql,(category,))
    related_product = cursor.fetchone()
    print(related_product)
    return related_product



# Get all review 
def get_all_review():
    conn = get_connection()
    cursor = conn.cursor(dictionary=True)
    cursor.execute("SELECT * FROM reviews")
    review = cursor.fetchall()
    cursor.close()
    conn.close()
    return review
#Get once review
def get_once_review(id):
    conn = get_connection()
    cursor = conn.cursor(dictionary=True)
    single_review = "SELECT * FROM `reviews` WHERE product_id =%s;"
    cursor.execute(single_review,(id,))
    review = cursor.fetchall()
    cursor.close()
    conn.close()
    return review