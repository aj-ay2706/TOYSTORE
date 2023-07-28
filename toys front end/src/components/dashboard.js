import React from 'react';
import { Link} from 'react-router-dom';

import './dashboard.css';

function Dashboard() {
  return (
    <div>
        <div className="container">
        <div className='dashboard-header'>

        
          <h1 className='name'>COO COO TOYS</h1>
        <div className='dashboard-links'>

        <Link to="/login"><button className="logbutton" style={{backgroundColor:'#feba33',color: 'white'}}>Login</button></Link> &nbsp;&nbsp; 
        <Link to="/signup"><button className="logbutton" style={{backgroundColor:'#feba33',color: 'white'}}>Signup</button></Link>
        </div>
        </div>
          <div className="gallery-wrap">
            <div className="item item-1" />
            <div className="item item-2" />
            <div className="item item-3" />
            <div className="item item-4" />
            <div className="item item-5" />
          </div>
        </div>
        <div className="social">
          <a href="https://twitter.com/StefCharle" target="_blank">
            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/149103/twitter.svg" alt="" />
          </a>
        </div>
      </div>
  );
}

export default Dashboard;
