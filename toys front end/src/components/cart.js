import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import './cart.css';

const Cart = () => {
  const c=useSelector((state)=>state.login.cart);
  console.log(c)
  const [cartItems, setCartItems] = useState(c);

  const calculateTotal = () => {
    let total = 0;
    for (let i = 0; i < cartItems.length; i++) {
      total += cartItems[i].price * cartItems[i].quantity;
    }
    return total;
  };

  const increaseQuantity = (id) => {
    const updatedCartItems = cartItems.map((item) => {
      if (item.id === id) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    setCartItems(updatedCartItems);
  };

  const decreaseQuantity = (id) => {
    const updatedCartItems = cartItems.map((item) => {
      if (item.id === id && item.quantity > 1) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });
    setCartItems(updatedCartItems);
  };

  const removeItem = (id) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCartItems);
  };

  return (
    <>
      <nav>
        <div>
          <div className="topnav">
            <img  className="img" src="https://res.cloudinary.com/dd5l5ltp8/image/upload/v1689510779/logo-removebg-preview_sefvp4.png" alt="logo" />
            <br></br>
            <h1>COO COO TOYS</h1>
            <button style={{ float: 'right' }}><Link to='/login'>LOGOUT</Link></button>
            <button style={{ float: 'right' }}><Link to='/fb'>FEEDBACK</Link></button>
            <button style={{ float: 'right' }}><Link to='/cart'>CART</Link></button>
            <button style={{ float: 'right' }}><Link to='/contact'>CONTACT</Link></button>
            <button style={{ float: 'right' }}><Link to='/about'>ABOUT</Link></button>
            <button style={{ float: 'right' }}><Link to='/nav'>HOME</Link></button>
            
          </div>
        </div>
      </nav>
     <div>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
  {/* The sidebar */}
  <div className="sidebar">
 
    <p style={{marginLeft:"10px",color:"white",fontSize:"20px"}}>CATEGORIES</p>
     <a href="/offer"> OFFER</a>
    <a href="/age"> AGE</a>
     <a href="/brand"> BRAND</a>
    <a href="/boy"> BOYS</a>
     <a href="/girl"> GIRLS</a>
    
  </div>
</div>
      {/* cart items details */}
      <div style={{height:"100px"}} className="small-container cart-page">
        <table>
          <tbody>
            <tr>
              <th>Product</th>
              <th>Quantity</th>
              <th>Subtotal</th>
              <th>Action</th>
            </tr>
            {cartItems.map((item) => (
              <tr key={item.id}>
                <td>
                  <div className="cart-info">
                    <img src={item.img} alt />
                    <div>
                      <p>{item.name}</p>
                      <small>Price {item.price}</small>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="quantity">
                    <button style={{backgroundColor:"orange"}} onClick={() => decreaseQuantity(item.id)}>-</button>
                    <span>{item.quantity}</span>
                    <button style={{backgroundColor:"orange"}} onClick={() => increaseQuantity(item.id)}>+</button>
                  </div>
                </td>
                <td>₹{(item.price * item.quantity).toFixed(2)}</td>
                <td>
                  <button style={{backgroundColor:"orange"}} onClick={() => removeItem(item.id)}>Remove</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="total-price">
          <table>
            <tbody>
              <tr>
                <td>Total</td>
                <td>₹{calculateTotal().toFixed(2)}</td>
              </tr>
              <tr>
                <td colSpan="2">
                  <Link to='/placeorder'>
                    <button className="logbutton" style={{ backgroundColor: '#feba33', color: 'white' }}>Place Order</button>
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Cart;
