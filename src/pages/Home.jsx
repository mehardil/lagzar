import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import Footer from "../components/Footer";

const Home = () => {
  const [bestSellers, setBestSellers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [heroProducts, setHeroProducts] = useState([]);
  const [currentHeroIndex, setCurrentHeroIndex] = useState(0);

  // Utility to select random products
  const getRandomProducts = (products, count) => {
    const shuffled = [...products].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  };

  useEffect(() => {
    const fetchBestSellers = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/products/");
        if (!response.ok) throw new Error(`Error: ${response.status}`);
        const data = await response.json();
        setBestSellers(data);

        const selected = getRandomProducts(data, 20); // Select 5 random products
        setHeroProducts(selected);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch best-selling products.");
        setLoading(false);
      }
    };

    fetchBestSellers();
  }, []);

  // Rotate hero images every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeroIndex((prevIndex) =>
        heroProducts.length ? (prevIndex + 1) % heroProducts.length : 0
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [heroProducts]);

  return (
    <div className="flex flex-col min-h-screen">
    <div className="container mx-auto py-10 px-4">
      {/* Hero Section */}
      <div className="relative w-full h-[500px] bg-gray-200 flex items-center justify-center overflow-hidden group rounded-xl">
        {heroProducts.length > 0 ? (
          <img
            src={heroProducts[currentHeroIndex].image_url}
            alt={heroProducts[currentHeroIndex].name}
            className="w-full h-full object-cover transform transition-transform duration-1000 ease-in-out group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-500">
            Loading hero images...
          </div>
        )}
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white text-center px-4">
          <h1 className="text-5xl font-bold">Carry Unique Crystal Fashion</h1>
          <p className="mt-4 text-lg max-w-2xl">
            Every JEWELLIONAIR piece is carefully handmade with attention to detail, showcasing timeless elegance.
          </p>
          <button className="mt-6 px-6 py-3 bg-white text-black font-semibold rounded-full shadow-lg hover:bg-gray-300 transition-all">
            View All
          </button>
        </div>
      </div>

      {/* Best Seller Section */}
      <div className="mt-16 text-center">
        <h2 className="text-3xl font-semibold">Discover What Our Customers Love Most</h2>
        <p className="mt-2 text-gray-600">Best Seller</p>
      </div>

      {/* Product Cards */}
      {loading ? (
        <div className="text-center py-10 text-gray-600">Loading...</div>
      ) : error ? (
        <div className="text-center py-10 text-red-600">{error}</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
      {bestSellers.map((product) => (
        <ProductCard key={product.id} product={product} />
  ))}
</div>


      )}

      {/* WhatsApp Button */}
      <div className="fixed bottom-5 left-5">
        <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
            alt="WhatsApp Chat"
            className="w-12 h-12"
          />
        </a>
      </div>
     
    </div>
     <Footer />
    </div>
  );
};

export default Home;
