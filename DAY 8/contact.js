import React from 'react';
import './contact.css';
import { Link } from "react-router-dom";

const Contact = () =>{
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
     <a href="/offer"> OFFER</a>
    <a href="/age"> AGE</a>
     <a href="/brand"> BRAND</a>
    <a href="/boy"> BOYS</a>
     <a href="/girl"> GIRLS</a>
    
  </div>
</div>
<div>
  <meta charSet="utf-8" />
  <title>Contact Form</title>
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossOrigin="anonymous" />
  <link href="Style.css" rel="stylesheet" />
  <div className='data-wrapper-2'>
    <div className="container">
      <div className="contact-parent">
        <div className="contact-child child1">
          <p>
            <i className="fas fa-map-marker-alt" /> Address <br />
            <span> Ash Lane 110
              <br />
              London, UK
            </span>
          </p>
          <p>
            <i className="fas fa-phone-alt" /> Let's Talk <br />
            <span> 0787878787</span>
          </p>
          <p>
            <i className=" far fa-envelope" /> General Support <br />
            <span>andreea@andreeabunget.co.uk</span>
          </p>
        </div>
        <div className="contact-child child2">
          <div className="inside-contact">
            <h2>Contact Us</h2>
            <h3>
              <span id="confirm">
              </span></h3>
            <p>Name *</p>
            <input id="txt_name" type="text" required="required" />
            <p>Email *</p>
            <input id="txt_email" type="text" required="required" />
            <p>Phone *</p>
            <input id="txt_phone" type="text" required="required" />
            <p>Subject *</p>
            <input id="txt_subject" type="text" required="required" />
            <p>Message *</p>
            <textarea id="txt_message" rows={4} cols={20} required="required" defaultValue={""} />
            <input type="submit" id="btn_send" defaultValue="SEND" />
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


  </>
  );
}

export default Contact;
