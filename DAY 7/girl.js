import React, { useState } from 'react';
import './girl.css'; 
import { Link } from 'react-router-dom';

const projectsData = [
  {
    id: 1,
    title: 'You & Me 101 Pcs Disney Princess',
    image:"https://www.toysrus.in/media/catalog/product/cache/0a02c3039f9f94b26b587e518fdf737c/t/r/tru_2fresized_2fddhg9adhyyzzx4v5_2fmonobrand_2fddhg9adhyyzzx4v5_1.jpg",
    price: "Rs.3,059",
    category: 'princess',
  },
  {
    id: 2,
    title: 'Ratnas Disney Princess Neon Jewellery Junior Making Kit For Girls',
    image:"https://www.toysrus.in/media/catalog/product/cache/0a02c3039f9f94b26b587e518fdf737c/5/1/51dwtp9ei1l.jpg",
    price:"Rs.429",
    category: 'princess',
  },
  {
    id: 3,
    title: 'Princess Role Play Set Kitchen Set',
    image:"https://www.toysrus.in/media/catalog/product/cache/0a02c3039f9f94b26b587e518fdf737c/6/4/64503_1.jpg",
    price:"Rs.519",
    category: 'princess',
  },
  {
    id: 4,
    title: 'PBarbie Core Career Nurse Doll Gift For Girl',
    image:"https://www.toysrus.in/media/catalog/product/cache/0a02c3039f9f94b26b587e518fdf737c/g/t/gtw39_1.jpeg",
    price: "Rs.799",
    category: 'barbie',
  },
  {
    id: 5,
    title: 'Ratnas Acrylic Barbie Jewellery Making Kit Senior For Girls',
    image:"https://www.toysrus.in/media/catalog/product/cache/0a02c3039f9f94b26b587e518fdf737c/5/1/51-xjaw8krl.jpg",
    price: "Rs.459",
    category: 'barbie',
  },
  {
    id: 6,
    title: 'Barbie Watch With Flashing Light',
    image:"https://www.toysrus.in/media/catalog/product/cache/0a02c3039f9f94b26b587e518fdf737c/t/r/tru_2fbrand_image_dump_2f9010491734569_2fmonobrand_2f9010491734569_4.jpg",
    price: "Rs.679",
    category: 'barbie',
  },
  {
    id: 7,
    title: 'Mirada 45 Cm Glitter Eyes Pink',
    image:"https://www.toysrus.in/media/catalog/product/cache/0a02c3039f9f94b26b587e518fdf737c/m/p/mp0014a_1.jpg",
    price: "Rs.1499",
    category: 'mirada',
  },
  {
    id: 8,
    title: 'Mirada Fun Popstick Art',
    image:"https://www.toysrus.in/media/catalog/product/cache/0a02c3039f9f94b26b587e518fdf737c/m/a/mac2006_1.jpg",
    price: "Rs.1499",
    category: 'mirada',
  },
  {
    id: 9,
    title: 'Mirada Fun Popstick Art',
    image:"https://www.toysrus.in/media/catalog/product/cache/0a02c3039f9f94b26b587e518fdf737c/m/p/mp0041a_1.jpg",
    price: "Rs.1499",
    category: 'mirada',
  },
  {
    id: 10,
    title: 'Neuschwanstein Castle 1000 Piece',
    image:"https://www.toysrus.in/media/catalog/product/cache/0a02c3039f9f94b26b587e518fdf737c/3/4/34015_1.jpg",
    price: "Rs.1499",
    category: 'frank',
  },
  {
    id: 11,
    title: 'Frank Paris Street 500 Pieces',
    image:"https://www.toysrus.in/media/catalog/product/cache/0a02c3039f9f94b26b587e518fdf737c/3/3/33901_1.jpg",
    price: "Rs.1499",
    category: 'frank',
  },
  {
    id: 12,
    title: 'Frank Opposites 24 Self Correcting',
    image:"https://www.toysrus.in/media/catalog/product/cache/0a02c3039f9f94b26b587e518fdf737c/1/0/10303_1.jpg",
    price: "Rs.1499",
    category: 'frank',
  },

];

const Girl= () => {
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
        <button onClick={() => handleFilterChange('princess')}>Princess</button>
        <button onClick={() => handleFilterChange('barbie')}>Barbie</button>
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

export default Girl;
