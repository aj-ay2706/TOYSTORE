import React, { useState } from "react";
import './category.css';
import { Link } from "react-router-dom";


const Category = () => {


  return (
    <>
    <nav>
        <div>
          <div className="topnav">
            <img className="img" src="https://cdn.dribbble.com/users/1700393/screenshots/14456757/media/13060d4fcb0014c716b78743d405c04d.png?resize=400x0" alt="logo" />
            <br></br>
            <h1>COO COO TOYS</h1>
            <button style={{ float: 'right' }}><Link to='/login'>LOGOUT</Link></button>
            <button style={{ float: 'right' }}><Link to='/cart'>CART</Link></button>
            <button style={{ float: 'right' }}><Link to='/category'>CATEGORIES</Link></button>
            
          </div>
        </div>
      </nav>
      <div className="cate">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
  {/* The sidebar */}
  <div className="sidebar">
  <Link to='/nav'> <a href="#home"><i className="fa fa-fw fa-home" /> Home</a></Link>
    
    <Link to='/about'> <a href="#clients"><i className="fa fa-fw fa-user" /> About</a></Link>
    <Link to='/contact'><a href="#contact"><i className="fa fa-fw fa-envelope" /> Contact</a></Link>
  </div>
</div>
    
    <div style={{backgroundColor:'white'}} className="whole">
      
   <div className="cate">
     <img style={{marginTop: '500px'}}src="https://cdn-icons-png.flaticon.com/128/3176/3176371.png"/>
  <Link to='/offer'><button className="btn btn-gradient"> EXPLORE OFFERS </button><br></br></Link>

      <img style={{marginTop: '100px'}}src="https://cdn-icons-png.flaticon.com/128/7527/7527115.png"/>
  <button className="btn btn-gradient gradient2">0-12 MONTHS </button>
  &nbsp;&nbsp;&nbsp;<button className="btn btn-gradient gradient2">12-24 MONTHS 
  </button>&nbsp;&nbsp;&nbsp;<button className="btn btn-gradient gradient2">2-5 YEARS
  </button>&nbsp;&nbsp;&nbsp;<button className="btn btn-gradient gradient2">5-8 YEARS
  </button>&nbsp;&nbsp;&nbsp;<button className="btn btn-gradient gradient2">8-12 YEARS</button><br></br>

  <img style={{marginTop: '100px'}}src="https://cdn-icons-png.flaticon.com/128/7111/7111069.png"/>
  <button className="btn btn-gradient gradient2">LEGO </button>
  &nbsp;&nbsp;&nbsp;<button className="btn btn-gradient gradient2">BARBIE  
  </button>&nbsp;&nbsp;&nbsp;<button className="btn btn-gradient gradient2">HOT WHEELS
  </button>&nbsp;&nbsp;&nbsp;<button className="btn btn-gradient gradient2">MONOPOLY
  </button><br></br>

  <img style={{marginTop: '100px'}}src="https://cdn-icons-png.flaticon.com/128/2061/2061488.png"/>
  <button className="btn btn-gradient gradient2">BOYS </button>
  &nbsp;&nbsp;&nbsp;<button className="btn btn-gradient gradient2">GIRLS </button>
  
</div>
</div>


</>
  );
}
export default Category;