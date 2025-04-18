from fastapi import APIRouter
import crud

router = APIRouter()

@router.get("/")
def get_all_categories():
    return crud.get_categories()


@router.get("/{category_name}")
def get_one_categories(category_name:str):
    return crud.get_specific_categories(category_name)