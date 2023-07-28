import React, { useState } from 'react';
import './offer.css'; 
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setCart } from './action';


const projectsData = [
  {
    id: 1,
    title: 'Spiderman Frisbee ',
    image:"https://www.toysrus.in/media/catalog/product/cache/0a02c3039f9f94b26b587e518fdf737c/6/3/63193_1.jpg",
    price: 99,
    category: '10%',  
  },
  {
    id: 2,
    title: 'Ninjago Lloyds ',
    image:"https://www.toysrus.in/media/catalog/product/cache/0a02c3039f9f94b26b587e518fdf737c/7/0/70689_1.jpg",
    price: 1199,
    category: '10%',
  },
  {
    id: 3,
    title: ' Iron Man',
    image:"https://www.toysrus.in/media/catalog/product/cache/0a02c3039f9f94b26b587e518fdf737c/7/6/76206_1.jpg",
    price: 5389,
    category: '10%',
  },
  {
    id: 4,
    title: 'Rocket Pack Batman',
    image:"https://www.toysrus.in/media/catalog/product/cache/0a02c3039f9f94b26b587e518fdf737c/b/0/b00et0myaq_1.jpg",
    price: 629,
    category: '20%',
  },
  {
    id: 5,
    title: 'Underwater Assault Action',
    image:"https://www.toysrus.in/media/catalog/product/cache/0a02c3039f9f94b26b587e518fdf737c/b/0/b081yzp52p_1.jpg",
    price: 299,
    category: '20%',
  },
  {
    id: 6,
    title: 'Batman Barrel',
    image:"https://www.toysrus.in/media/catalog/product/cache/0a02c3039f9f94b26b587e518fdf737c/t/r/tru_2fbrand_image_dump_2f58786_2fmonobrand_2f58786_1.jpg",
    price: 1499,
    category: '20%',
  },
  {
    id: 7,
    title: 'Transforming Toy Car ',
    image:"https://www.toysrus.in/media/catalog/product/cache/0a02c3039f9f94b26b587e518fdf737c/6/0/6060435_1.jpg",
    price: 1499,
    category: '50%',
  },
  {
    id: 8,
    title: 'Jungle Cruiser Vehicle',
    image:"https://www.toysrus.in/media/catalog/product/cache/0a02c3039f9f94b26b587e518fdf737c/6/0/6061801_1.jpg",
    price: 899,
    category: '50%',
  },
  {
    id: 9,
    title: 'Play-Fire Fightin Truck',
    image:"https://www.toysrus.in/media/catalog/product/cache/0a02c3039f9f94b26b587e518fdf737c/b/n/bnp100003_1.jpg",
    price: 1499,
    category: '50%',
  },
  {
    id: 10,
    title: 'Frank Jigsaw Puzzle',
    image:"https://www.toysrus.in/media/catalog/product/cache/0a02c3039f9f94b26b587e518fdf737c/p/r/prod_2fproduct-image_2ftoys_2ftru_2fresized_2fst-pprp01_2fst-pprp01_1.jpg",
    price: 449,
    category: '60%',
  },
  {
    id: 11,
    title: 'SI Kitchen Set',
    image:"https://www.toysrus.in/media/catalog/product/cache/0a02c3039f9f94b26b587e518fdf737c/6/0/60401_1.jpg",
    price: 1229,
    category: '60%',
  },
  {
    id: 12,
    title: 'Peppa Pig Soft Toy',
    image:"https://www.toysrus.in/media/catalog/product/cache/0a02c3039f9f94b26b587e518fdf737c/8/9/8901736130264_1.jpeg",
    price: 2089,
    category: '60%',
  },

];

const Offer= () => {
  const disp=useDispatch();
  const cart=useSelector((state)=>state.login.cart);
  const addToCart=(project)=>{
    var c=[...cart,{
      id:project.id,
      name:project.title,
      price:project.price,
      quantity:1,
      img:project.image
    }]
    disp(setCart(c));
  }
  const [selectedCategory, setSelectedCategory] = useState('All');

  const handleFilterChange = (category) => {
    setSelectedCategory(category);
  };

  const filteredProjects =
    selectedCategory === 'All'
      ? projectsData
      : projectsData.filter((project) => project.category === selectedCategory);

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
    <div className="portfolio-container">
      <div className="filter-buttons">
        <button onClick={() => handleFilterChange('All')}>All</button>
        <button onClick={() => handleFilterChange('10%')}>10%</button>
        <button onClick={() => handleFilterChange('20%')}>20%</button>
        <button onClick={() => handleFilterChange('50%')}>50%</button>
        <button onClick={() => handleFilterChange('60%')}>60%</button>
      </div>
      <div className="project-list">
        {filteredProjects.map((project) => (
          <div key={project.id} className="project-item">
            <h3>{project.title}</h3>
           <img src={project.image}/>
            <p>Rs. {project.price}</p>
            <button style={{backgroundColor:"orange",color:"black"}} onClick={()=>addToCart(project)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default Offer;
