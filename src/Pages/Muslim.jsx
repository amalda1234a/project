import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import './Muslim.css';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';

const MuslimBridalWear = () => {
    const bridalWearProducts = [
        {
            id: 1,
            name: 'The Traditional Trendsetter',
            price: 'Rs.8,000',
            image: 'https://i.pinimg.com/originals/82/91/04/82910439487383f84b7031b46020cb3e.jpg',
        },
        {
            id: 2,
            name: 'Olive Embroidered Lehenga',
            price: 'Rs.15,080',
            image: 'https://zoylee.com/wp-content/uploads/2023/05/Wonders-of-Pastel-On-Muslim-Bridal-Dress-02.webp',
        },
        {
            id: 3,
            name: 'Ahilya Lehenga Set',
            price: 'Rs.10,600',
            image: 'https://bridal-australia.com.au/wp-content/uploads/2024/03/Champagne-Muslim-Wedding-Dresses-for-Hijab-Bride-High-Collar-Long-Puff-Sleeve-A-Line-Satin-Pearls.webp',
        },
        {
            id: 4,
            name: 'Navy Blue Dupion Silk Set',
            price: 'Rs.6,125',
            image: 'https://i.pinimg.com/736x/e8/9b/21/e89b21cf251612a936be0c6d1573956d.jpg',
        },
        {
            id: 5,
            name: 'Light Olive Chevron Printed',
            price: 'Rs.10,000',
            image: 'https://i.pinimg.com/736x/98/19/c8/9819c8ae65d41bf7bd150e197d6c657a.jpg',
        },
        {
            id: 6,
            name: 'Pastel Orange Hand',
            price: 'Rs.8,400',
            image: 'https://i.etsystatic.com/54052348/r/il/3a728c/6403403921/il_570xN.6403403921_hoh7.jpg',
        },
        {
            id: 7,
            name: 'Burgundy Organza Gharara',
            price: 'Rs.19,900',
            image: 'https://image.wedmegood.com/resized-nw/700X/wp-content/uploads/2019/06/J7A7422.jpg',
        },
        {
            id: 8,
            name: 'Fuchsia Georgette Sharara',
            price: 'Rs.16,125',
            image: 'https://i.pinimg.com/736x/61/4f/57/614f57db32f694778a580b0fb5b2728c.jpg',
        },
    ];

    const jewelryAndAccessories = [
        {
            id: 1,
            name: 'The Statement Necklace Set',
            price: 'Rs.5,000',
            image: 'https://cdn0.weddingwire.in/article/9725/original/1280/jpg/85279-bridal-jewellery-for-red-lehenga-shutterdown-photography-purab-paschim-jewellery-for-red-lehenga.webp',
        },
        {
            id: 2,
            name: 'The Golden Meenakari Set',
            price: 'Rs.6,500',
            image: 'https://cdn0.weddingwire.in/article/7725/original/1280/jpg/85277-bridal-jewellery-for-red-lehenga-paran-singh-photography-payal-keyal.webp',
        },
        {
            id: 3,
            name: 'The Pearl Chhapka',
            price: 'Rs.9,200',
            image: 'https://cdn0.weddingwire.in/article/1715/original/1280/jpg/85171-accessories-for-red-lehenga-pictorizzah-chapka.webp',
        },
        {
            id: 4,
            name: 'The Diamond Jwellery Set',
            price: 'Rs.6,800',
            image: 'https://cdn0.weddingwire.in/article/9615/original/1280/jpg/85169-accessories-for-red-lehenga-light-chamber-haar.webp',
        },
        {
            id: 5,
            name: 'The Simple Polki Mang Tikka',
            price: 'Rs.6,800',
            image: 'https://cdn0.weddingwire.in/article/7715/original/1280/jpg/85177-accessories-for-red-lehenga-studio-umair-khan-minimalist-jewellery.webp',
        },
        {
            id: 6,
            name: 'The Traditional Matha Patti',
            price: 'Rs.5,800',
            image: 'https://cdn0.weddingwire.in/article/7815/original/1280/jpg/85187-accessories-for-red-lehenga-the-wedding-files-traditional-jewellery.webp',
        },
        {
            id: 7,
            name: 'Artificial Polki Bridal Set',
            price: 'Rs.8,800',
            image: 'https://cdn0.weddingwire.in/article/1625/original/1280/jpg/85261-bridal-jewellery-for-red-lehenga-kamna-sharma-ganpati-fashion-jewellery.webp',
        },
        {
            id: 8,
            name: 'Pearl Panchlada Set',
            price: 'Rs.5,800',
            image: 'https://cdn0.weddingwire.in/article/9135/original/1280/jpg/85319-bridal-accessories-for-red-lehenga-mortantra-pearl-lada.webp',
        },
    ];

    return (
        <>
        <Navbar/>
       
        <div className="bridal-wear-container">
            <h1 className="page-title">Muslim Bridal Wear Collection</h1>
            
            {/* Bridal Wear Section */}
            <h2 className="section-title">Bridal Wear</h2>
            <div className="bridal-wear-grid">
                {bridalWearProducts.map((product) => (
                    <div key={product.id} className="bridal-wear-card">
                        <Link to={`/muslim-details/${product.id}`}> {/* Link to details page */}
                            <img src={product.image} alt={product.name} className="bridal-wear-image" />
                        </Link>
                        <div className="bridal-wear-details">
                            <h2 className="bridal-wear-name">{product.name}</h2>
                            <p className="bridal-wear-price">{product.price}</p>
                        </div>
                    </div>
                ))}
            </div>

            <br />

            {/* Jewelry and Accessories Section */}
            <h2 className="section-title">Jewelry & Accessories</h2>
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
        <Footer/>
        </>
    );
};

export default MuslimBridalWear;
