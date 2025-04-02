import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <div 
      className="group relative overflow-hidden rounded-xl bg-white hover:shadow-xl transition-all duration-300 border border-gray-100"
    >
      {/* Image container */}
      <div className="relative h-80 md:h-96 overflow-hidden">
        <img 
          src={product.image_url} 
          alt={product.name} 
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" 
        />
        
        {/* Category badge */}
        <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm py-1 px-3 rounded-full text-xs font-medium">
          {product.category}
        </div>
      </div>
      
      {/* Product info */}
      <div className="p-5">
        <h3 className="text-xl font-semibold mb-1 group-hover:text-indigo-600 transition-colors">
          {product.name}
        </h3>
        
        <p className="text-gray-900 font-bold mb-4">
          Rs. {product.price.toLocaleString()}
        </p>
        
        {/* Product description */}
        {product.description && (
          <p className="text-sm text-gray-600 mb-4 line-clamp-2">
            {product.description}
          </p>
        )}
        
        {/* Button */}
        <Link
          to={`/product/${product.id}`}
          className="block text-center bg-black hover:bg-indigo-800 text-white px-4 py-2.5 rounded-lg transition-colors duration-300 mt-2"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
