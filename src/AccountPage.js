import React, { useState } from 'react';

const AccountPage = ({ user, updateUser }) => {
  const [username, setUsername] = useState('');// keep username field blank
  const [password, setPassword] = useState('');// keep password field blank
  const [shippingAddress, setShippingAddress] = useState(user.shippingAddress);

  // it will show the entered username
  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  // for showing entered password
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  //it will show shipping address
  const handleShippingAddressChange = (e) => {
    setShippingAddress(e.target.value);
  };

  //if and else for username and password, it's checking whether field is empty or not and show message accordingly
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username || !password) {
      alert('Please enter username and password before saving changes.');
    } else {
      updateUser({ ...user, username, password, shippingAddress });
      alert('Account details saved successfully!!!'); // Show alert message
    }
  };

  // redirect to the main product page
  const handleContinueShopping = () => {
    window.location.href = "/";
  };

  return (
    <div>
      <h2>Account Details</h2>
      <div className="container border p-4 mb-3">
        <div className="row">
          <div className="col-md-6">
            <label>
              Username:
              <input type="text" value={username} onChange={handleUsernameChange} className="form-control mb-3" />
            </label>
            <br />
            <label>
              Password:
              <input type="password" value={password} onChange={handlePasswordChange} className="form-control mb-3" />
            </label>
            <br />
            <label>
              Shipping Address:
              <input type="text" value={shippingAddress} onChange={handleShippingAddressChange} className="form-control mb-3" />
            </label>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <button type="submit" onClick={handleSubmit} className="btn btn-success me-2">Save Changes</button>
            <button onClick={handleContinueShopping} className="btn btn-primary">Continue Shopping</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountPage;
