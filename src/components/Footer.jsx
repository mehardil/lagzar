import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 mt-16">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        {/* Menu Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">MENU</h3>
          <ul className="space-y-2 text-gray-400">
            <li><a href="/terms" className="hover:text-white">Terms & Conditions</a></li>
            <li><a href="/return-policy" className="hover:text-white">Return Policy</a></li>
            <li><a href="/refund-policy" className="hover:text-white">Refund Policy</a></li>
            <li><a href="/privacy-policy" className="hover:text-white">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Our Mission Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">OUR MISSION</h3>
          <p className="text-gray-400">
            At Jewellionair, we deliver top-quality products that enhance your beauty and elevate your style.
            Join us in redefining luxury and sophistication with every piece we create.
          </p>
          <div className="mt-4 flex justify-center md:justify-start space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" alt="Facebook" className="w-6 h-6" />
            </a>
            <a href="https://instagram.com/jewellionair" target="_blank" rel="noopener noreferrer">
              <img src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" alt="Instagram" className="w-6 h-6" />
            </a>
          </div>
        </div>

        {/* Stay Updated Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">STAY UPDATED</h3>
          <p className="text-gray-400">Subscribe now to receive updates on new arrivals and exciting giveaways!</p>
          <div className="mt-4 flex items-center justify-center md:justify-start">
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-64 p-2 rounded-l bg-gray-700 text-white focus:outline-none"
            />
            <button className="px-4 py-2 bg-white text-black font-semibold rounded-r hover:bg-gray-300">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
