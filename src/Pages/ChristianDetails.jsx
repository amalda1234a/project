import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useCart } from "../Context/CartContext";
import "./HinduDetails.css"; // Reuse the same CSS
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const bridalWearProducts = [
  {
    id: 1,
    name: "Bridal saree with hand embroidery",
    description: "A stunning embroidered bridal saree.",
    pricePerDay: 7500,
    mainImage: "https://www.mohifashion.com/cdn/shop/files/c.jpg?v=1730912110&width=360",
    sizes: ["S", "M", "L", "XL"],
    rentalDaysOptions: [2, 4, 7],
  },
  {
    id: 2,
    name: "Ivory Exquisite Lean Lace wedding Dress",
    description: "An elegant ivory lace wedding dress.",
    pricePerDay: 9500,
    mainImage: "https://www.mohifashion.com/cdn/shop/files/ARDELBRIDALS-AUG2023-23.jpg?v=1717171318&width=823",
    sizes: ["S", "M", "L", "XL"],
    rentalDaysOptions: [2, 4, 7],
  },
  {
    id: 3,
    name: "Bridal tissue saree with embellished 3D work",
    description: "A tissue saree with intricate embellishments.",
    pricePerDay: 8000,
    mainImage: "https://www.mohifashion.com/cdn/shop/files/5_27c76d50-be69-4a0b-a686-47a0d41bee8c.jpg?v=1730911954&width=360",
    sizes: ["S", "M", "L", "XL"],
    rentalDaysOptions: [2, 4, 7],
  },
        {
            id: 4,
            name: 'Banarasi Saree in Pastel Pink',
            description: "A banaras saree with intricate embellishments.",
            pricePerDay: 18000.00,
            mainImage: 'https://kavani.in/cdn/shop/collections/MauveShadeBridalBanarasiInSoftPureSilkFullyIntricatelyJeriWovenInLightGoldenEngagementAndManthrakodi.jpg?v=1669384625&width=710',
            sizes: ["S", "M", "L", "XL"],
    rentalDaysOptions: [2, 4, 7],
        },
        {
            id: 5,
            name: 'Signature bridal hand embroidered lehenga',
            description: "A  bridal hand embroidered lehenga",
            pricePerDay: 38000.00,
            mainImage: 'https://kavani.in/cdn/shop/files/22.png?v=1692334695&width=360',
            sizes: ["S", "M", "L", "XL"],
    rentalDaysOptions: [2, 4, 7],
        },
        {
            id: 6,
            name: 'White bridal mermaid gown with beautiful lace work',
            description: "A  bridal hand embroidered lehenga",
            pricePerDay:  40000.00,
            mainImage: 'https://kavani.in/cdn/shop/files/6_4370dc63-15b3-4dc4-a189-80edc8db5f59.png?v=1716807664&width=360',
            sizes: ["S", "M", "L", "XL"],
    rentalDaysOptions: [2, 4, 7],
        },
        {
            id: 7,
            name: 'Burgundy Organza Gharara',
            description: "A  bridal hand embroidered lehenga",
            pricePerDay: 19900,
            mainImage: 'https://kavani.in/cdn/shop/products/50.png?v=1677222296&width=360',
            sizes: ["S", "M", "L", "XL"],
    rentalDaysOptions: [2, 4, 7],
        },
        {
            id: 8,
            name: 'Signature bridal ball gown with lace and embroidery',
            description: "A  bridal hand embroidered lehenga",
            pricePerDay:  46000.00,
            mainImage: 'https://kavani.in/cdn/shop/files/11_dc5ce5d2-86f1-4ee2-ad59-b21b1f5de226.png?v=1707459096&width=360',
            sizes: ["S", "M", "L", "XL"],
    rentalDaysOptions: [2, 4, 7],
        },
];

const ChristianDetails = () => {
  const { productId } = useParams();
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const product = bridalWearProducts.find(
    (item) => item.id === parseInt(productId)
  );

  if (!product) {
    return <div>Product not found.</div>;
  }

  const [selectedSize, setSelectedSize] = useState("");
  const [selectedDays, setSelectedDays] = useState("");
  const [totalPrice, setTotalPrice] = useState(null);

  const handleCalculatePrice = () => {
    if (!selectedSize || !selectedDays) {
      alert("Please select both a size and rental duration.");
      return;
    }
    setTotalPrice(product.pricePerDay * selectedDays);
  };

  const handleAddToCart = () => {
    if (!selectedSize || !selectedDays || totalPrice === null) {
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
            <option value="">-- Select Days --</option>
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
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default ChristianDetails;
