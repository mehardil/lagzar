from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routes import users
from routes import products


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

@app.get("/")
def root():
    return {"message": "Welcome to FastAPI E-Commerce API"}