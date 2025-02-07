import React from 'react';
import './WeddingTips.css'; // Import CSS for styling
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const WeddingTips = () => {
  const tips = [
    {
      id: 1,
      title: "Start Planning Early",
      description: "Begin planning at least 12 months in advance to avoid last-minute stress."
    },
    {
      id: 2,
      title: "Set a Realistic Budget",
      description: "Define your budget early and allocate it wisely for venue, attire, and vendors."
    },
    {
      id: 3,
      title: "Choose Your Dream Team",
      description: "Select reliable vendors and involve family and friends to make the process smoother."
    },
    {
      id: 4,
      title: "Make Time for Self-Care",
      description: "Stay relaxed with yoga, meditation, or regular exercise as your wedding day approaches."
    },
    {
      id: 5,
      title: "Add Personal Touches",
      description: "Incorporate unique elements like handwritten notes or custom decor for a personal feel."
    }
  ];

  return (
    <>
    <Navbar/>
    <div className='main'>
    <div className="wedding-tips-container">
      <h1>Tips and Advice for Your Dream Wedding</h1>
      <div className="tips-list">
        {tips.map((tip) => (
          <div key={tip.id} className="tip-card">
            <h2>{tip.title}</h2>
            <p>{tip.description}</p>
          </div>
        ))}
      </div>
    </div>
    </div>
    <Footer/>
    </>
  );
};

export default WeddingTips;