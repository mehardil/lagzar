import { useState } from "react";
import { ShoppingCart, MessageCircle } from "lucide-react";
import Footer from "../components/Footer";

export default function ProductPage() {
  const [product] = useState({
    name: "Cruise Pearl Bag",
    brand: "Jewellionair",
    price: 4299,
    originalPrice: 4999,
    rating: 4.5,
    reviews: 3,
    dimensions: {
      length: "10 inches",
      height: "5.5 inches",
      width: "3 inches",
      strap: "26 inches",
    },
    features: ["Phone", "Lipstick", "Cards"],
    images: [
      "https://as1.ftcdn.net/v2/jpg/05/75/02/86/1000_F_575028684_hkdpB8cmj1kFpHzm9dQGyUxjuHtoAWoS.jpg",
      "https://as1.ftcdn.net/v2/jpg/05/75/02/86/1000_F_575028684_hkdpB8cmj1kFpHzm9dQGyUxjuHtoAWoS.jpg",
      "https://as1.ftcdn.net/v2/jpg/05/75/02/86/1000_F_575028684_hkdpB8cmj1kFpHzm9dQGyUxjuHtoAWoS.jpg"
    ],
  });

  const [reviews] = useState([
    { name: "Ayesha", rating: 5, comment: "Amazing quality! Highly recommend." },
    { name: "Hassan", rating: 4, comment: "Good product, but delivery took time." },
    { name: "Sara", rating: 5, comment: "Absolutely love it! Will buy again." },
  ]);

  const [relatedProducts] = useState([
    {
      name: "Elegant Pearl Clutch",
      price: 3999,
      image: "https://as2.ftcdn.net/v2/jpg/05/75/02/86/1000_F_575028685_ABCDEF123.jpg",
    },
    {
      name: "Luxury Handbag",
      price: 4599,
      image: "https://as2.ftcdn.net/v2/jpg/05/75/02/86/1000_F_575028686_XYZ789.jpg",
    },
    {
      name: "Golden Chain Purse",
      price: 3799,
      image: "https://as2.ftcdn.net/v2/jpg/05/75/02/86/1000_F_575028687_GHIJKL456.jpg",
    },
  ]);

  return (
    <div className="flex flex-col min-h-screen">
    <div className="container mx-auto p-6 font-sans">
      {/* Product Details */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        <div>
          <div className="w-full h-96 overflow-hidden rounded-xl shadow-lg border border-gray-200">
            <img src={product.images[0]} alt={product.name} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
          </div>

          {/* Display additional images below */}
          <div className="mt-4 flex gap-4 overflow-x-auto">
            {product.images.map((image, index) => (
              <div key={index} className="w-24 h-24 overflow-hidden rounded-lg shadow-md cursor-pointer">
                <img src={image} alt={`Product image ${index + 1}`} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-bold mb-2 text-gray-900">{product.name}</h2>
          <p className="text-gray-600 text-lg">by {product.brand}</p>
          <div className="flex items-center gap-2 my-4">
            <span className="text-red-500 text-2xl font-bold">Rs. {product.price}</span>
            <span className="line-through text-gray-400 text-lg">Rs. {product.originalPrice}</span>
          </div>
          <p className="text-md text-gray-700">⭐ {product.rating} ({product.reviews} reviews)</p>
          <div className="my-6">
            <h4 className="font-semibold text-lg">Dimensions:</h4>
            <ul className="text-gray-700 space-y-1">
              <li>📏 Length: {product.dimensions.length}</li>
              <li>📏 Height: {product.dimensions.height}</li>
              <li>📏 Width: {product.dimensions.width}</li>
              <li>👜 Strap: {product.dimensions.strap}</li>
            </ul>
          </div>
          <div className="my-6">
            <h4 className="font-semibold text-lg">Perfect for carrying:</h4>
            <ul className="text-gray-700 space-y-1">
              {product.features.map((feature, index) => (
                <li key={index}>✔ {feature}</li>
              ))}
            </ul>
          </div>
          <div className="flex gap-4 mt-6">
            <button className="bg-black text-white px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-gray-900 transition duration-300 shadow-md">
              <ShoppingCart size={18} /> Add to Cart
            </button>
            <button className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-500 transition duration-300 shadow-md">
              Buy It Now
            </button>
          </div>
        </div>
      </div>

      {/* Customer Reviews */}
      <div className="mt-16">
        <h3 className="text-2xl font-bold mb-6 text-center">Customer Reviews</h3>
        <div className="space-y-6">
          {reviews.map((review, index) => (
            <div key={index} className="border p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300 bg-gray-50">
              <p className="font-semibold text-gray-900">{review.name}</p>
              <p className="text-yellow-500 text-lg">⭐ {review.rating}</p>
              <p className="text-gray-700">{review.comment}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Related Products */}
      <div className="mt-16">
        <h3 className="text-2xl font-bold mb-6 text-center">Related Products</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {relatedProducts.map((related, index) => (
            <div key={index} className="border rounded-lg shadow-lg p-5 hover:shadow-xl transition duration-300">
              <img src={related.image} alt={related.name} className="w-full h-48 object-cover rounded-md" />
              <h4 className="text-lg font-semibold mt-4 text-gray-900">{related.name}</h4>
              <p className="text-red-500 font-bold text-lg">Rs. {related.price}</p>
              <button className="mt-3 bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-900 transition duration-300 w-full">
                View Details
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/923220836003"
        className="fixed bottom-6 left-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition duration-300"
      >
        <MessageCircle size={26} />
      </a>
      
      {/* Footer Section */}
     
    </div>
    <Footer />
    </div>
    
  );
}
