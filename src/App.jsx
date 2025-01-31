import { useState } from 'react';
import { CartProvider } from "./Context/CartContext";
import { Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import Hindu from './Pages/Hindu';
import Muslim from './Pages/Muslim';
import Christian from './Pages/Christian';
import Blog from './Pages/Blog';
import Contact from './Pages/Contact';
import Signup from './Pages/Signup';
import Login from './Pages/Login';
import AboutUs from './Pages/AboutUs';
import Cart from './Pages/Cart';
import HinduDetails from './Pages/HinduDetails';  // Hindu dress details page
import WeddingTips from './Pages/WeddingTips';
import Sidebar from './Components/Sidebar';

function App() {
  const [count, setCount] = useState(0);

  return (
    <CartProvider> {/* Wrap the app with CartProvider */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hindu" element={<Hindu />} />
        {/* Update this path to match the Hindu product detail page */}
        <Route path="/hindu/:productId" element={<HinduDetails />} />
        <Route path="/muslim" element={<Muslim />} />
        <Route path="/christian" element={<Christian />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/weddingtips" element={<WeddingTips />} />
        <Route path="/sidebar" element={<Sidebar />} />
      </Routes>
      <Footer />
    </CartProvider>
  );
}

export default App;
