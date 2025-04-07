import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShoppingCart, MessageCircle } from "lucide-react";
import Footer from "../components/Footer";

export default function ProductPage() {
  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const productRes = await fetch(`http://127.0.0.1:8000/products/${id}`);
        const reviewRes = await fetch("http://127.0.0.1:8000/review");
        const allProductsRes = await fetch("http://127.0.0.1:8000/products");

        if (!productRes.ok || !reviewRes.ok || !allProductsRes.ok) {
          throw new Error("Failed to fetch data");
        }

        const productData = await productRes.json();
        const reviewData = await reviewRes.json();
        const allProducts = await allProductsRes.json();

        setProduct(productData);

        // Filter reviews for the specific product
        const filteredReviews = reviewData.filter(
          (review) => review.product_id === parseInt(id)
        );
        setReviews(filteredReviews);

        // Get related products based on category
        const related = allProducts.filter(
          (p) => p.category === productData.category && p.id !== parseInt(id)
        );
        setRelatedProducts(related);
      } catch (err) {
        console.error(err);
        setError("Failed to load product or related products.");
      } finally {
        setLoading(false);
      }
    };

    fetchProductDetails();
  }, [id]);

  if (loading) return <p className="text-center mt-10">Loading...</p>;
  if (error) return <p className="text-center text-red-500 mt-10">{error}</p>;

  return (
    <div className="flex flex-col min-h-screen">
      <div className="container mx-auto p-6 font-sans">
        {/* Product Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div>
            <div className="w-full h-96 overflow-hidden rounded-xl shadow-lg border border-gray-200">
              <img
                src={product.image_url}
                alt={product.name}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>

            <div className="mt-4 flex gap-4 overflow-x-auto">
              {[product.image_url].map((image, index) => (
                <div
                  key={index}
                  className="w-24 h-24 overflow-hidden rounded-lg shadow-md cursor-pointer"
                >
                  <img
                    src={image}
                    alt={`Product image ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-2 text-gray-900">{product.name}</h2>
            <p className="text-gray-600 text-lg">Brand: {product.brand || "N/A"}</p>
            <div className="flex items-center gap-2 my-4">
              <span className="text-red-500 text-2xl font-bold">Rs. {product.price}</span>
              {product.originalPrice && (
                <span className="line-through text-gray-400 text-lg">
                  Rs. {product.originalPrice}
                </span>
              )}
            </div>
            <p className="text-sm text-gray-600 mb-1">Category: {product.category}</p>
            <p className="text-sm text-gray-600 mb-1">
              Available Quantity: {product.quantity}
            </p>
            {/* Product Dimensions and Weight */}
            <div className="mt-4">
              <h3 className="text-xl font-semibold text-gray-900">Dimensions & Weight</h3>
              <ul className="text-sm text-gray-600">
                <li>Length: {product.length_in} inches</li>
                <li>Width: {product.width_in} inches</li>
                <li>Height: {product.height_in} inches</li>
                <li>Weight: {product.weight_grams} grams</li>
                <li>Material: {product.material}</li>
              </ul>
            </div>
            <div className="flex gap-4 mt-6">
              <button className="bg-black text-white px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-gray-900 transition duration-300 shadow-md">
                <ShoppingCart size={18} /> Add to Cart
              </button>
              <button className="bg-gray-200 text-black px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-gray-300 transition duration-300 shadow-md">
                <MessageCircle size={18} /> Chat
              </button>
            </div>
          </div>
        </div>

        {/* Reviews */}
        <div className="mt-16">
          <h2 className="text-2xl font-semibold mb-6">Customer Reviews</h2>
          {reviews.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {reviews.map((review) => (
                <div
                  key={review.id}
                  className="bg-white p-4 rounded-lg shadow hover:shadow-md transition"
                >
                  <h4 className="font-semibold text-gray-800">{review.username}</h4>
                  <div className="flex items-center gap-1 my-2">
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <span key={i}>⭐</span>
                    ))}
                  </div>
                  <p className="text-sm text-gray-600">{review.comment}</p>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-500">No reviews for this product.</p>
          )}
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-20">
            <h3 className="text-2xl font-bold mb-6 text-center">Related Products</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {relatedProducts.map((item) => (
                <div
                  key={item.id}
                  className="border rounded-lg p-4 shadow hover:shadow-lg transition duration-300"
                >
                  <img
                    src={item.image_url}
                    alt={item.name}
                    className="w-full h-48 object-cover rounded-md mb-3"
                  />
                  <h4 className="text-lg font-semibold text-gray-800">{item.name}</h4>
                  <p className="text-gray-600 mb-2 truncate">{item.description}</p>
                  <p className="text-red-500 font-bold mb-2">Rs. {item.price}</p>
                  <a
                    href={`/product/${item.id}`}
                    className="text-blue-500 hover:underline text-sm"
                  >
                    View Product →
                  </a>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}
