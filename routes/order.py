from fastapi import APIRouter
import crud_order
from pydantic import BaseModel

router = APIRouter()

class OrderRequest(BaseModel):
    product_id: int
    contact: str
    first_name: str
    last_name: str
    address: str
    apartment: str
    city: str
    postal_code: str
    phone: str
    price:int
    payment_method: str





@router.post("/")
def order_insert(order_info: OrderRequest):
    print("Received order:", order_info)
    crud_order.insert_user_detials(order_info)
    return "order data inserted success fully"
