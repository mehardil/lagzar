from fastapi import APIRouter
import crud

router = APIRouter()

@router.get("/")
def get_products():
    return crud.get_all_products()


################ find single product
@router.get("/{id}")
def get_single_product(id: int):
    return crud.get_once_product(id)

################  find related product
@router.get("/related/{id}")
def get_related_product(id: int):
    return crud.related_product(id)







