import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Appointment from './pages/Appointment/Appointment';
import Login from './pages/Login/Login';
import ContactUs from './pages/Contact Us/ContactUs';
import Reviews from './pages/Reviews/Reviews';
import Header from './share/Header';

function App() {
  return (
    <div className='max-w-8xl mx-auto'>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="appointment" element={<Appointment />} />
        <Route path="reviews" element={<Reviews />} />
        <Route path="contactUs" element={<ContactUs />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
