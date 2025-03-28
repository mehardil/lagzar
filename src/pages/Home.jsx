import React from "react";

const Home = () => {
  const bestSellers = [
    {
      id: 1,
      image: "https://via.placeholder.com/300", // Replace with actual image URL
      title: "Black Crystal Bag",
    },
    {
      id: 2,
      image: "https://via.placeholder.com/300", // Replace with actual image URL
      title: "Golden Pearl Bag",
    },
    {
      id: 3,
      image: "https://via.placeholder.com/300", // Replace with actual image URL
      title: "Silver Beaded Bag",
    },
    {
      id: 4,
      image: "https://via.placeholder.com/300", // Replace with actual image URL
      title: "Pink Crystal Bag",
    },
  ];

  return (
    <div className="container mx-auto py-10 px-4">
      {/* Hero Section */}
      <div className="relative w-full h-[500px] bg-gray-200 flex items-center justify-center">
        <img
          src="https://as2.ftcdn.net/v2/jpg/03/77/21/83/1000_F_377218354_gyHMm7epZKcmygJaHZoWEJJzB5nOWhZ2.jpg" // Replace with actual image URL
          alt="Hero Banner"
          className="w-full h-full object-cover"
        />
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

      {/* Best Seller Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-10">
        {bestSellers.map((item) => (
          <div key={item.id} className="relative bg-white shadow-md rounded-lg overflow-hidden">
            <span className="absolute top-2 left-2 bg-gray-800 text-white text-xs px-2 py-1 rounded">ON SALE</span>
            <img src={item.image} alt={item.title} className="w-full h-64 object-cover" />
            <div className="p-4 text-center">
              <h3 className="text-lg font-semibold">{item.title}</h3>
            </div>
          </div>
        ))}
      </div>

      {/* WhatsApp Button */}
      <div className="fixed bottom-5 left-5">
        <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" // Replace with actual WhatsApp icon
            alt="WhatsApp Chat"
            className="w-12 h-12"
          />
        </a>
      </div>
    </div>
  );
};

export default Home;
