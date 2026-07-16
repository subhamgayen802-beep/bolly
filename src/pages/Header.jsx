// src/pages/Header.jsx
import { useState, useEffect } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser, checkAuth } from '../features/authSlice';
import { useCart } from '../context/CartContext';

export default function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isAuthenticated, loading } = useSelector((state) => state.auth);
  const { totalItems } = useCart();
  
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    dispatch(checkAuth());
  }, [dispatch]);

  const handleAuth = () => {
    if (isAuthenticated) {
      dispatch(logoutUser());
      navigate('/');
    } else {
      navigate('/signup');
    }
  };

  const navLinks = [
    { to: '/shop', label: 'Shop' },
    { to: '/blog', label: 'Blog' },
    { to: '/contact', label: 'Contact' },
    { to: '/about', label: 'About' },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 w-full px-4 sm:px-8 md:px-12 py-4 flex items-center justify-between bg-white/70 backdrop-blur-xl z-[999] border-b border-purple-100/30 select-none">
        
        {/* Logo */}
        <Link to="/" className="text-2xl sm:text-3xl font-black tracking-tight text-gray-900 hover:opacity-80 transition-opacity">
          bolly<span className="text-purple-600">.</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden sm:flex items-center gap-1 bg-purple-100/40 backdrop-blur-md p-1 rounded-full border border-purple-200/30">
          {navLinks.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `px-4 py-1.5 text-xs font-bold tracking-wide rounded-full transition-all duration-200 ${
                  isActive
                    ? 'bg-purple-600 text-white shadow-sm'
                    : 'text-gray-800 hover:text-black hover:bg-black/5'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={handleAuth}
            disabled={loading}
            className={`px-5 py-2 rounded-full text-xs font-black tracking-wider uppercase transition-all duration-300 active:scale-95 ${
              isAuthenticated
                ? 'border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white'
                : 'bg-gray-900 text-white hover:bg-gray-800'
            }`}
          >
            {loading ? '...' : isAuthenticated ? 'Log Out' : 'Sign Up'}
          </button>

          <span className="h-6 w-px bg-gray-300"></span>

          {/* Cart with Badge */}
          <Link
            to="/cart"
            className="relative flex items-center justify-center w-10 h-10 rounded-full bg-[#dffd30] hover:bg-[#cbe624] text-gray-900 transition-all duration-200 active:scale-95"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007z" />
            </svg>
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-[10px] font-black rounded-full flex items-center justify-center border-2 border-white animate-pulse">
                {totalItems}
              </span>
            )}
          </Link>
        </div>

        {/* Mobile */}
        <div className="flex sm:hidden items-center gap-3">
          <Link to="/cart" className="relative flex items-center justify-center w-9 h-9 rounded-full bg-[#dffd30] text-gray-900">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007z" />
            </svg>
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white text-[8px] font-black rounded-full flex items-center justify-center border border-white">
                {totalItems}
              </span>
            )}
          </Link>

          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex flex-col gap-1.5 p-2"
          >
            <span className={`w-5 h-0.5 bg-gray-900 rounded-full transition-all ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`w-5 h-0.5 bg-gray-900 rounded-full transition-all ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`w-3 h-0.5 bg-gray-900 rounded-full transition-all ${mobileMenuOpen ? '-rotate-45 -translate-y-2 w-5' : ''}`}></span>
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div className={`fixed inset-0 z-[998] sm:hidden transition-all ${mobileMenuOpen ? 'visible' : 'invisible'}`}>
        <div 
          className={`absolute inset-0 bg-black/20 backdrop-blur-sm transition-opacity ${mobileMenuOpen ? 'opacity-100' : 'opacity-0'}`}
          onClick={() => setMobileMenuOpen(false)}
        />
        <div className={`absolute top-[72px] left-4 right-4 bg-white rounded-3xl shadow-2xl border border-purple-100 p-6 transition-all ${
          mobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}>
          <nav className="flex flex-col gap-2 mb-6">
            {navLinks.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `px-5 py-3 rounded-2xl text-sm font-bold transition-all ${
                    isActive ? 'bg-purple-600 text-white' : 'text-gray-700 hover:bg-purple-50'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
          <div className="h-px bg-gray-200 mb-6"></div>
          <button
            onClick={() => { setMobileMenuOpen(false); handleAuth(); }}
            className={`w-full py-3.5 rounded-2xl text-sm font-black tracking-wider uppercase transition-all ${
              isAuthenticated
                ? 'border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white'
                : 'bg-gray-900 text-white'
            }`}
          >
            {isAuthenticated ? 'Log Out' : 'Sign Up'}
          </button>
        </div>
      </div>

      {/* Spacer */}
      <div className="h-[72px]"></div>
    </>
  );
}