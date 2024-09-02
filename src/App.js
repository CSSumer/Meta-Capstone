import './App.css';
import HomePage from './Components/HomePage.js'
import BookingPage from './Components/BookingPage';
import {Routes, Route} from 'react-router-dom';
import AboutUs from './Components/AboutUs.js';
import Menu from './Components/Menu';
import OrderOnline from './Components/OrderOnline';
import Login from './Components/Login';


function App() {
  return (
    <>
    <Routes>

    <Route path="/" element={<HomePage />}/>
    <Route path="/about" element={<AboutUs/>}/>
    <Route path="/menu" element={<Menu/>}/>
    <Route path="/orderOnline" element={<OrderOnline/>}/>
    <Route path="/booking" element={<BookingPage />}/>
    <Route path="/login" element={<Login/>}/>
    </Routes>
    </>
  );
}

export default App;
