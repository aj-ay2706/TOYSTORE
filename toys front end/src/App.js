import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import './App.css';
import Login from './components/login';
import Signup from './components/signup';
import Nav from './components/nav';
import Dashboard  from './components/dashboard';
import Cart from './components/cart';
import Contact from './components/contact';
import Offer from './components/offer';
import About from './components/about';
import Placeorder from './components/placeorder';
import { Provider } from 'react-redux';
import store from './components/store';
import Age from './components/age';
import Brand from './components/brand';
import Boy from './components/boy';
import Girl from './components/girl';
import FeedForm from './components/Feedback';

function App() {
  return (
    
    <Provider store={store}>
    <Router>
      <Routes>
      <Route path='/' element={<Dashboard/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/nav' element={<Nav/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/offer' element={<Offer/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/placeorder' element={<Placeorder/>}/>
      <Route path='/age' element={<Age/>}/>
      <Route path='/brand' element={<Brand/>}/>
      <Route path='/boy' element={<Boy/>}/>
      <Route path='/girl' element={<Girl/>}/>
      <Route path='fb' element={<FeedForm/>}/>
      </Routes>
    </Router>
    </Provider>
    
  );
}

export default App
