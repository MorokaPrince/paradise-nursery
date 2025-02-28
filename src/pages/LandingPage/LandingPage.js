import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';

const LandingPage = () => {
  const backgroundStyle = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${process.env.PUBLIC_URL}/images/monstera.jpg)`,
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  };

  return (
    <div className="landing-page" style={backgroundStyle}>
      <div className="landing-content">
        <h1 className="company-name">Paradise Nursery</h1>
        <p className="company-description">
          Welcome to Paradise Nursery, your one-stop destination for beautiful, healthy houseplants. 
          We carefully select and nurture each plant in our collection to ensure they thrive in your home.
          With over 10 years of experience in plant care, our experts are dedicated to helping you create 
          your own indoor paradise. Whether you're a seasoned plant parent or just starting your green journey, 
          we have the perfect plants for you.
        </p>
        <Link to="/products" className="get-started-btn">
          Get Started
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;