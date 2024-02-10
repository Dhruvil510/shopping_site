import React from 'react';
import { Link } from 'react-router-dom';

const ProductPage = ({ products }) => {
  return (
    <div>
      <h2 className="mb-4">Products</h2>
      <div className="container">
        <div className="row">
          {/*it will show products*/}
          {products.map((product, index) => (
            <div key={product.id} className="col-md-4 mb-4">
              <div className="card">
                {/*it will show product image, name, description and price*/}
                <img src={product.image} className="card-img-top" alt={product.name} />
                <div className="card-body">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text">{product.description}</p>
                  <p className="card-text">Price: ${product.price}</p>
                  <Link to={`/product/${product.id}`} className="btn btn-primary">View Details</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
