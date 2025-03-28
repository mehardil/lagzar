import React from "react";
import { Link } from "react-router-dom";

const products = [
  { id: 1, name: "Onion Luxe", price: 44992222, image: "https://as1.ftcdn.net/v2/jpg/05/75/02/86/1000_F_575028684_hkdpB8cmj1kFpHzm9dQGyUxjuHtoAWoS.jpg" },
  { id: 2, name: "Opal Grace", price: 3499, image: "https://as2.ftcdn.net/v2/jpg/03/77/21/83/1000_F_377218354_gyHMm7epZKcmygJaHZoWEJJzB5nOWhZ2.jpg" },
  { id: 3, name: "Opal Mini", price: 3799, image: "https://as2.ftcdn.net/jpg/12/88/90/79/1000_F_1288907966_GAyKQJ8P1whPiUsBOh7smJqUAmrqxPku.jpg" },
  { id: 4, name: "Opaline Pearl", price: 4299, image: "https://as2.ftcdn.net/jpg/12/88/90/79/1000_F_1288907966_GAyKQJ8P1whPiUsBOh7smJqUAmrqxPku.jpg" },
];

const Shop = () => {
  return (
    <div className="container mx-auto py-10">
      <h2 className="text-3xl font-bold mb-6">Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="border p-4 rounded-lg shadow-lg">
            <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded" />
            <h3 className="text-xl font-semibold mt-2">{product.name}</h3>
            <p className="text-gray-600">Rs. {product.price}</p>
            <Link to={`/product/${product.id}`} className="block text-center bg-black text-white px-4 py-2 mt-3 rounded">
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;
