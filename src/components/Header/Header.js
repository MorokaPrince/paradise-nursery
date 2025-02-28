import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectTotalQuantity } from '../../features/cart/cartSlice';
import './Header.css';

const Header = ({ currentPage }) => {
  const totalQuantity = useSelector(selectTotalQuantity);

  return (
    <header className="header">
      <div className="header-logo">
        <Link to="/">
          <h1>Paradise Nursery</h1>
        </Link>
      </div>
      <nav className="header-nav">
        {currentPage !== 'home' && (
          <Link to="/" className="nav-link">
            Home
          </Link>
        )}
        {currentPage !== 'products' && (
          <Link to="/products" className="nav-link">
            Shop Plants
          </Link>
        )}
        {currentPage !== 'cart' && (
          <Link to="/cart" className="cart-icon-container">
            <div className="cart-icon">
              <i className="fas fa-shopping-cart"></i>
              {totalQuantity > 0 && (
                <span className="cart-count">{totalQuantity}</span>
              )}
            </div>
          </Link>
        )}
      </nav>
    </header>
  );
};

export default Header;