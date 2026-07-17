
import { Link } from 'react-router-dom';
import { useCart } from '../context/cartContext';
import { useState } from 'react';

const ProductCard = ({ product }) => {
  const { addToCart, cartItems } = useCart();
  const [added, setAdded] = useState(false);

  const inCart = cartItems.find((item) => item.id === product.id);
  const cartQty = inCart?.quantity || 0;

  const handleAdd = () => {
    addToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <div className="group bg-white/70 backdrop-blur-sm rounded-2xl overflow-hidden border border-purple-100/50 shadow-lg shadow-purple-900/5 hover:shadow-xl hover:shadow-purple-900/10 hover:-translate-y-1 transition-all duration-300">
      
      {/* Image Area */}
      <div className="relative bg-gradient-to-br from-[#c69d98] to-[#b08d88] p-6 flex items-center justify-center overflow-hidden">
        {product.badge && (
          <span className="absolute top-3 left-3 bg-white/90 backdrop-blur text-[10px] font-black tracking-wider uppercase px-3 py-1 rounded-full text-purple-700 z-10">
            {product.badge}
          </span>
        )}
        
        {product.discount > 0 && (
          <span className="absolute top-3 right-3 bg-red-500 text-white text-[10px] font-black tracking-wider uppercase px-2.5 py-1 rounded-full z-10">
            -{product.discount}%
          </span>
        )}
        
        <img 
          src={product.image} 
          alt={product.name}
          className="w-32 h-auto object-contain drop-shadow-lg group-hover:scale-110 transition-transform duration-500"
        />
        
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
      </div>

      {/* Content */}
      <div className="p-5">
        <span className="text-[10px] font-bold tracking-[0.15em] uppercase text-purple-600 bg-purple-50 px-2 py-1 rounded-full">
          {product.category}
        </span>
        
        <h3 className="mt-3 text-sm font-bold text-gray-900 leading-tight group-hover:text-purple-700 transition-colors">
          {product.name}
        </h3>
        
        <p className="mt-2 text-xs text-gray-500 leading-relaxed line-clamp-2">
          {product.description}
        </p>

        {/* Rating */}
        <div className="flex items-center gap-1 mt-3">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <svg 
                key={i} 
                className={`w-3.5 h-3.5 ${i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'}`}
                fill="currentColor" 
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <span className="text-xs text-gray-400 font-medium">({product.reviews})</span>
        </div>

        {/* Price + Add to Cart */}
        <div className="flex items-end justify-between mt-4">
          <div className="flex items-baseline gap-2">
            <span className="text-lg font-black text-gray-900">₹{product.price}</span>
            {product.originalPrice > product.price && (
              <span className="text-xs text-gray-400 line-through">₹{product.originalPrice}</span>
            )}
          </div>
          
          <button 
            onClick={handleAdd}
            className={`relative w-9 h-9 rounded-full flex items-center justify-center text-white transition-all duration-200 active:scale-90 ${
              added 
                ? 'bg-green-500' 
                : 'bg-gray-900 hover:bg-purple-600'
            }`}
          >
            {added ? (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
            ) : cartQty > 0 ? (
              <span className="text-xs font-black">{cartQty}</span>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
              </svg>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;