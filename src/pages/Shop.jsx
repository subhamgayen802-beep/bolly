
import { useState, useMemo } from 'react';
import { products, categories } from '../ProductData/product';
import ProductCard from '../ProductData/productCard';

const Shop = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("featured");

  const filteredProducts = useMemo(() => {
    let result = [...products];
    
    if (activeCategory !== "All") {
      result = result.filter(p => p.category === activeCategory);
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(p => 
        p.name.toLowerCase().includes(q) || 
        p.category.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q)
      );
    }
  
    switch(sortBy) {
      case 'price-low': result.sort((a, b) => a.price - b.price); break;
      case 'price-high': result.sort((a, b) => b.price - a.price); break;
      case 'rating': result.sort((a, b) => b.rating - a.rating); break;
      case 'reviews': result.sort((a, b) => b.reviews - a.reviews); break;
      default: break;
    }
    
    return result;
  }, [activeCategory, searchQuery, sortBy]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#faf8fb] via-[#f5f3f8] to-[#ede9fe]">
      
      {/* Header spacer */}
      <div className="h-20" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-16 py-12 lg:py-16">
        
        {/* Page Header */}
        <div className="text-center mb-12">
          <span className="inline-block bg-purple-100 text-purple-700 text-[10px] font-bold tracking-[0.2em] uppercase px-4 py-2 rounded-full mb-4">
            Premium Collection
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 tracking-tight">
            SHOP ALL
          </h1>
          <p className="mt-4 text-gray-500 text-lg max-w-lg mx-auto">
            Discover our complete range of salon-quality hair and body care products.
          </p>
        </div>

        {/* Search & Sort Bar */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white/70 backdrop-blur border border-purple-100 rounded-full pl-12 pr-5 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
            />
          </div>
          
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="bg-white/70 backdrop-blur border border-purple-100 rounded-full px-5 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 cursor-pointer"
          >
            <option value="featured">Featured</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="rating">Top Rated</option>
            <option value="reviews">Most Reviews</option>
          </select>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-xs font-bold tracking-wider uppercase transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-purple-600 text-white shadow-lg shadow-purple-500/25'
                  : 'bg-white/60 text-gray-700 hover:bg-white hover:shadow-md border border-purple-100/50'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Results Count */}
        <p className="text-sm text-gray-500 mb-6 font-medium">
          Showing {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''}
        </p>

        {/* Product Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-purple-400">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900">No products found</h3>
            <p className="text-gray-500 mt-2">Try adjusting your search or category filter.</p>
          </div>
        )}

        {/* Newsletter Section */}
        <div className="mt-20 bg-gradient-to-br from-purple-600 via-purple-700 to-indigo-800 rounded-3xl p-10 lg:p-16 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-pink-500/20 rounded-full blur-3xl" />
          
          <div className="relative z-10 max-w-xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight mb-4">
              Join the Bolly Family
            </h2>
            <p className="text-purple-100 mb-8">
              Subscribe for 15% off your first order and exclusive access to new launches.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 bg-white/20 backdrop-blur border border-white/30 rounded-full px-6 py-3 text-sm text-white placeholder:text-purple-200 focus:outline-none focus:ring-2 focus:ring-white/50"
              />
              <button className="bg-white text-purple-700 font-bold text-sm tracking-widest uppercase px-8 py-3 rounded-full hover:bg-gray-100 transition-all">
                Subscribe
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Shop;