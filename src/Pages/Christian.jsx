import React from 'react';
import './Christian.css';

const ChristianBridalWear = () => {
    const bridalWearProducts = [
        {
            id: 1,
            name: 'Bridal saree with hand embroidery',
            price: 'Rs. 45,000.00',
            image: 'https://www.mohifashion.com/cdn/shop/files/c.jpg?v=1730912110&width=360',
        },
        {
            id: 2,
            name: 'Ivory Exquisite Lean Lace wedding Dress',
            price: 'Rs. 76,000.00',
            image: 'https://www.mohifashion.com/cdn/shop/files/ARDELBRIDALS-AUG2023-23.jpg?v=1717171318&width=823',
        },
        {
            id: 3,
            name: 'bridal tissue saree with emblished 3Dwork',
            price: 'Rs. 50,000.00',
            image: 'https://www.mohifashion.com/cdn/shop/files/5_27c76d50-be69-4a0b-a686-47a0d41bee8c.jpg?v=1730911954&width=360',
        },
        {
            id: 4,
            name: 'Banarasi Saree in Pastel Pink',
            price: 'Rs. 18,000.00',
            image: 'https://kavani.in/cdn/shop/collections/MauveShadeBridalBanarasiInSoftPureSilkFullyIntricatelyJeriWovenInLightGoldenEngagementAndManthrakodi.jpg?v=1669384625&width=710',
        },
        {
            id: 5,
            name: 'Signature bridal hand embroidered lehanga for bride anila',
            price: 'Rs. 38,000.00',
            image: 'https://kavani.in/cdn/shop/files/22.png?v=1692334695&width=360',
        },
        {
            id: 6,
            name: 'White bridal mermaid gown with beautiful lace work',
            price: 'Rs. 40,000.00',
            image: 'https://kavani.in/cdn/shop/files/6_4370dc63-15b3-4dc4-a189-80edc8db5f59.png?v=1716807664&width=360',
        },
        {
            id: 7,
            name: 'Burgundy Organza Gharara',
            price: 'Rs.19,900',
            image: 'https://kavani.in/cdn/shop/products/50.png?v=1677222296&width=360',
        },
        {
            id: 8,
            name: 'Signature bridal ball gown with lace and hand embroidery on silk fabric',
            price: 'Rs. 46,000.00',
            image: 'https://kavani.in/cdn/shop/files/11_dc5ce5d2-86f1-4ee2-ad59-b21b1f5de226.png?v=1707459096&width=360',
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
        <div className="bridal-wear-container">
            <h1 className="page-title">Christian Bridal Wear Collection</h1>
            <div className="back">
                {/* <h2 style={{ marginTop: '240px', color: '#b22222' }}> FOR THE BRIDE</h2> */}
            </div>
            <br />

            {/* Bridal Wear Section */}
            <h2 className="section-title">Bridal Wear</h2>
            <div className="bridal-wear-grid">
                {bridalWearProducts.map((product) => (
                    <div key={product.id} className="bridal-wear-card">
                        <img src={product.image} alt={product.name} className="bridal-wear-image" />
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
            <br/>
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
    );
};

export default ChristianBridalWear;