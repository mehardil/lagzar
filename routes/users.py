from fastapi import APIRouter
import crud

router = APIRouter()

@router.get("/")
def get_products():
    return crud.get_all_products()


