import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';

// Plant data
const plantData = [
  {
    id: 1,
    name: 'Monstera Deliciosa',
    price: 35.99,
    image: '/images/monstera.jpg',
    category: 'Large Plants',
    description: 'The Swiss Cheese Plant, known for its unique leaf holes and easy care.',
  },
  {
    id: 2,
    name: 'Fiddle Leaf Fig',
    price: 45.99,
    image: '/images/ficus.jpg',
    category: 'Large Plants',
    description: 'Trendy indoor plant with large, violin-shaped leaves.',
  },
  {
    id: 3,
    name: 'Golden Pothos',
    price: 18.99,
    image: '/images/pothos.jpg',
    category: 'Hanging Plants',
    description: 'Fast-growing vine with heart-shaped, golden-variegated leaves.',
  },
  {
    id: 4,
    name: 'Snake Plant',
    price: 24.99,
    image: '/images/snake-plant.jpg',
    category: 'Low Maintenance',
    description: 'Architectural plant with stiff, upright leaves that purify air.',
  },
  {
    id: 5,
    name: 'ZZ Plant',
    price: 29.99,
    image: '/images/zz-plant.jpg',
    category: 'Low Maintenance',
    description: 'Glossy, dark green leaves that thrive in low light conditions.',
  },
  {
    id: 6,
    name: 'Peace Lily',
    price: 22.99,
    image: '/images/peace-lily.jpg',
    category: 'Flowering Plants',
    description: 'Elegant white flowers and glossy leaves that remove air pollutants.',
  },
  {
    id: 7,
    name: 'Aloe Vera',
    price: 15.99,
    image: '/images/aloe-vera.jpg',
    category: 'Succulents',
    description: 'Medicinal plant with thick, fleshy leaves containing healing gel.',
  },
  {
    id: 8,
    name: 'Spider Plant',
    price: 19.99,
    image: '/images/spider-plant.jpg',
    category: 'Hanging Plants',
    description: 'Fast-growing plant that produces baby plantlets on long stems.',
  },
  {
    id: 9,
    name: 'Succulent Collection',
    price: 27.99,
    image: '/images/succulent.jpg',
    category: 'Succulents',
    description: 'Assorted small succulents in decorative pots.',
  },
];

// Categories are now derived from image names instead of being predefined

// Header Component
const Header = ({ cartItems, currentPage }) => {
  const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);
  
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

// Landing Page Component
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
          your own indoor paradise.
        </p>
        <Link to="/products" className="get-started-btn">
          Get Started
        </Link>
      </div>
    </div>
  );
};

// Products Page Component
const ProductsPage = ({ addToCart, cartItems }) => {
  const isProductInCart = (productId) => {
    return cartItems.some(item => item.id === productId);
  };

  // Extract image name from path to use as classification
  const getImageClassification = (imagePath) => {
    // Extract filename without extension
    const filename = imagePath.split('/').pop().split('.')[0];
    // Convert to title case with spaces
    return filename
      .replace(/-/g, ' ')
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  return (
    <div className="products-page">
      <div className="products-container">
        <h1 className="products-title">Our Plants Collection</h1>
        
        <div className="products-grid">
          {plantData.map(product => (
            <div key={product.id} className="product-card">
              <div className="product-image-container">
                <img
                  src={product.image}
                  alt={product.name}
                  className="product-image"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = '/images/placeholder.jpg';
                  }}
                />
              </div>
              <div className="product-details">
                <h3 className="product-name">{product.name}</h3>
                <p className="product-classification">{getImageClassification(product.image)}</p>
                <p className="product-price">${product.price.toFixed(2)}</p>
                <button
                  className={`add-to-cart-btn ${isProductInCart(product.id) ? 'in-cart' : ''}`}
                  onClick={() => addToCart(product)}
                  disabled={isProductInCart(product.id)}
                >
                  {isProductInCart(product.id) ? 'Added to Cart' : 'Add to Cart'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Cart Page Component
const CartPage = ({ cartItems, increaseQuantity, decreaseQuantity, removeFromCart }) => {
  const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);
  const totalAmount = cartItems.reduce((total, item) => total + item.totalPrice, 0);

  const handleCheckout = () => {
    alert('Checkout functionality coming soon!');
  };

  return (
    <div className="cart-page">
      <div className="cart-container">
        <h1 className="cart-title">Your Shopping Cart</h1>
        
        {cartItems.length === 0 ? (
          <div className="empty-cart">
            <p>Your cart is empty.</p>
            <Link to="/products" className="continue-shopping-btn">
              Start Shopping
            </Link>
          </div>
        ) : (
          <>
            <div className="cart-summary">
              <p className="cart-total-items">Total Items: <span>{totalQuantity}</span></p>
              <p className="cart-total-amount">Total Amount: <span>${totalAmount.toFixed(2)}</span></p>
            </div>
            
            <div className="cart-items">
              {cartItems.map(item => (
                <div key={item.id} className="cart-item">
                  <div className="cart-item-image">
                    <img
                      src={item.image}
                      alt={item.name}
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = '/images/placeholder.jpg';
                      }}
                    />
                  </div>
                  <div className="cart-item-details">
                    <h3 className="cart-item-name">{item.name}</h3>
                    <p className="cart-item-price">${item.price.toFixed(2)} each</p>
                  </div>
                  <div className="cart-item-quantity">
                    <button
                      className="quantity-btn decrease"
                      onClick={() => decreaseQuantity(item.id)}
                      disabled={item.quantity <= 1}
                    >
                      -
                    </button>
                    <span className="quantity-value">{item.quantity}</span>
                    <button
                      className="quantity-btn increase"
                      onClick={() => increaseQuantity(item.id)}
                    >
                      +
                    </button>
                  </div>
                  <div className="cart-item-total">
                    <p>${item.totalPrice.toFixed(2)}</p>
                  </div>
                  <button
                    className="remove-item-btn"
                    onClick={() => removeFromCart(item.id)}
                  >
                    <i className="fas fa-trash"></i>
                  </button>
                </div>
              ))}
            </div>
            
            <div className="cart-actions">
              <Link to="/products" className="continue-shopping-btn">
                Continue Shopping
              </Link>
              <button className="checkout-btn" onClick={handleCheckout}>
                Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

function App() {
  // Cart state
  const [cartItems, setCartItems] = useState([]);

  // Add to cart
  const addToCart = (product) => {
    const existingItem = cartItems.find(item => item.id === product.id);
    
    if (existingItem) {
      const updatedItems = cartItems.map(item =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1, totalPrice: (item.quantity + 1) * item.price }
          : item
      );
      setCartItems(updatedItems);
    } else {
      setCartItems([
        ...cartItems,
        {
          ...product,
          quantity: 1,
          totalPrice: product.price
        }
      ]);
    }
  };

  // Increase quantity
  const increaseQuantity = (id) => {
    const updatedItems = cartItems.map(item =>
      item.id === id
        ? { ...item, quantity: item.quantity + 1, totalPrice: (item.quantity + 1) * item.price }
        : item
    );
    setCartItems(updatedItems);
  };

  // Decrease quantity
  const decreaseQuantity = (id) => {
    const existingItem = cartItems.find(item => item.id === id);
    
    if (existingItem && existingItem.quantity > 1) {
      const updatedItems = cartItems.map(item =>
        item.id === id
          ? { ...item, quantity: item.quantity - 1, totalPrice: (item.quantity - 1) * item.price }
          : item
      );
      setCartItems(updatedItems);
    }
  };

  // Remove from cart
  const removeFromCart = (id) => {
    const updatedItems = cartItems.filter(item => item.id !== id);
    setCartItems(updatedItems);
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/products" element={
            <>
              <Header cartItems={cartItems} currentPage="products" />
              <ProductsPage addToCart={addToCart} cartItems={cartItems} />
            </>
          } />
          <Route path="/cart" element={
            <>
              <Header cartItems={cartItems} currentPage="cart" />
              <CartPage
                cartItems={cartItems}
                increaseQuantity={increaseQuantity}
                decreaseQuantity={decreaseQuantity}
                removeFromCart={removeFromCart}
              />
            </>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
