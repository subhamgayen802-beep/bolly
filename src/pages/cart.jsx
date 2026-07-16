import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity, subtotal, discount, total, clearCart } = useCart();
  const navigate = useNavigate();
  const [showCheckout, setShowCheckout] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    address: '',
    city: '',
    pincode: '',
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    setOrderPlaced(true);
    clearCart();
    setTimeout(() => {
      setOrderPlaced(false);
      setShowCheckout(false);
      navigate('/shop');
    }, 4000);
  };

  if (orderPlaced) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#faf8fb] via-[#f5f3f8] to-[#ede9fe] flex items-center justify-center px-4">
        <div className="text-center">
          <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-12 h-12 text-green-600">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>
          </div>
          <h2 className="text-3xl font-black text-gray-900 mb-2">Order Placed!</h2>
          <p className="text-gray-500">Thank you for shopping with Bolly.</p>
          <p className="text-gray-400 text-sm mt-1">Redirecting to shop...</p>
        </div>
      </div>
    );
  }

  if (cartItems.length === 0 && !showCheckout) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#faf8fb] via-[#f5f3f8] to-[#ede9fe] flex items-center justify-center px-4">
        <div className="text-center max-w-md">
          <div className="w-24 h-24 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 text-purple-400">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007z" />
            </svg>
          </div>
          <h2 className="text-2xl font-black text-gray-900 mb-2">Your Cart is Empty</h2>
          <p className="text-gray-500 mb-6">Looks like you haven't added anything yet.</p>
          <Link 
            to="/shop"
            className="inline-flex bg-gray-900 text-white px-8 py-3.5 rounded-full text-xs font-bold tracking-widest uppercase hover:bg-gray-800 transition-all"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#faf8fb] via-[#f5f3f8] to-[#ede9fe]">
      <div className="h-20" />
      
      <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-16 py-12 lg:py-16">
        
        {/* Header */}
        <div className="flex items-center justify-between mb-10">
          <div>
            <h1 className="text-4xl sm:text-5xl font-black text-gray-900 tracking-tight">YOUR CART</h1>
            <p className="text-gray-500 mt-2">{cartItems.length} item{cartItems.length !== 1 ? 's' : ''}</p>
          </div>
          <button 
            onClick={clearCart}
            className="text-xs font-bold text-red-500 hover:text-red-700 uppercase tracking-wider transition-colors"
          >
            Clear All
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cartItems.map((item) => (
              <div 
                key={item.id}
                className="bg-white/70 backdrop-blur-sm rounded-2xl p-4 sm:p-5 border border-purple-100/50 shadow-lg flex gap-4 items-center"
              >
                {/* Image */}
                <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-[#c69d98] to-[#b08d88] rounded-xl flex items-center justify-center flex-shrink-0">
                  <img src={item.image} alt={item.name} className="w-12 h-auto object-contain" />
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <span className="text-[10px] font-bold tracking-wider uppercase text-purple-600 bg-purple-50 px-2 py-0.5 rounded-full">
                    {item.category}
                  </span>
                  <h3 className="text-sm font-bold text-gray-900 mt-1 truncate">{item.name}</h3>
                  <p className="text-xs text-gray-500 mt-0.5 line-clamp-1">{item.description}</p>
                  
                  <div className="flex items-center gap-2 mt-2">
                    <span className="text-base font-black text-gray-900">₹{item.price}</span>
                    <span className="text-xs text-gray-400 line-through">₹{item.originalPrice}</span>
                  </div>
                </div>

                {/* Quantity + Delete */}
                <div className="flex flex-col items-end gap-3">
                  <button 
                    onClick={() => removeFromCart(item.id)}
                    className="text-gray-400 hover:text-red-500 transition-colors"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                    </svg>
                  </button>

                  <div className="flex items-center gap-2 bg-gray-100 rounded-full p-1">
                    <button 
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="w-7 h-7 bg-white rounded-full flex items-center justify-center text-gray-700 hover:bg-gray-200 transition-colors text-xs font-bold"
                    >
                      −
                    </button>
                    <span className="text-xs font-black w-5 text-center">{item.quantity}</span>
                    <button 
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="w-7 h-7 bg-white rounded-full flex items-center justify-center text-gray-700 hover:bg-gray-200 transition-colors text-xs font-bold"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-purple-100/50 shadow-lg sticky top-24">
              <h3 className="text-sm font-black text-gray-900 uppercase tracking-wider mb-6">Order Summary</h3>
              
              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Subtotal</span>
                  <span className="font-bold text-gray-900">₹{subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">You Saved</span>
                  <span className="font-bold text-green-600">−₹{discount.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Shipping</span>
                  <span className="font-bold text-green-600">FREE</span>
                </div>
                <div className="h-px bg-gray-200" />
                <div className="flex justify-between">
                  <span className="text-gray-900 font-bold">Total</span>
                  <span className="text-xl font-black text-gray-900">₹{total.toFixed(2)}</span>
                </div>
              </div>

              {!showCheckout ? (
                <button 
                  onClick={() => setShowCheckout(true)}
                  className="w-full bg-gradient-to-r from-purple-600 to-purple-800 text-white font-bold py-4 rounded-2xl text-sm tracking-widest uppercase hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0"
                >
                  Continue
                </button>
              ) : null}

              <Link 
                to="/shop"
                className="block text-center text-xs text-gray-500 font-bold uppercase tracking-wider mt-4 hover:text-purple-600 transition-colors"
              >
                ← Continue Shopping
              </Link>
            </div>
          </div>
        </div>

        {/* CHECKOUT FORM */}
        {showCheckout && (
          <div className="mt-12 max-w-2xl mx-auto">
            <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 sm:p-10 border border-purple-100/50 shadow-xl">
              <h2 className="text-2xl font-black text-gray-900 mb-2">Shipping Details</h2>
              <p className="text-gray-500 text-sm mb-8">Enter your details for Cash on Delivery</p>

              <form onSubmit={handlePlaceOrder} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">Full Name</label>
                    <input
                      name="fullName"
                      required
                      value={formData.fullName}
                      onChange={handleInputChange}
                      placeholder="John Doe"
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">Phone Number</label>
                    <input
                      name="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+91 98765 43210"
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">Address</label>
                  <textarea
                    name="address"
                    required
                    rows={3}
                    value={formData.address}
                    onChange={handleInputChange}
                    placeholder="123, Main Street, Apartment 4B"
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">City</label>
                    <input
                      name="city"
                      required
                      value={formData.city}
                      onChange={handleInputChange}
                      placeholder="Mumbai"
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">PIN Code</label>
                    <input
                      name="pincode"
                      required
                      value={formData.pincode}
                      onChange={handleInputChange}
                      placeholder="400001"
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    />
                  </div>
                </div>

                {/* Payment Method */}
                <div className="bg-purple-50 rounded-xl p-4 border border-purple-100">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center text-white">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-bold text-gray-900">Cash on Delivery</p>
                      <p className="text-xs text-gray-500">Pay when you receive your order</p>
                    </div>
                    <div className="ml-auto w-5 h-5 bg-purple-600 rounded-full flex items-center justify-center">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4 pt-2">
                  <button
                    type="button"
                    onClick={() => setShowCheckout(false)}
                    className="flex-1 py-4 rounded-2xl text-sm font-bold tracking-wider uppercase border-2 border-gray-200 text-gray-700 hover:bg-gray-50 transition-all"
                  >
                    Back
                  </button>
                  <button
                    type="submit"
                    className="flex-[2] bg-gradient-to-r from-gray-900 to-gray-800 text-white font-bold py-4 rounded-2xl text-sm tracking-widest uppercase hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
                  >
                    Place Order — ₹{total.toFixed(2)}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;