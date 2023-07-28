import React, { useState } from 'react';
import './contact.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Contact = () => {
  const navigate=useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [subject,setSubject] = useState('');
  const[message,setMessage]=useState('');

  let token=localStorage.getItem("token");

  const handleSubmit = async(e) => {
    e.preventDefault();
    
    
    console.log('Form submitted');
    console.log('name:', name);
    console.log('email:',email);
    console.log('phone:',phone);
    console.log('subject:',subject);
    console.log('message:',message);
  
    
  
    try {
      const response = await axios.post(
        "http://localhost:8181/contactaddroll",
        {
          name: name,
          email: email,
          phone:phone,
          subject:subject,
          message:message
        },
        {
          headers: {
           "Authorization": `Bearer ${token}`,
            "cache-control": "no-control",
          },
        }
      );

      // Handle response as needed, e.g., show success message
      console.log(response.data);
      alert('Registration successful!');
      navigate('/nav');
    } 
    catch (error) {
      console.log(error);
      window.alert("Invalid Credentials");
    }
  
               
  };
  return (
    <>
      <nav>
        <div>
          <div className="topnav">
            <img className="img" src="https://res.cloudinary.com/dd5l5ltp8/image/upload/v1689510779/logo-removebg-preview_sefvp4.png" alt="logo" />
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
          <p style={{ marginLeft: "10px", color: "white", fontSize: "20px" }}>CATEGORIES</p>
          <a href="/offer"> OFFER</a>
          <a href="/age"> AGE</a>
          <a href="/brand"> BRAND</a>
          <a href="/boy"> BOYS</a>
          <a href="/girl"> GIRLS</a>
        </div>
      </div>
      <div>
        {/* Contact Form content */}
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
                  <span>ajay@gmail.com</span>
                </p>
              </div>
              <div className="contact-child child2">
                <div className="inside-contact">
                  <h2>Contact Us</h2>
                  <h3>
                    <span id="confirm">
                    </span></h3>
                  <p>Name *</p>
                  
  <input type="text" id="full-name" style={{width:"500px",height:"50px"}} className="form-input"  onChange={(e) => setName(e.target.value)} required />
                  <p>Email *</p>
                  
  <input type="text" id="full-name" style={{width:"500px",height:"50px"}} className="form-input"  onChange={(e) => setEmail(e.target.value)} required />
                  <p>Phone *</p>
                 
  <input type="text" id="full-name" style={{width:"500px",height:"50px"}} className="form-input"  onChange={(e) => setPhone(e.target.value)} required />
                  <p>Subject *</p>
                  
  <input type="text" id="full-name" style={{width:"500px",height:"50px"}} className="form-input"  onChange={(e) => setSubject(e.target.value)} required />
                  <p>Message *</p>
                  <textarea name="message" style={{width:"500px",height:"200px"}} placeholder="Message" onChange={(e)=> setMessage(e.target.value)}></textarea>
                  <button class="logbutton" onClick={handleSubmit}>SEND</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
