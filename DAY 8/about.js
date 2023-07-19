import React from 'react';
import './about.css';
import { Link } from "react-router-dom";


const About = () => {
  return (
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
    <div style={{marginTop:"150px"}} className="about-container">
      
      <p>Welcome to our toy shop! We are passionate about providing the best toys for children of all ages. Whether you're looking for educational toys, puzzles, or fun games, we have a wide selection to choose from.</p>
      <p>Our mission is to bring joy and imagination to kids through play. We believe that toys play a crucial role in child development, fostering creativity, problem-solving skills, and social interaction.</p>
      <p>At our toy shop, you'll find toys from trusted brands that prioritize safety and quality. We carefully curate our collection to ensure that every toy we offer meets high standards and is suitable for various age groups.</p>
      <p>Our friendly and knowledgeable staff is always ready to assist you in finding the perfect toy for your child. Whether you need recommendations or have any questions, feel free to reach out to us.</p>
      <p>Thank you for choosing our toy shop. We look forward to being a part of your child's playtime and helping them create wonderful memories.</p>
    </div>


    </>
  );
};

export default About;
