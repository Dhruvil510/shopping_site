import React from 'react';
import { useNavigate } from 'react-router-dom';

const ShoppingCartPage = ({ cart, removeFromCart, updateCart, finalizePurchase }) => {
  const taxRate = 0.13; // 13% tax rate
  const navigate = useNavigate(); // Hook to navigate to different routes

  // Calculate subtotal of items in the cart
  const calculateSubtotal = () => {
    let subtotal = 0;
    cart.forEach(item => {
      subtotal += item.product.price * item.quantity;
    });
    return subtotal;
  };

  // Calculate total price including tax
  const calculateTotal = () => {
    const subtotal = calculateSubtotal();
    const taxAmount = subtotal * taxRate;
    return subtotal + taxAmount;
  };

  const handleContinueShopping = () => {
    navigate('/'); // Redirect to the main product page
  };

  //if and else for empty cart 
  const handleFinalizePurchase = () => {
    if (cart.length === 0) {
      alert('Please add products to your shopping cart before finalizing the purchase by clicking Continue Shopping Button.');
    } else {
      finalizePurchase();
      alert('Thank you for shopping!');
    }
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
      </nav>
      <h2>Shopping Cart</h2>
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            {cart.map(item => (
              <div key={item.product.id} className="card mb-3">
                <div className="card-body">
                  <h5 className="card-title">{item.product.name}</h5>
                  <p className="card-text">{item.product.description}</p>
                  <p className="card-text">Price: ${item.product.price}</p>
                  <p className="card-text">Quantity: {item.quantity}</p>
                  <div className="btn-group" role="group" aria-label="Quantity Control">
                    <button className="btn btn-outline-danger me-2" onClick={() => updateCart(item.product.id, item.quantity - 1)}>-</button>
                    <button className="btn btn-outline-success me-2" onClick={() => updateCart(item.product.id, item.quantity + 1)}>+</button>
                  </div>
                  <button className="btn btn-danger" onClick={() => removeFromCart(item.product.id)}>Remove</button>
                </div>
              </div>
            ))}
          </div>
          <div className="col-md-4">
            <div className="card mb-3">
              <div className="card-body">
                <h5 className="card-title">Order Summary</h5>
                <p>Subtotal: ${calculateSubtotal().toFixed(2)}</p>
                <p>Tax (13%): ${(calculateTotal() - calculateSubtotal()).toFixed(2)}</p>
                <p>Total: ${calculateTotal().toFixed(2)}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-3">
        <div className="row">
          <div className="col-md-4">
            <button className="btn btn-success me-2" onClick={handleFinalizePurchase}>Finalize Purchase</button>
            <button className="btn btn-primary" onClick={handleContinueShopping}>Continue Shopping</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShoppingCartPage;
