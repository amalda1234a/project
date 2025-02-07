import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useCart } from "../Context/CartContext";
import "./MuslimDetails.css"; // Using shared styles
import Navbar from "../Components/Navbar";

const bridalWearProducts = [
  {
    id: 1,
    name: "The Traditional Trendsetter",
    description: "A gorgeous traditional bridal dress.",
    pricePerDay: 8000,
    mainImage: "https://i.pinimg.com/originals/82/91/04/82910439487383f84b7031b46020cb3e.jpg",
    sizes: ["S", "M", "L", "XL"],
    rentalDaysOptions: [2, 4, 7],
  },
  {
    id: 2,
    name: "Olive Embroidered Lehenga",
    description: "Beautiful olive-colored lehenga with embroidery.",
    pricePerDay: 15080,
    mainImage: "https://zoylee.com/wp-content/uploads/2023/05/Wonders-of-Pastel-On-Muslim-Bridal-Dress-02.webp",
    sizes: ["S", "M", "L", "XL"],
    rentalDaysOptions: [2, 4, 7],
  },
  {
    id: 3,
    name: "Ahilya Lehenga Set",
    description: "Champagne-colored lehenga set with elegant details.",
    pricePerDay: 10600,
    mainImage: "https://bridal-australia.com.au/wp-content/uploads/2024/03/Champagne-Muslim-Wedding-Dresses-for-Hijab-Bride-High-Collar-Long-Puff-Sleeve-A-Line-Satin-Pearls.webp",
    sizes: ["S", "M", "L", "XL"],
    rentalDaysOptions: [2, 4, 7],
  },
  // Add more products here
];

const jewelryAndAccessories = [
  {
    id: 1,
    name: "The Statement Necklace Set",
    price: "Rs.5,000",
    image: "https://cdn0.weddingwire.in/article/9725/original/1280/jpg/85279-bridal-jewellery-for-red-lehenga-shutterdown-photography-purab-paschim-jewellery-for-red-lehenga.webp",
  },
  {
    id: 2,
    name: "The Golden Meenakari Set",
    price: "Rs.6,500",
    image: "https://cdn0.weddingwire.in/article/7725/original/1280/jpg/85277-bridal-jewellery-for-red-lehenga-paran-singh-photography-payal-keyal.webp",
  },
  {
    id: 3,
    name: "The Pearl Chhapka",
    price: "Rs.9,200",
    image: "https://cdn0.weddingwire.in/article/1715/original/1280/jpg/85171-accessories-for-red-lehenga-pictorizzah-chapka.webp",
  },
  // Add more items here
];

const MuslimDetails = () => {
  const { productId } = useParams();
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const product = bridalWearProducts.find(
    (item) => item.id === parseInt(productId)
  );

  if (!product) {
    return (
      <div>
        <h2>Product not found!</h2>
        <p>It seems like this product no longer exists. Please go back to the products list.</p>
        <button onClick={() => navigate('/muslim')}>Go to Muslim Bridal Wear Collection</button>
      </div>
    );
  }

  const [selectedSize, setSelectedSize] = useState("");
  const [selectedDays, setSelectedDays] = useState(0);  // Set to number 0 instead of ""
  const [totalPrice, setTotalPrice] = useState(null);

  const handleCalculatePrice = () => {
    if (!selectedSize || selectedDays === 0) {
      alert("Please select both a size and rental duration.");
      return;
    }
    setTotalPrice(product.pricePerDay * selectedDays);
  };

  const handleAddToCart = () => {
    if (!selectedSize || selectedDays === 0 || totalPrice === null) {
      alert("Please select size, rental duration, and calculate the price first.");
      return;
    }
    addToCart(product, selectedSize, selectedDays, totalPrice);
    alert(`Added to cart: ${product.name} in size ${selectedSize} for ${selectedDays} days. Total price: ₹${totalPrice}`);
    navigate("/cart");
  };

  return (
    <>
    <Navbar/>
    
    <div className="dress-detail">
      <div className="dress-image">
        <img src={product.mainImage} alt="Main View" />
      </div>

      <div className="dress-info">
        <h1>{product.name}</h1>
        <p>{product.description}</p>
        <p className="price">Rental Price: ₹{product.pricePerDay}/day</p>

        <div className="size-selector">
          <label>Select Size: </label>
          <select value={selectedSize} onChange={(e) => setSelectedSize(e.target.value)}>
            <option value="">-- Select Size --</option>
            {product.sizes.map((size) => (
              <option key={size} value={size}>{size}</option>
            ))}
          </select>
        </div>

        <div className="rental-selector">
          <label>Select Rental Duration: </label>
          <select value={selectedDays} onChange={(e) => setSelectedDays(Number(e.target.value))}>
            <option value={0}>-- Select Days --</option>
            {product.rentalDaysOptions.map((days) => (
              <option key={days} value={days}>{days} days</option>
            ))}
          </select>
        </div>

        <button className="calculate-price" onClick={handleCalculatePrice}>Calculate Price</button>

        {totalPrice !== null && <p className="total-price">Total Price: <strong>₹{totalPrice}</strong></p>}

        <button className="add-to-cart" onClick={handleAddToCart}>Add to Cart</button>

        <h1>Description</h1>
        <p>{product.description}</p>

        <h2>Jewelry & Accessories</h2>
        <div className="bridal-wear-grid">
          {jewelryAndAccessories.map((item) => (
            <div key={item.id} className="bridal-wear-card">
              <img src={item.image} alt={item.name} className="bridal-wear-image" />
              <div className="bridal-wear-details">
                <h2 className="bridal-wear-name">{item.name}</h2>
                <p className="bridal-wear-price">{item.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default MuslimDetails;
