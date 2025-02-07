import React from 'react';
import './Hindu.css';
import { Link } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const HinduBridalWear = () => {
    const bridalWearProducts = [
        {
            id: 1,
            name: 'The Traditional Trendsetter',
            price: 'Rs.8,000',
            image: 'https://img.perniaspopupshop.com/wysiwyg/WEDDING/Traditional-Bride_24-06-22.jpg',
        },
        {
            id: 2,
            name: 'Olive Embroidered Lehenga',
            price: 'Rs.15,080',
            image: 'https://img.perniaspopupshop.com/catalog/product/e/s/ESTC122109_1.jpg?impolicy=listingimagenew',
        },
        {
            id: 3,
            name: 'Ahilya Lehenga Set',
            price: 'Rs.10,600',
            image: 'https://img.perniaspopupshop.com/catalog/product/k/l/KLST0322143_1.jpg?impolicy=listingimagenew',
        },
        {
            id: 4,
            name: 'Navy Blue Dupion Silk Set',
            price: 'Rs.6,125',
            image: 'https://img.perniaspopupshop.com/catalog/product/a/j/AJOB062227_1.jpg?impolicy=listingimagenew',
        },
        {
            id: 5,
            name: 'Light Olive Chevron Printed',
            price: 'Rs.10,000',
            image: 'https://img.perniaspopupshop.com/catalog/product/c/n/CNPC022207_1.jpg?impolicy=listingimagenew',
        },
        {
            id: 6,
            name: 'Pastel Orange Hand',
            price: 'Rs.8,400',
            image: 'https://img.perniaspopupshop.com/catalog/product/k/a/KAAK062221_1.jpg?impolicy=listingimagenew',
        },
        {
            id: 7,
            name: 'Burgundy Organza Gharara',
            price: 'Rs.19,900',
            image: 'https://img.perniaspopupshop.com/catalog/product/r/m/RMLF122118_1.jpg?impolicy=listingimagenew',
        },
        {
            id: 8,
            name: 'Fuchsia Georgette Sharara',
            price: 'Rs.16,125',
            image: 'https://img.perniaspopupshop.com/catalog/product/p/r/PRYC122133_1.jpg?impolicy=listingimagenew',
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
            name: 'The Diamond Jewellery Set',
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
            <h1 className="page-title">Hindu Bridal Wear Collection</h1>

            <h2 className="section-title">Bridal Wear</h2>
            <div className="bridal-wear-grid">
                {bridalWearProducts.map((product) => (
                    <Link to={`/hindu/${product.id}`} key={product.id} className="bridal-wear-card">
                        <img src={product.image} alt={product.name} className="bridal-wear-image" />
                        <div className="bridal-wear-details">
                            <h2 className="bridal-wear-name">{product.name}</h2>
                            <p className="bridal-wear-price">{product.price}</p>
                        </div>
                    </Link>
                ))}
            </div>

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

export default HinduBridalWear;
