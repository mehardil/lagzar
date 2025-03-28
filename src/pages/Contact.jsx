import React from "react";

import Footer from "../components/Footer"; // Import Footer

const Contact = () => {
  return (
    
      <div className="container mx-auto py-10 px-4 text-center">
        <h1 className="text-4xl font-semibold">CONTACT US</h1>
        <p className="mt-6 text-lg text-gray-700">
          We're here to help! For any queries or customization requests, contact us on WhatsApp{" "}
          <a href="https://wa.me/03319051913" className="text-blue-600 hover:underline font-semibold">
            03319051913
          </a>{" "}
          or Instagram at{" "}
          <a href="https://www.instagram.com/jewellionair" className="text-blue-600 hover:underline font-semibold">
            @softnet
          </a>.
        </p>
<Footer />

      </div>

      
    
  );
};

export default Contact;
