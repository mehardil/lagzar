import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Footer from "../../components/Footer";

export default function CheckoutPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("cod");

  // Form state
  const [contact, setContact] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [apartment, setApartment] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [phone, setPhone] = useState("");

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`http://127.0.0.1:8000/products/${id}`);
        if (!res.ok) throw new Error("Failed to fetch product data.");
        const data = await res.json();
        setProduct(data);
      } catch (err) {
        console.error(err);
        setError("Unable to load product details.");
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  const handlePlaceOrder = async () => {
    const orderData = {
      product_id: id,
      contact,
      first_name: firstName,
      last_name: lastName,
      address,
      apartment,
      city,
      postal_code: postalCode,
      phone,
      price: product?.price || 0,
      payment_method: paymentMethod,
    };
    console.log(orderData)
    try {
      const res = await fetch("http://127.0.0.1:8000/order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(orderData),
      });

      if (!res.ok) throw new Error("Failed to place order.");
      alert("Order placed successfully!");
    } catch (err) {
      console.error(err);
      alert("Error placing order.");
    }
  };

  if (loading) return <p className="text-center mt-10">Loading...</p>;
  if (error) return <p className="text-center text-red-500 mt-10">{error}</p>;

  const productImage =
    product?.image_url || product?.images?.[0] || "/placeholder.jpg";

  return (
    <div className="flex flex-col min-h-screen">
      <div className="min-h-screen bg-white text-black flex flex-col lg:flex-row p-4 lg:p-8 gap-8">
        {/* Left Side: Form */}
        <div className="flex-1 space-y-6 max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold">Contact</h2>
          <input
            type="text"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            placeholder="Email or mobile phone number"
            className="w-full border p-3 rounded-md"
          />
          <label className="flex items-center gap-2">
            <input type="checkbox" />
            <span>Email me with news and offers</span>
          </label>

          <h2 className="text-2xl font-bold">Delivery</h2>
          <select className="w-full border p-3 rounded-md" disabled>
            <option>Pakistan</option>
          </select>
          <div className="flex gap-4">
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="First name (optional)"
              className="flex-1 border p-3 rounded-md"
            />
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Last name"
              className="flex-1 border p-3 rounded-md"
            />
          </div>
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="Address"
            className="w-full border p-3 rounded-md"
          />
          <input
            type="text"
            value={apartment}
            onChange={(e) => setApartment(e.target.value)}
            placeholder="Apartment, suite, etc. (optional)"
            className="w-full border p-3 rounded-md"
          />
          <div className="flex gap-4">
            <input
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              placeholder="City"
              className="flex-1 border p-3 rounded-md"
            />
            <input
              type="text"
              value={postalCode}
              onChange={(e) => setPostalCode(e.target.value)}
              placeholder="Postal code (optional)"
              className="flex-1 border p-3 rounded-md"
            />
          </div>
          <input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Phone"
            className="w-full border p-3 rounded-md"
          />

          <h2 className="text-xl font-semibold">Shipping method</h2>
          <div className="w-full border p-4 rounded-md flex justify-between items-center">
            <span>Shipping</span>
            <span className="font-semibold">FREE</span>
          </div>

          <h2 className="text-2xl font-bold">Payment</h2>
          <p className="text-sm text-gray-600">
            All transactions are secure and encrypted.
          </p>

          <div className="space-y-3">
            <label className="flex items-center gap-2 border p-4 rounded-md cursor-pointer">
              <input
                type="radio"
                name="payment"
                value="cod"
                checked={paymentMethod === "cod"}
                onChange={(e) => setPaymentMethod(e.target.value)}
              />
              <span>Cash on Delivery (COD)</span>
            </label>

            <label className="flex items-center gap-2 border p-4 rounded-md cursor-pointer">
              <input
                type="radio"
                name="payment"
                value="online"
                checked={paymentMethod === "online"}
                onChange={(e) => setPaymentMethod(e.target.value)}
              />
              <span>Online Payment (Free Shipping)</span>
            </label>
          </div>

          {paymentMethod === "online" && (
            <div className="mt-6 border p-4 rounded-md bg-blue-50 space-y-4">
              <p className="font-medium">Please pay into the following account:</p>
              <div className="text-sm space-y-1">
                <p><strong>Account Name:</strong> ABC Online Store</p>
                <p><strong>Account Number:</strong> 1234567890</p>
                <p><strong>Bank Name:</strong> Meezan Bank</p>
                <p><strong>Branch Code:</strong> 0987</p>
              </div>
              <p className="text-sm text-gray-700">
                After making the payment, please upload a screenshot of your transaction below.
              </p>
              <input
                type="file"
                accept="image/*"
                className="w-full border p-2 rounded-md"
              />
            </div>
          )}

          <button
            onClick={handlePlaceOrder}
            className="mt-6 bg-black text-white px-6 py-3 rounded-md w-full hover:bg-gray-900 transition"
          >
            Place Order
          </button>
        </div>

        {/* Right Side: Order Summary */}
        <div className="w-full lg:w-1/3 border p-6 rounded-md bg-gray-50 space-y-4">
          <div className="flex items-center gap-4">
            <img
              src={productImage}
              className="w-16 h-16 object-cover rounded"
              alt={product?.name}
            />
            <div>
              <p className="font-semibold">{product?.name}</p>
              <p>Rs {product?.price?.toLocaleString()}</p>
            </div>
          </div>

          <input
            type="text"
            placeholder="Discount code"
            className="w-full border p-3 rounded-md"
          />
          <button className="w-full bg-gray-200 text-black font-semibold py-2 rounded-md">
            Apply
          </button>

          <div className="flex justify-between pt-4">
            <span>Subtotal</span>
            <span>Rs {product?.price?.toLocaleString()}</span>
          </div>
          <div className="flex justify-between">
            <span>Shipping</span>
            <span>FREE</span>
          </div>
          <div className="flex justify-between text-xl font-bold border-t pt-4">
            <span>Total</span>
            <span>PKR Rs {product?.price?.toLocaleString()}</span>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
