import React, { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import './nav.css';


const Nav = () => {

  const [currentSlide, setCurrentSlide] = useState(0);
  const slideImages = [
   'https://res.cloudinary.com/dd5l5ltp8/image/upload/v1689506345/barrett-ward-1qQx3LHaYGg-unsplash_xig870.jpg',
   'https://res.cloudinary.com/dd5l5ltp8/image/upload/v1689506345/kenny-eliason-lbqZUefMLvQ-unsplash_gd5kpe.jpg',
   'https://res.cloudinary.com/dd5l5ltp8/image/upload/v1689506345/joshua-coleman-8V4y-XXT3MQ-unsplash_jyoapz.jpg',
   'https://res.cloudinary.com/dd5l5ltp8/image/upload/v1689506345/yulia-matvienko-kgz9vsP5JCU-unsplash_ygaqkc.jpg',
   'https://res.cloudinary.com/dd5l5ltp8/image/upload/v1689506346/michael-fousert-Kv2hu25Rx2s-unsplash_1_g1zg0u.jpg'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) =>
        prevSlide === slideImages.length - 1 ? 0 : prevSlide + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [slideImages.length]);
  const bestsellers = [
    {
      id: 1,
      name: 'Bestseller Toy 1',
      price: 19.99,
      description: 'Description of Bestseller Toy 1.',
      image: 'https://res.cloudinary.com/dd5l5ltp8/image/upload/v1689507656/handgun_tdxdtj.png',
      
    },
    {
      id: 2,
      name: 'Bestseller Toy 2',
      price: 24.99,
      description: 'Description of Bestseller Toy 2.',
      image: 'https://res.cloudinary.com/dd5l5ltp8/image/upload/v1689507655/sport-car_od5ev0.png',
    },
    {
      id: 3,
      name: 'Bestseller Toy 1',
      price: 19.99,
      description: 'Description of Bestseller Toy 1.',
      image: 'https://res.cloudinary.com/dd5l5ltp8/image/upload/v1689507655/teddy-bear_b7elj5.png',
    },
    {
      id: 4,
      name: 'Bestseller Toy 1',
      price: 19.99,
      description: 'Description of Bestseller Toy 1.',
      image: 'https://res.cloudinary.com/dd5l5ltp8/image/upload/v1689507655/panda-bear_f99vbz.png',
    },
    
    {
      id: 5,
      name: 'Bestseller Toy 1',
      price: 19.99,
      description: 'Description of Bestseller Toy 1.',
      image: 'https://res.cloudinary.com/dd5l5ltp8/image/upload/v1689509388/spinning-top_obt8xi.png',
    },
    {
      id: 6,
      name: 'Bestseller Toy 1',
      price: 19.99,
      description: 'Description of Bestseller Toy 1.',
      image: 'https://res.cloudinary.com/dd5l5ltp8/image/upload/v1689509388/plane_s0sty3.png',
    },

    {
      id: 7,
      name: 'Bestseller Toy 1',
      price: 19.99,
      description: 'Description of Bestseller Toy 1.',
      image: 'https://res.cloudinary.com/dd5l5ltp8/image/upload/v1689509389/sand-toy_m9jwwn.png',
    },
    {
      id: 8,
      name: 'Bestseller Toy 1',
      price: 19.99,
      description: 'Description of Bestseller Toy 1.',
      image: 'https://res.cloudinary.com/dd5l5ltp8/image/upload/v1689509389/plane_1_pnbzd3.png',
    },
  ];

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

<div style={{marginTop:"2000px"}}className="slideshow">
      <img 
        src={slideImages[currentSlide]}
        alt={`Slide ${currentSlide + 1}`}
        style={{Maxwidth: '100%', height: '800px' }}
      />
    </div>
    <div style={{ maxWidth: '1500px', padding: '20px' }}>
      <h1 style={{ textAlign: 'center',marginLeft:"200px",color:"black"}}>Bestsellers</h1>
      <br></br>
      <br></br>
      <br></br>

      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
        {bestsellers.map((toy) => (
          <div
            key={toy.id}
            style={{
              flex:'0 0 calc(25% - 70px) 30px ',
              backgroundColor: '#fff',
              borderRadius: '5px',
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
              padding:'20px',
              marginBottom:"20px",
              width:"250px",
              marginLeft:"-10px"
              
             
            }}
          >
            <img
              src={toy.image}
              alt={toy.name}
              style={{ display: 'block', width: '100%', maxHeight: '200px', marginBottom: '10px', borderRadius: '5px' }}
            />
            <h2 style={{ fontSize: '18px', margin: '10px 0' }}>{toy.name}</h2>
            <p style={{ color: '#666' }}>{toy.description}</p>
            <span style={{ fontWeight: 'bold', color: '#333' }}>${toy.price}</span>
            <br></br>
            <button style={{ backgroundColor: 'orange', color: '#fff', border: 'none', borderRadius: '5px', padding: '10px 15px', cursor: 'pointer', fontSize: '14px', transition: 'background-color 0.3s ease' }}>
             <Link to='/cart'> Add to Cart</Link>
            </button>
          </div>
          
        ))}
      </div>
    </div>
    <div>
      <h1 style={{marginLeft:"240px",color:"black"}}>Blockbuster Sale</h1>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div>
        <img className="partner"style={{marginLeft:"300px",width:"300px",height:"300px"}}src="https://res.cloudinary.com/dd5l5ltp8/image/upload/v1689510569/14_softtoys_440x300._V282096026__ypjx2k.jpg"/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
       
        <img className="partner" style={{width:"300px",height:"300px"}}src="https://res.cloudinary.com/dd5l5ltp8/image/upload/v1689510569/1007185_RemoteCar_ContentGrid_750x375._V279466087__ixnlab.png"/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        
       
        <img className="partner" style={{width:"300px",height:"300px"}}src="https://res.cloudinary.com/dd5l5ltp8/image/upload/v1689510569/1007185_GunsOutdoor_ContentGrid_750x375._V279466082__whu5e6.png"/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
       
      </div>
    </div>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    
<div class="centered" style={{display:"flex",marginLeft:"800px"}} >RISK FREE SHOPPING</div>
<img style={{marginLeft:"600px",height:"150px"}}src="https://res.cloudinary.com/dd5l5ltp8/image/upload/v1689512278/giraffe_1_jtkumj.png"/>

<img style={{marginLeft: "40px",height:"100px"}}src="https://res.cloudinary.com/dd5l5ltp8/image/upload/v1689512901/240_F_575019094_nQ7d11xELl8p3VKrMR5IM9WxHEBG2bxR-removebg-preview_toetgp.png"/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<img style={{marginLeft: '40px',height:"100px"}}src="https://cdn-icons-png.flaticon.com/128/719/719372.png"/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<img style={{marginLeft: '40px'}}src="https://cdn-icons-png.flaticon.com/128/9183/9183512.png"/>
<br></br>
<p style={{marginLeft:"770px",fontSize:"20px"}}>Free Shipping&nbsp;&nbsp;&nbsp;Multiple Payment Modes&nbsp;&nbsp;&nbsp;Flexible return policy</p>
<footer>
  <br></br>
  <br></br>
  <br></br>

<div className="social-icons">
<a href="https://twitter.com/">
  <a className="social-icon social-icon--twitter">
    <img style={{height:"60px"}}src="https://cdn-icons-png.flaticon.com/128/3670/3670151.png"/>
    <div className="tooltip">Twitter</div>
    </a>
  </a>
  <a href="https://instagram.com/">
  <a className="social-icon social-icon--instagram">
  <img style={{height:"70px"}}src="https://cdn-icons-png.flaticon.com/128/4138/4138124.png"/>
    <div className="tooltip">Instagram</div>
  </a>
  </a>
  <a href="https://twitter.com/">
  <a className="social-icon social-icon--facebook">
  <img style={{height:"60px"}}src="https://cdn-icons-png.flaticon.com/128/5968/5968764.png"/>
    <div className="tooltip">Facebook</div>
  </a>
  </a>
</div>
<div class="downtext">Use of this site signifies your acceptance of Toys”R”Us<br></br> Website Terms and Conditions and Privacy Policy.<br></br> 
TOYS R US®, BABIES R US® and their associated logos are trademarks owned by COO COO TOYS, INC.,<br></br> used herein under license.<br></br>
© 2022. All rights reserved.</div>
</footer>


    </>
  );
};

export default Nav;