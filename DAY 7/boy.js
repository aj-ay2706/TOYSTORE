import React, { useState } from 'react';
import './boy.css'; 
import { Link } from 'react-router-dom';

const projectsData = [
  {
    id: 1,
    title: 'Marvel Spiderman Frisbee Flying',
    image:"https://www.toysrus.in/media/catalog/product/cache/0a02c3039f9f94b26b587e518fdf737c/6/3/63193_1.jpg",
    price: "Rs.99",
    category: 'spiderman',  
  },
  {
    id: 2,
    title: 'Lego Ninjago Lloyds Spinjitzu',
    image:"https://www.toysrus.in/media/catalog/product/cache/0a02c3039f9f94b26b587e518fdf737c/7/0/70689_1.jpg",
    price:"Rs.1,199",
    category: 'spiderman',
  },
  {
    id: 3,
    title: 'Lego Infinity Saga Iron Man',
    image:"https://www.toysrus.in/media/catalog/product/cache/0a02c3039f9f94b26b587e518fdf737c/7/6/76206_1.jpg",
    price:"Rs.5,389",
    category: 'spiderman',
  },
  {
    id: 4,
    title: 'Funskool Rocket Pack Batman',
    image:"https://www.toysrus.in/media/catalog/product/cache/0a02c3039f9f94b26b587e518fdf737c/b/0/b00et0myaq_1.jpg",
    price: "Rs.629",
    category: 'batman',
  },
  {
    id: 5,
    title: 'Batman Underwater Assault Action',
    image:"https://www.toysrus.in/media/catalog/product/cache/0a02c3039f9f94b26b587e518fdf737c/b/0/b081yzp52p_1.jpg",
    price: "Rs299",
    category: 'batman',
  },
  {
    id: 6,
    title: 'Toyzone Batman Double Barrel',
    image:"https://www.toysrus.in/media/catalog/product/cache/0a02c3039f9f94b26b587e518fdf737c/t/r/tru_2fbrand_image_dump_2f58786_2fmonobrand_2f58786_1.jpg",
    price: "Rs.1499",
    category: 'batman',
  },
  {
    id: 7,
    title: 'Transforming Toy Car ',
    image:"https://www.toysrus.in/media/catalog/product/cache/0a02c3039f9f94b26b587e518fdf737c/6/0/6060435_1.jpg",
    price: "Rs.1499",
    category: 'pawpatrol',
  },
  {
    id: 8,
    title: 'Paw Patrol, Jungle Cruiser Vehicle',
    image:"https://www.toysrus.in/media/catalog/product/cache/0a02c3039f9f94b26b587e518fdf737c/6/0/6061801_1.jpg",
    price: "Rs.899",
    category: 'pawpatrol',
  },
  {
    id: 9,
    title: 'Play-Fire Fightin Truck',
    image:"https://www.toysrus.in/media/catalog/product/cache/0a02c3039f9f94b26b587e518fdf737c/b/n/bnp100003_1.jpg",
    price: "Rs.1499",
    category: 'pawpatrol',
  },
  {
    id: 10,
    title: 'Frank Peppa Pig Jigsaw Puzzle',
    image:"https://www.toysrus.in/media/catalog/product/cache/0a02c3039f9f94b26b587e518fdf737c/p/r/prod_2fproduct-image_2ftoys_2ftru_2fresized_2fst-pprp01_2fst-pprp01_1.jpg",
    price: "Rs449",
    category: 'peppapig',
  },
  {
    id: 11,
    title: 'SI Peppa Pig Kitchen Set',
    image:"https://www.toysrus.in/media/catalog/product/cache/0a02c3039f9f94b26b587e518fdf737c/6/0/60401_1.jpg",
    price: "Rs.1,229",
    category: 'peppapig',
  },
  {
    id: 12,
    title: 'Peppa Pig Daddy Big Plush Soft Toy',
    image:"https://www.toysrus.in/media/catalog/product/cache/0a02c3039f9f94b26b587e518fdf737c/8/9/8901736130264_1.jpeg",
    price: "Rs.2.089",
    category: 'peppapig',
  },

];

const Boy= () => {
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
        <button onClick={() => handleFilterChange('spiderman')}>Spiderman</button>
        <button onClick={() => handleFilterChange('batman')}>batman</button>
        <button onClick={() => handleFilterChange('pawpatrol')}>Pawpatrol</button>
        <button onClick={() => handleFilterChange('peppapig')}>Peppapig</button>
      </div>
      <div className="project-list">
        {filteredProjects.map((project) => (
          <div key={project.id} className="project-item">
            <h3>{project.title}</h3>
           <img src={project.image}/>
            <p>{project.price}</p>
            <button><Link to="/cart">Add to Cart</Link></button>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default Boy;
