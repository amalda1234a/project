import React from 'react';
import Navbar from '../Components/Navbar';
import './AboutUs.css'; // Import the CSS for styling
import Footer from '../Components/Footer';

const AboutUs = () => {
  return (
    <>
    <Navbar />
    <div className="about-us-container">
      <h1>About Us</h1>
      <p>Welcome to your dream wedding planning website! We help brides-to-be prepare for their big day by offering personalized tips, advice, and inspiration.</p>

      <section className="mission">
        <h2>Our Mission</h2>
        <p>Our mission is to make wedding planning stress-free and exciting! We offer curated content and expert advice on every aspect of your wedding planning journey.</p>
      </section>

      <section className="services">
        <h2>What We Offer</h2>
        <ul>
          <li><strong>Wedding Tips:</strong> Practical and creative tips for the perfect wedding.</li>
          <li><strong>Bridal Advice:</strong> Expert advice on bridal fashion, beauty, and more.</li>
          <li><strong>Planning Tools:</strong> Easy-to-use planning tools and checklists to stay organized.</li>
          <li><strong>Inspiration:</strong> Wedding inspiration galleries for themes, venues, and decor ideas.</li>
        </ul>
      </section>

      <section className="team">
        <h2>Meet Our Team</h2>
        <p>We are a group of wedding planners, designers, and creatives who are passionate about making your wedding day as special as possible.</p>
        <div className="team-members">
          <div className="team-member">
            <img src="team-member1.jpg" alt="Team Member 1" />
            <h3>Jane Doe</h3>
            <p>Wedding Planner & Expert Advisor</p>
          </div>
          <div className="team-member">
            <img src="team-member2.jpg" alt="Team Member 2" />
            <h3>John Smith</h3>
            <p>Creative Director & Designer</p>
          </div>
          {/* Add more team members as needed */}
        </div>
      </section>

      <footer>
        <p>&copy; 2025 Wedding Bridal Website. All rights reserved.</p>
      </footer>
    </div>
    <Footer/>
    </>
  );
};

export default AboutUs;
