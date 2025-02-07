import React from "react";
import { Link } from 'react-router-dom'
import "./Home.css"; // Add your custom CSS for styling
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const HomePage = () => {
  return (
    <>
    

      <div className="home-page">
      <Navbar />
        
        {/* Hero Section */}
        <section className="hero-section">
          <div className="hero-content">
            <h1 style={{ color: '#333333', marginRight: '300px', marginTop: '190px' }}>Where Style Meets Your Special Day</h1>
            <p style={{ color: '#333333', marginRight: '70px' }}>Your one-stop destination for renting bridal essentials.</p>
            <button className="shop-now-btn">Shop Here</button>
          </div>
        </section>

        {/* Featured Categories */}
        <section className="categories-section">
          <h2>Explore Our Categories</h2>
          <br></br>
          <div className="categories-container">
            <div className="category-card">
              <img src="https://images.squarespace-cdn.com/content/v1/5c2db4029772aebeba129860/1632371850598-Q30HL9ON6C440SQVBE3I/24206078f86f034783414d7743c213a8-medium.jpg" alt="Bridal Dresses" />
              <h3><Link to='/muslim'> MUSLIM BRIDAL WEAR</Link></h3>
            </div>
            <div className="category-card">
              <img src="https://images.prismic.io/devcms/22047cb0-5772-47dd-9eff-0adad4abcba6_5.%2Bstraight%2Bcut%2Bgown.jpg?auto=compress,format" alt="Groom Wear" />
              <h3><Link to='/christian'>CHRISTIAN BRIDAL WEAR</Link></h3>
            </div>
            <div className="category-card">
              <img src="https://symphonyevents.com.au/wp-content/uploads/2021/08/Destination-Wedding-06-1.jpg" alt="Accessories" />
              <h3> <Link to='/hindu'>  HINDU BRIDAL WEAR </Link></h3>
            </div>
            <br></br><br></br><br></br>
            {/* <div className="category-card">
            <img src="https://cdn.shopify.com/s/files/1/0043/9291/0921/files/sb730_360x.jpg?v=1735645965" alt="Jewelry" />
            <h3>ACCSESSORIES</h3>
          </div>
    
          <div className="category-card">
            <img src="https://blingbag.co.in/cdn/shop/files/EmeraldAriannaBridalVictorianJewellerySet-NewArrival_1_360x.jpg?v=1734954169" alt="Jewelry" />
            <h3>JEWELRIES</h3>
          </div> */}

            <section id="about-us">
              <div className="about-container">
                {/* Content Section */}
                <div className="about-content">
                  <h2 className="about-title">Who We Are</h2>
                  <p className="about-description">
                    At <strong>Wedding Wardrobe</strong>, we’re passionate about crafting experiences that inspire. Our team
                    of creative thinkers and problem solvers is committed to delivering <strong>Wedding wears</strong>{" "}
                    with innovation, precision, and care.
                  </p>
                  <p className="about-description">
                    With <strong>Genuine</strong> at the heart of what we do, we strive to create solutions that not only
                    meet expectations but exceed them. Join us on our journey to make ideas come alive!
                  </p>
                  <Link to='/contact'> <a href="#contact" className="about-button">Get in Touch</a></Link>
                </div>
                {/* Image Section */}
                <div className="about-image">
                  <img
                    src="https://media.istockphoto.com/id/940217166/photo/exchange-of-wedding-rings-white.jpg?s=612x612&w=0&k=20&c=90KBKD25Ab6NevFoA3bW4hqrX3FLM4dAl5FU6NLBTPo=" /* Replace with your image URL */
                    alt="Creative Team"
                  />
                </div>
              </div>
            </section>

          </div>
        </section>

        {/* Featured Products */}
        <section className="featured-products-section">
          <h2>Featured Products</h2>
          <br></br>
          <div className="products-container">
            <div className="product-card">
              <img src="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcT9Vf6XI_QZIoQpfC28Bd4JaPupAW20W9_Z1x_QeCteOiV1Bea6K_2WAl6L74oBEScFoAWQ6gvHg-zVNcjqO77w5DCvc3rwoK05cSlEamosUKeLp2XVZL4o" alt="Product 1" />
              <h3>Elegant Bridal Gown</h3>
              <p>Starting at $99</p>
            </div>
            <div className="product-card">
              <img src="https://i.pinimg.com/736x/cc/1e/e4/cc1ee440ac61789c86a2db2bb4a00602.jpg" alt="Product 2" />
              <h3>Premium lehenga</h3>
              <p>Starting at $129</p>
            </div>
            <div className="product-card">
              <img src="https://i.pinimg.com/736x/1f/ba/01/1fba012a7f09ceb32a5d57dd9a061705.jpg" alt="Product 3" />
              <h3>Royal Pakistani Wedding Gown</h3>
              <p>Starting at $49</p>
            </div>
            <div className="product-card">
              <img src="https://rajgharanaa.com/wp-content/uploads/2024/08/NARMADA-6.jpg" alt="Product 4" />
              <h3>Wedding Veil</h3>
              <p>Starting at $19</p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="cta-section">
          <div className="cta-content">
            <h2>Tips and Advice for your Dream Wedding</h2>
            <p>Find everything you need to make your special day unforgettable.</p>
            <br></br>
            <button className="cta-btn"><Link to='/weddingtips'> Get Started</Link></button>
            <br></br><br></br>
            <div className="one">
              <img className="img1" src="https://media-api.xogrp.com/images/8f9ec90a-4322-44e3-9c72-0eed6b48d995~rs_768.h" alt="img" />
            </div>
            <div className="second">
              <img className="img2" src="https://weddingaffair.co.in/wp-content/uploads/2023/04/thematic-weddings-wedding-affair.webp" alt="" />
            </div>
          </div>
        </section>





        {/* Footer */}
        {/* <footer className="footer">
        <p>&copy; 2025 Bridal Wedding Wardrobe. All rights reserved.</p>
      </footer> */}
        <Footer />
      </div>
    </>
  );
};

export default HomePage;