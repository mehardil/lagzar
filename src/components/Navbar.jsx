import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Search, ShoppingCart, User } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full">
      {/* Top Announcement Bar */}
      <div className="bg-black text-white text-center text-sm py-2">
        TAKING EID ORDERS TILL 25TH MARCH
      </div>

      {/* Main Navbar */}
      <nav className="bg-white shadow-md">
        <div className="container mx-auto flex items-center justify-between px-6 py-4">
          
          {/* Left Section - Currency Dropdown */}
          <div className="hidden md:flex items-center space-x-2 text-gray-500 text-sm">
            <span>PKR</span> 
            <span className="text-xs">▼</span>
          </div>



          {/* Right Section - Account, Search, Cart */}
          <div className="hidden md:flex items-center space-x-6 text-gray-500 text-sm">
            <Link to="/account" className="hover:text-gray-700">ACCOUNT</Link>
            <Search className="w-5 h-5 hover:text-gray-700 cursor-pointer" />
            <Link to="/cart" className="hover:text-gray-700 flex items-center">
              CART <ShoppingCart className="w-5 h-5 ml-1" />
              <span className="ml-1">(0)</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden focus:outline-none text-gray-700"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex justify-center space-x-8 uppercase text-sm text-gray-600 font-medium tracking-wide">
          <li><Link to="/" className="hover:text-black transition">Home</Link></li>
          <li><Link to="/shop" className="hover:text-black transition">Shop All</Link></li>
          <li><Link to="/clutches" className="hover:text-black transition">Clutches</Link></li>
          <li><Link to="/new-arrivals" className="hover:text-black transition">New Arrivals</Link></li>
          <li><Link to="/best-selling" className="hover:text-black transition">Best Selling</Link></li>
          <li><Link to="/pearl-collection" className="hover:text-black transition">Pearl Collection</Link></li>
          <li><Link to="/contact" className="hover:text-black transition">Contact</Link></li>
          <li><Link to="/customization" className="hover:text-black transition">Customization</Link></li>
          <li><Link to="/general-queries" className="hover:text-black transition">General Queries</Link></li>
          <li><Link to="/track-order" className="hover:text-black transition">Track Order</Link></li>
        </ul>

        {/* Mobile Menu */}
        <div 
          className={`md:hidden bg-white fixed inset-0 z-50 transition-all ${
            isOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
          }`}
        >
          <button 
            className="absolute top-5 right-5 text-gray-700"
            onClick={() => setIsOpen(false)}
          >
            <X size={28} />
          </button>
          <ul className="flex flex-col items-center mt-16 space-y-6 text-lg font-medium">
            <li><Link to="/" className="block py-2" onClick={() => setIsOpen(false)}>Home</Link></li>
            <li><Link to="/shop" className="block py-2" onClick={() => setIsOpen(false)}>Shop All</Link></li>
            <li><Link to="/clutches" className="block py-2" onClick={() => setIsOpen(false)}>Clutches</Link></li>
            <li><Link to="/new-arrivals" className="block py-2" onClick={() => setIsOpen(false)}>New Arrivals</Link></li>
            <li><Link to="/best-selling" className="block py-2" onClick={() => setIsOpen(false)}>Best Selling</Link></li>
            <li><Link to="/pearl-collection" className="block py-2" onClick={() => setIsOpen(false)}>Pearl Collection</Link></li>
            <li><Link to="/contact" className="block py-2" onClick={() => setIsOpen(false)}>Contact</Link></li>
            <li><Link to="/customization" className="block py-2" onClick={() => setIsOpen(false)}>Customization</Link></li>
            <li><Link to="/general-queries" className="block py-2" onClick={() => setIsOpen(false)}>General Queries</Link></li>
            <li><Link to="/track-order" className="block py-2" onClick={() => setIsOpen(false)}>Track Order</Link></li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
