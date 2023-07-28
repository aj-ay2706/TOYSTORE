import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addFeedback } from './api';
import { Link } from 'react-router-dom';

const FeedForm = () => {
//   const [email, setEmail] = useState('');
//   const [Name, setName] = useState('');
//   const[Subject,setSubject]=useState('');
//   const[Message,setMessage]=useState('');
const[formdata,setFormdata]= useState({
    email: '',
    name: '',
    subject: '',
    message: ''
   
  })
  const navigate = useNavigate();
  const handleChange = (e) => {
    e.preventDefault();
    setFormdata({ ...formdata, [e.target.id]: e.target.value })
    // console.log(formdata);
  }
  const handleSubmit = async(e) => {
    e.preventDefault();
    try{
      await addFeedback(formdata);
      navigate('/')
    }
    catch(error){
      console.log(error);
    }

    console.log(formdata);
  }
  
  
  
//   const handleEmailChange = (event) => {
//     setEmail(event.target.value);
//   };
  
//   const handleNameChange = (event) => {
//     setName(event.target.value);
//   };
//   const handleSubjectChange = (event)=>{
//     setSubject(event.target.value);
//   }
//   const handleMessageChange = (event)=>{
//     setMessage(event.target.value);
//   }
  
//   const handleSubmit = (event) => {
//     // event.preventDefault();
//     // if (!email || !password) {
//     //   alert("please enter Email and password.");
//     //   return;
//     // }
//     // Add your login logic here
//     console.log('Login form submitted');
//     console.log('Email:', email);
//     console.log('Name:', Name);
//     console.log('Subject',Subject);
//     console.log('Message',Message);
//   //  Navigate('/Home')
//   };

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
    <div className="down">
      <div className="login-form">
        <center><h2>FEEDBACK</h2></center>
        <br></br><br></br><br></br>
        <form style={{width:"1000px",height:"400px"}}onSubmit={handleSubmit} >
        <br></br><br></br><br></br>
          <input
          style={{width:"800px"}}
            type="email"
            placeholder="Email"
            id='email'
            onChange={handleChange}
            required
          />
          <input
          style={{width:"800px"}}
            type="name"
            placeholder="Name"
            id='name'
            onChange={handleChange}
            required
          />
             <input
             style={{width:"800px"}}
            type="name"
            placeholder="Subject"
            id='subject'
            onChange={handleChange}
            required
          />
            <input
            style={{width:"800px"}}
            type="name"
            placeholder="Message"
            id='message'
            onChange={handleChange}
            required
          />
          <br></br><br></br><br></br>
                <button className="logbutton" style={{ backgroundColor: '#feba33', color: 'white' }}  onChange={handleSubmit} >Submit</button>
          <div className="button">
         
          </div>
        </form>
      </div>
    </div>
    </>
  );
};

export default FeedForm;