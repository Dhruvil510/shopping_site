import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';


const ProductDetailsPage = ({ products, addToCart }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find(product => product.id === parseInt(id));
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    addToCart(product.id, quantity);
    navigate('/cart'); // Redirect to the shopping cart page after adding to cart
  };

  // update the quantity
  const handleQuantityChange = (event) => {
    const newQuantity = parseInt(event.target.value);
    setQuantity(newQuantity);
  };

  return (
    <div>
      <h2>Product Details</h2>
      {/* Display product details*/}
      {product && (
        <div className="container">
          <div className="card mb-3">
            <div className="card-body">
              <h5 className="card-title">{product.name}</h5>
              <p className="card-text">Price: ${product.price}</p>
              <label>
                {/*for increasing and decreasing quantity*/}
                Quantity:
                <input
                  type="number"
                  value={quantity}
                  min={1}
                  onChange={handleQuantityChange}
                />
              </label>
            </div>
          </div>
          {/* Bootstrap button */}
          <button className="btn btn-primary" onClick={handleAddToCart}>Add to Cart</button>
        </div>
      )}
    </div>
  );
};

export default ProductDetailsPage;
