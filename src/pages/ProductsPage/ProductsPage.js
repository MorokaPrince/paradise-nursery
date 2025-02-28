import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectAllProducts } from '../../features/products/productsSlice';
import { addToCart } from '../../features/cart/cartSlice';
import './ProductsPage.css';

const ProductsPage = () => {
  const products = useSelector(selectAllProducts);
  const cartItems = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

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
          {products.map(product => (
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
                  onClick={() => handleAddToCart(product)}
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

export default ProductsPage;