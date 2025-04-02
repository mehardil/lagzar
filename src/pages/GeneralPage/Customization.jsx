import React from "react";
import Footer from "../../components/Footer"; // Import Footer

const Customization = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Content Section */}
      <div className="flex-grow container mx-auto py-20 px-4 text-center">
        <h1 className="text-4xl font-semibold tracking-wider">CUSTOMIZATION</h1>
        <p className="mt-6 text-lg text-gray-700">
          We're Open for Customization and Queries! Connect with Us on WhatsApp{" "}
          <a href="https://wa.me/03319051913" className="text-blue-600 hover:underline font-semibold">
            03319051913
          </a>{" "}
          or Instagram at{" "}
          <a href="https://www.instagram.com/jewellionair" className="text-blue-600 hover:underline font-semibold">
            @Jewellionair
          </a>.
        </p>
      </div>

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default Customization;
