import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <div className="group relative rounded-2xl bg-white border border-gray-200 hover:shadow-lg transition-shadow duration-300 overflow-hidden">
      
      {/* Image Section */}
      <div className="relative h-72 md:h-80 overflow-hidden">
        <img
          src={product.image_url}
          alt={product.name}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
        />
        
        {/* Category Tag */}
        <div className="absolute top-3 left-3 bg-white/80 text-gray-800 text-xs font-semibold px-3 py-1 rounded-full shadow-sm">
          {product.category}
        </div>
      </div>

      {/* Product Info */}
      <div className="p-4">
        <h3 className="text-lg md:text-xl font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors truncate">
          {product.name}
        </h3>

        <p className="text-red-500 font-bold text-sm md:text-base mt-1">
          Rs. {product.price.toLocaleString()}
        </p>

        {/* Optional Description */}
        {product.description && (
          <p className="text-gray-500 text-sm mt-2 line-clamp-2">
            {product.description}
          </p>
        )}

        {/* Action Button */}
        <Link
          to={`/product/${product.id}`}
          className="inline-block w-full text-center bg-black text-white font-medium mt-4 py-2 rounded-lg hover:bg-indigo-800 transition-colors"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
