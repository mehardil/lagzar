from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routes import users
from routes import products
from routes import review
from routes import category
from routes import order

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


app.include_router(users.router, prefix="/users", tags=["Users"])
app.include_router(products.router, prefix="/products", tags=["Products"])
app.include_router(review.router, prefix="/review", tags=["review"])
app.include_router(category.router, prefix="/category", tags=["/category"])
app.include_router(order.router, prefix="/order", tags=["/order"])


@app.get("/")
def root():
    return {"message": "Welcome to FastAPI E-Commerce API"}