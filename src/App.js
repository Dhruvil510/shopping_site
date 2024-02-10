import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; //Importing Bootstrap 
import ProductPage from './ProductPage'; // Importing ProductPage component
import ShoppingCartPage from './ShoppingCartPage'; // Importing ShoppingCartPage component
import AccountPage from './AccountPage'; // Importing AccountPage component
import ProductDetailsPage from './ProductDetailsPage'; // Importing ProductDetailsPage component

//main app component
function App() {
  // product data
  const [products] = useState([
    { id: 1, name: 'Red Suit', description: 'Skinny Fit Suit Separates', image: "images/image 1.jpg", price: 150 },
    { id: 2, name: 'Light Black Suit', description: 'Slim Fit Suit Separates Jacket', image: "images/image 2.jpg", price: 169 },
    { id: 3, name: 'Dark Black Suit', description: 'Modern Fit Suit', image: "images/image 3.jpg", price: 189 },
    { id: 4, name: 'Blue Suit', description: 'Classic Fit Suit', image: "images/image 4.jpg", price: 200 },
    { id: 5, name: 'Gray Suit', description: 'Slim Fit 2-Piece Suit', image: "images/image 5.png", price: 175 },
    // Add more products as needed
  ]);

  // user data
  const [user, setUser] = useState({
    id: 1,
    shippingAddress: '123 Example St, City, Country',
  });

  // cart state
  const [cart, setCart] = useState([]);

  // Add to cart item 
  const addToCart = (productId, quantity) => {
    const existingItemIndex = cart.findIndex(item => item.product.id === productId);
    if (existingItemIndex !== -1) {
      const updatedCart = [...cart];
      updatedCart[existingItemIndex].quantity += quantity;
      setCart(updatedCart);
    } else {
      const productToAdd = products.find(product => product.id === productId);
      setCart([...cart, { product: productToAdd, quantity }]);
    }
  };

  // it will update the cart
  const updateCart = (productId, quantity) => {
    const updatedCart = cart.map(item => {
      if (item.product.id === productId) {
        return { ...item, quantity };
      }
      return item;
    });
    setCart(updatedCart);
  };

  // remove cart to remove items from cart
  const removeFromCart = (productId) => {
    const updatedCart = cart.filter(item => item.product.id !== productId);
    setCart(updatedCart);
  };

  // for finalize purchase
  const finalizePurchase = () => {
    // Logic to finalize purchase
    console.log('Purchase finalized');
  };

  // for updateuser
  const updateUser = (updatedUser) => {
    setUser(updatedUser);
  };

  return (
    <Router>
      <div className="App">
        {/* Bootstrap Navbar */}
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">Buy Suits</Link>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav me-auto">
                <li className="nav-item">
                  <Link className="nav-link" to="/">Products</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/product/1">Product Details</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/cart">Shopping Cart</Link>
                </li>
              </ul>
              <Link className="btn btn-primary" to="/account">Account</Link>
            </div>
          </div>
        </nav>
        {/* Routes for all the pages */}
        <Routes>
          <Route path="/" element={<ProductPage products={products} addToCart={addToCart} />} />
          <Route path="/cart" element={<ShoppingCartPage cart={cart} removeFromCart={removeFromCart} updateCart={updateCart} finalizePurchase={finalizePurchase} />} />
          <Route path="/account" element={<AccountPage user={user} updateUser={updateUser} />} />
          <Route path="/product/:id" element={<ProductDetailsPage products={products} addToCart={addToCart} />} />
          {/* Default route */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
