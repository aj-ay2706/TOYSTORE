import React, { useState } from 'react';
import './age.css'; 
import { Link } from 'react-router-dom';

const projectsData = [
  {
    id: 1,
    title: 'Baybee car ',
    image:"https://www.toysrus.in/media/catalog/product/cache/0a02c3039f9f94b26b587e518fdf737c/b/0/b09q89mc13_1.jpg",
    price: "Rs.1499",
    category: 'Below 5 years',
  },
  {
    id: 2,
    title: 'Baby bathtub',
    image:"https://www.toysrus.in/media/catalog/product/cache/0a02c3039f9f94b26b587e518fdf737c/p/r/prod_2fproduct-image_2ftoys_2ftru_2fwatermarkfinal_2fb0bbtzvy2s_2fb0bbtzvy2s_1.jpg",
    price:"Rs.1249",
    category: 'Below 5 years',
  },
  {
    id: 3,
    title: 'Mini cricket kit',
    image:"https://www.toysrus.in/media/catalog/product/cache/0a02c3039f9f94b26b587e518fdf737c/6/2/62363_1.jpg",
    price:"Rs.269",
    category: 'Below 5 years',
  },
  {
    id: 4,
    title: 'Dazzling remote car',
    image:"https://www.toysrus.in/media/catalog/product/cache/0a02c3039f9f94b26b587e518fdf737c/p/r/prod_2fproduct-image_2ftoys_2ftru_2fbrand_20image_20dump_2fcar_yj388-50_2fcar_yj388-50_1.jpg",
    price: "Rs.1799",
    category: '5-6 years',
  },
  {
    id: 5,
    title: 'Toy train',
    image:"https://www.toysrus.in/media/catalog/product/cache/0a02c3039f9f94b26b587e518fdf737c/p/r/prod_2fproduct-image_2ftoys_2ftru_2fbrand_20image_20dump_2fmu-trackcar_2fmu-trackcar_1.jpg",
    price: "Rs.1999",
    category: '5-6 years',
  },
  {
    id: 6,
    title: 'Toddler Scooter',
    image:"https://www.toysrus.in/media/catalog/product/cache/0a02c3039f9f94b26b587e518fdf737c/t/r/tru_2famazoncrawled_2fb0bdmqbxdz_2fmonobrand_2fb0bdmqbxdz_1.jpg",
    price: "Rs.1767",
    category: '5-6 years',
  },
  {
    id: 7,
    title: 'UNO Flip',
    image:"https://www.toysrus.in/media/catalog/product/cache/0a02c3039f9f94b26b587e518fdf737c/p/r/prod_2fproduct-image_2ftoys_2ftru_2fbrand_20image_20dump_2f887961751062_2f887961751062_1.jpg",
    price: "Rs.270",
    category: '6-7 years',
  },
  {
    id: 8,
    title: 'Twisting stunt car',
    image:"https://www.toysrus.in/media/catalog/product/cache/0a02c3039f9f94b26b587e518fdf737c/p/r/prod_2fproduct-image_2ftoys_2ftru_2fbrand_20image_20dump_2f8906153100197_2f8906153100197_1.jpg",
    price: "Rs.6003",
    category: '6-7 years',
  },
  {
    id: 9,
    title: 'Fortnite gun',
    image:"https://www.toysrus.in/media/catalog/product/cache/0a02c3039f9f94b26b587e518fdf737c/f/4/f41072210_1.jpg",
    price: "Rs.3500",
    category: '6-7 years',
  },
  {
    id: 10,
    title: 'Fastron',
    image:"https://www.toysrus.in/media/catalog/product/cache/0a02c3039f9f94b26b587e518fdf737c/p/r/prod_2fproduct-image_2ftoys_2ftru_2fbrand_20image_20dump_2fft_drone_2fft_drone_1.jpg",
    price: "Rs.7000",
    category: 'Above 7 years',
  },
  {
    id: 11,
    title: 'BasketBall',
    image:"https://www.toysrus.in/media/catalog/product/cache/0a02c3039f9f94b26b587e518fdf737c/8/9/8902491006726_1.jpg",
    price: "Rs.2499",
    category: 'Above 7 years',
  },
  {
    id: 12,
    title: 'Mandala',
    image:"https://www.toysrus.in/media/catalog/product/cache/0a02c3039f9f94b26b587e518fdf737c/t/r/tru_2fbrand_image_dump_2f9789387177017_2fmonobrand_2f9789387177017_1.jpg",
    price: "Rs.999",
    category: 'Above 7 years',
  },

];

const Age= () => {
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
 <a href="brand"> BRAND</a>
<a href="/boy"> BOYS</a>
 <a href="/girl"> GIRLS</a>

</div>
</div>
    <div className="portfolio-container">
      <div className="filter-buttons">
        <button onClick={() => handleFilterChange('All')}>All</button>
        <button onClick={() => handleFilterChange('Below 5 years')}>Below 5 years</button>
        <button onClick={() => handleFilterChange('5-6 years')}>5-6 years</button>
        <button onClick={() => handleFilterChange('6-7 years')}>6-7 years</button>
        <button onClick={() => handleFilterChange('Above 7 years')}>Above 7 years</button>
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

export default Age;
