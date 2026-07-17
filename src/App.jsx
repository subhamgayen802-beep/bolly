import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from "react";
import Header from './pages/Header'
import BollyHero from './pages/BottleViewer';
import Blog from "./pages/blog"
import About from "./pages/about"
import Contact from "./pages/contact"
import Shop from "./pages/Shop"
import Home from "./pages/homepage"
import Login from "./pages/login"
import SignUp from './pages/signup'
import { checkAuth } from "./features/authSlice";
import Cart from './pages/cart';


function App() {

  

  
  const dispatch =useDispatch();
  
   const { isAuthenticated, user, checkingAuth } = useSelector((state) => state.auth);
 
  useEffect(() => {
    dispatch(checkAuth());
  }, [dispatch]);
 
  if (checkingAuth) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }
  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route  path="/" element={<Home />}/>
        <Route  path="/about" element={<About />}/>
        <Route  path="/contact" element={<Contact />}/>
        <Route  path="/shop" element={<Shop />}/>
        <Route  path="/blog" element={<Blog />}/>
        <Route  path="/signin" element={<Login />}/>
        <Route  path="/signup" element={<SignUp />}/>
        <Route  path="/cart" element={<Cart />}/>


    
      
      </Routes>
    </BrowserRouter>
  );
}

export default App;