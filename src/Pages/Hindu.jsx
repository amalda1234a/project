import React from 'react';
import './Hindu.css';
import { Link } from 'react-router-dom';

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

    return (
        <div className="bridal-wear-container">
            <h1 className="page-title">Hindu Bridal Wear Collection</h1>

            {/* Bridal Wear Section */}
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
        </div>
    );
};

export default HinduBridalWear;
