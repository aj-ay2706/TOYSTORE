import { Link } from "react-router-dom";
import { useState } from "react";
import './offer.css';
import React from "react";

const Offer=()=>
{
 
  
  return(
    <>
    <nav>
    <div>
      <div className="topnav">
        <img  className="img" src="https://res.cloudinary.com/dd5l5ltp8/image/upload/v1689510779/logo-removebg-preview_sefvp4.png" alt="logo" />
        <br></br>
        <h1>COO COO TOYS</h1>
        <button style={{ float: 'right' }}><Link to='/login'>LOGOUT</Link></button>
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
<Link to='/offer'> <a href="/offer"> OFFER</a></Link>
<Link to='/age'> <a href="/age"> AGE</a></Link>
<Link to='/brand'> <a href="/brand"> BRAND</a></Link>
<Link to='/boys'> <a href="/boy"> BOYS</a></Link>
<Link to='/girls'> <a href="/girl"> GIRLS</a></Link>

</div>
</div>
<div className="card-container">

<div style={{marginLeft:"250px",marginTop:'400px'}} className="card"> 
 <img src="https://cdn-icons-png.flaticon.com/128/852/852907.png" alt="teddy"  />
  <h1  style={{color:'#1e5861'}}>BLOCKS</h1>
  <p className="price">₹999.99</p>
  <Link to='/cart'><p><button>Add to Cart</button></p></Link>

   

</div>
<div style={{marginTop:'400px'}} className="card">
  <img src="https://cdn-icons-png.flaticon.com/128/5016/5016424.png" alt="car"  />
  <h1 style={{color:'#1e5861'}}>TRUCK</h1>
  <p className="price">₹1500</p>
  <Link to='/cart'><p><button>Add to Cart</button></p></Link>
</div><br></br>
<div style={{marginTop:'400px'}}  className="card"> 
  <img src="https://cdn-icons-png.flaticon.com/128/1012/1012600.png" alt="DUCK" />
  <h1 style={{color:'#1e5861'}}>DUCK</h1>
  <p className="price">₹1000</p>
  <Link to='/cart'><p><button>Add to Cart</button></p></Link>
</div>
<div style={{marginTop:'400px'}} className="card">
  <img src="https://cdn-icons-png.flaticon.com/128/3169/3169668.png" alt="BALL"  />
  <h1 style={{color:'#1e5861'}}>BALL</h1>
  <p className="price">₹500</p>
  <Link to='/cart'><p><button>Add to Cart</button></p></Link>
</div><br></br>
<div style={{marginLeft:"250px",marginTop:"30px"}}className="card">
  <img src="https://cdn-icons-png.flaticon.com/128/1974/1974098.png" alt="TRAIN"  />
  <h1 style={{color:'#1e5861'}}>TRAIN</h1>
  <p className="price">₹750</p>
  <Link to='/cart'><p><button>Add to Cart</button></p></Link>
</div>
<div style={{marginTop:"30px"}}className="card">
  <img src="https://cdn-icons-png.flaticon.com/128/1390/1390264.png" alt="AEROPLAIN"  />
  <h1 style={{color:'#1e5861'}}>PLAIN</h1>
  <p className="price">₹2500</p>
  <Link to='/cart'><p><button>Add to Cart</button></p></Link>
</div>
<div style={{marginTop:"30px"}} className="card">
  <img src="https://cdn-icons-png.flaticon.com/128/551/551361.png" alt="ROBOT"  />
  <h1 style={{color:'#1e5861'}}>ROBOT</h1>
  <p className="price">3000</p>
  <Link to='/cart'><p><button>Add to Cart</button></p></Link>
</div>
<div style={{marginTop:"30px"}} className="card">
  <img src="https://cdn-icons-png.flaticon.com/128/522/522091.png" alt="car"  />
  <h1 style={{color:'#1e5861'}}>CAR</h1>
  <p className="price">₹900</p>
  <Link to='/cart'><p><button>Add to Cart</button></p></Link>
</div>
<div style={{marginLeft:"250px",marginTop:"30px"}} className="card">
  <img src="https://cdn-icons-png.flaticon.com/128/9134/9134573.png" alt="DOG"  />
  <h1 style={{color:'#1e5861'}}>DOG</h1>
  <p className="price">₹600</p>
  <Link to='/cart'><p><button>Add to Cart</button></p></Link>
</div>
<div style={{marginTop:"30px"}} className="card">
  <img src="https://cdn-icons-png.flaticon.com/128/3819/3819596.png" alt="DOLL"  />
  <h1 style={{color:'#1e5861'}}>CAR</h1>
  <p className="price">₹1500</p>
  <Link to='/cart'><p><button>Add to Cart</button></p></Link>
</div>
<div style={{marginTop:"30px"}} className="card">
  <img src="https://cdn-icons-png.flaticon.com/128/2176/2176673.png" alt="car"  />
  <h1 style={{color:'#1e5861'}}>SIPPER</h1>
  <p className="price">₹150</p>
  <Link to='/cart'><p><button>Add to Cart</button></p></Link>
</div>
<div style={{marginTop:"30px"}} className="card">
  <img src="https://cdn-icons-png.flaticon.com/128/10645/10645265.png" alt="car"  />
  <h1 style={{color:'#1e5861'}}>GUN</h1>
  <p className="price">₹2570</p>
  <Link to='/cart'><p><button>Add to Cart</button></p></Link>
</div>

</div>
</>

  );
}
export default Offer;