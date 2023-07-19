import React, { useState } from 'react';
import './brand.css'; 
import { Link } from 'react-router-dom';

const projectsData = [
  {
    id: 1,
    title: 'LEGO Technic Skid Steer Loader ',
    image:"https://www.toysrus.in/media/catalog/product/cache/0a02c3039f9f94b26b587e518fdf737c/4/2/42116_1.jpg",
    price: "Rs.1,499",
    category: 'lego',
  },
  {
    id: 2,
    title: 'Lego Ninjago Lloyds Spinjitzu',
    image:"https://www.toysrus.in/media/catalog/product/cache/0a02c3039f9f94b26b587e518fdf737c/7/0/70689_1.jpg",
    price:"Rs.1,199",
    category: 'lego',
  },
  {
    id: 3,
    title: 'Lego Infinity Saga Iron Man ',
    image:"https://www.toysrus.in/media/catalog/product/cache/0a02c3039f9f94b26b587e518fdf737c/7/6/76206_1.jpg",
    price:"Rs.5,389 ",
    category: 'lego',
  },
  {
    id: 4,
    title: 'Nerf Elite 2.0 Slash',
    image:"https://www.toysrus.in/media/catalog/product/cache/0a02c3039f9f94b26b587e518fdf737c/1/9/195166216539_1.jpg",
    price: "Rs.259",
    category: 'nerf',
  },
  {
    id: 5,
    title: 'Nerf Elite 2.0 Shockwave',
    image:"https://www.toysrus.in/media/catalog/product/cache/0a02c3039f9f94b26b587e518fdf737c/e/9/e95272212_1.jpg",
    price: "Rs.2499",
    category: 'nerf',
  },
  {
    id: 6,
    title: 'Motorized Blaster',
    image:"https://www.toysrus.in/media/catalog/product/cache/0a02c3039f9f94b26b587e518fdf737c/5/0/5010993732425_1.jpg",
    price: "Rs.2,239",
    category: 'nerf',
  },
  {
    id: 7,
    title: 'Mirada 45 Cm Glitter Eyes Pink Bear',
    image:"https://www.toysrus.in/media/catalog/product/cache/0a02c3039f9f94b26b587e518fdf737c/m/p/mp0014a_1.jpg",
    price: "Rs.1379",
    category: 'mirada',
  },
  {
    id: 8,
    title: 'Mirada Fun Popstick Art',
    image:"https://www.toysrus.in/media/catalog/product/cache/0a02c3039f9f94b26b587e518fdf737c/6/8/681_1.jpg",
    price: "Rs.759",
    category: 'mirada',
  },
  {
    id: 9,
    title: 'Mirada Fun Popstick Art',
    image:"https://www.toysrus.in/media/catalog/product/cache/0a02c3039f9f94b26b587e518fdf737c/m/p/mp0041a_1.jpg",
    price: "Rs.2579",
    category: 'mirada',
  },
  {
    id: 10,
    title: 'Neuschwanstein Castle 1000 Piece',
    image:"https://www.toysrus.in/media/catalog/product/cache/0a02c3039f9f94b26b587e518fdf737c/3/4/34015_1.jpg",
    price: "Rs.1799",
    category: 'frank',
  },
  {
    id: 11,
    title: 'Frank Paris Street 500 Pieces ',
    image:"https://www.toysrus.in/media/catalog/product/cache/0a02c3039f9f94b26b587e518fdf737c/3/3/33901_1.jpg",
    price: "Rs.699",
    category: 'frank',
  },
  {
    id: 12,
    title: 'Frank Opposites 24 Self Correcting',
    image:"https://www.toysrus.in/media/catalog/product/cache/0a02c3039f9f94b26b587e518fdf737c/1/0/10303_1.jpg",
    price: "Rs.399",
    category: 'frank',
  },

];

const Brand= () => {
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
        <button onClick={() => handleFilterChange('lego')}>Lego</button>
        <button onClick={() => handleFilterChange('nerf')}>Nerf</button>
        <button onClick={() => handleFilterChange('mirada')}>Mirada</button>
        <button onClick={() => handleFilterChange('frank')}>Frank</button>
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

export default Brand;
