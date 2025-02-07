import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";  // Import useNavigate
import { useCart } from "../Context/CartContext"; // Import the CartContext
import "./HinduDetails.css";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

// Dummy data for the bridal products
const bridalWearProducts = [
  {
    id: 1,
    name: "The Traditional Trendsetter",
    description: "A stunning traditional bridal lehenga with elegant embroidery.",
    pricePerDay: 8000,
    mainImage: "https://img.perniaspopupshop.com/wysiwyg/WEDDING/Traditional-Bride_24-06-22.jpg",
    sizes: ["S", "M", "L", "XL"],
    rentalDaysOptions: [2, 4, 7],
  },
  {
    id: 2,
    name: "Olive Embroidered Lehenga",
    description: "An olive-colored lehenga with fine embroidery, perfect for a sophisticated look.",
    pricePerDay: 15080,
    mainImage: "https://img.perniaspopupshop.com/catalog/product/e/s/ESTC122109_1.jpg?impolicy=listingimagenew",
    sizes: ["S", "M", "L", "XL"],
    rentalDaysOptions: [2, 4, 7],
  },
  {
    id: 3,
    name: "Ahilya Lehenga Set",
    description: "An Ahilya lehenga set with fine embroidery, perfect for a sophisticated look.",
    pricePerDay: 10600,
    mainImage: "https://img.perniaspopupshop.com/catalog/product/k/l/KLST0322143_1.jpg?impolicy=listingimagenew",
    sizes: ["S", "M", "L", "XL"],
    rentalDaysOptions: [2, 4, 7],
  },
  {
    id: 4,
    name: 'Navy Blue Dupion Silk Set',
    description: "Navy Blue Dupion Silk Set with fine embroidery, perfect for a sophisticated look.",
    pricePerDay: 6125,
    mainImage: 'https://img.perniaspopupshop.com/catalog/product/a/j/AJOB062227_1.jpg?impolicy=listingimagenew',
    sizes: ["S", "M", "L", "XL"],
    rentalDaysOptions: [2, 4, 7],
},
{
    id: 5,
    name: 'Light Olive Chevron Printed',
    description: "Light Olive Chevron Printed with fine embroidery, perfect for a sophisticated look.",
    pricePerDay: 10000,
    mainImage: 'https://img.perniaspopupshop.com/catalog/product/c/n/CNPC022207_1.jpg?impolicy=listingimagenew',
    sizes: ["S", "M", "L", "XL"],
    rentalDaysOptions: [2, 4, 7],
},
{
    id: 6,
    name: 'Pastel Orange Hand',
    description: "Pastel Orange Hand with fine embroidery, perfect for a sophisticated look.",
    pricePerDay: 8400,
    mainImage: 'https://img.perniaspopupshop.com/catalog/product/k/a/KAAK062221_1.jpg?impolicy=listingimagenew',
    sizes: ["S", "M", "L", "XL"],
    rentalDaysOptions: [2, 4, 7],
},
{
    id: 7,
    name: 'Burgundy Organza Gharara',
    description: "Burgundy Organza Gharara with fine embroidery, perfect for a sophisticated look.",
    pricePerDay: 19900,
    mainImage: 'https://img.perniaspopupshop.com/catalog/product/r/m/RMLF122118_1.jpg?impolicy=listingimagenew',
    sizes: ["S", "M", "L", "XL"],
    rentalDaysOptions: [2, 4, 7],
},
{
    id: 8,
    name: 'Fuchsia Georgette Sharara',
    description: "Fuchsia Georgette Sharara with fine embroidery, perfect for a sophisticated look.",
    pricePerDay: 16125,
    mainImage: 'https://img.perniaspopupshop.com/catalog/product/p/r/PRYC122133_1.jpg?impolicy=listingimagenew',
    sizes: ["S", "M", "L", "XL"],
    rentalDaysOptions: [2, 4, 7],
},
  // Add more products as needed
];

const HinduDetails = () => {
  const { productId } = useParams(); // Get product ID from the URL
  const { addToCart } = useCart(); // Use the addToCart function from CartContext
  const navigate = useNavigate();  // Initialize useNavigate for redirection

  const product = bridalWearProducts.find(
    (item) => item.id === parseInt(productId) // Ensure productId is treated as a number
  );

  // Handle product not found
  if (!product) {
    return <div>Product not found.</div>;
  }

  const [selectedSize, setSelectedSize] = useState("");
  const [selectedDays, setSelectedDays] = useState("");
  const [totalPrice, setTotalPrice] = useState(0);

  const handleCalculatePrice = () => {
    if (!selectedSize || !selectedDays) {
      alert("Please select both a size and rental duration.");
      return;
    }
    const price = product.pricePerDay * selectedDays;
    setTotalPrice(price);
  };

  const handleAddToCart = () => {
    if (!selectedSize || !selectedDays) {
      alert("Please select both a size and rental duration.");
      return;
    }
    const price = product.pricePerDay * selectedDays;
    addToCart(product, selectedSize, selectedDays, price);
    alert(`Added to cart: ${product.name} in size ${selectedSize} for ${selectedDays} days. Total price: ₹${price}`);

    // Redirect to the Cart page after adding to cart
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

        {/* Size Selection */}
        <div className="size-selector">
          <label htmlFor="size">Select Size: </label>
          <select
            id="size"
            value={selectedSize}
            onChange={(e) => setSelectedSize(e.target.value)}
          >
            <option value="">-- Select Size --</option>
            {product.sizes.map((size) => (
              <option key={size} value={size}>
                {size}
              </option>
            ))}
          </select>
        </div>

        {/* Rental Days Selection */}
        <div className="rental-selector">
          <label htmlFor="rentalDays">Select Rental Duration: </label>
          <select
            id="rentalDays"
            value={selectedDays}
            onChange={(e) => setSelectedDays(Number(e.target.value))}
          >
            <option value="">-- Select Days --</option>
            {product.rentalDaysOptions.map((days) => (
              <option key={days} value={days}>
                {days} days
              </option>
            ))}
          </select>
        </div>

        {/* Display Total Price */}
        {totalPrice > 0 && (
          <p className="total-price">
            Total Price: <strong>₹{totalPrice}</strong>
          </p>
        )}

        <button className="rent-now" onClick={handleCalculatePrice}>
          Calculate Price
        </button>
        <button className="add-to-cart" onClick={handleAddToCart}>
          Add to Cart
        </button>

        <h1>Description</h1>
        <p>{product.description}</p>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default HinduDetails;
