import React from 'react'
import './Footer.css';
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="footer">
    {/* Top Section */}
    <div className="footer-top">
      <div className="footer-column">
        <h3>Shop</h3>
        <ul>
          <li><a href="/new-arrivals">New Arrivals</a></li>
          <li><a href="/best-sellers">Best Sellers</a></li>
          <li><a href="/sale">Sale</a></li>
          <li><a href="/collections">Collections</a></li>
        </ul>
      </div>
      <div className="footer-column">
        <h3>Customer Service</h3>
        <ul>
          <li><a href="/contact">Contact Us</a></li>
          <li><a href="/faq">FAQs</a></li>
          <li><a href="/returns">Returns</a></li>
          <li><a href="/shipping">Shipping Info</a></li>
        </ul>
      </div>
      <div className="footer-column">
        <h3>Company</h3>
        <ul>
          <li><a href="/about">About Us</a></li>
          <li><a href="/careers">Careers</a></li>
          <li><a href="/sustainability">Sustainability</a></li>
          <li><a href="/terms">Terms & Conditions</a></li>
        </ul>
      </div>
      <div className="footer-column social-media">
        <h3>Follow Us</h3>
        <div className="social-icons">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
        </div>
      </div>
    </div>

    {/* Bottom Section */}
    <div className="footer-bottom">
      <p>&copy; {new Date().getFullYear()} Wedding Wardrobe. All Rights Reserved.</p>
    </div>
  </footer>
  )
}

export default Footer