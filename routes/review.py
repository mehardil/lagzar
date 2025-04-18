from fastapi import APIRouter
import crud

router = APIRouter()

@router.get("/")
def get_review():
    return crud.get_all_review()

@router.get("/{id}")
def get_single_review(id: int):
    return crud.get_once_review(id)
