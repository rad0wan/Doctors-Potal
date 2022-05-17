import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Appointment from './pages/Appointment/Appointment';
import Login from './pages/Login/Login';
import ContactUs from './pages/Contact Us/ContactUs';
import Reviews from './pages/Reviews/Reviews';
import Header from './share/Header';
import SignUp from './pages/Login/SignUp';
import RequireAuth from './pages/hooks/RequireAuth';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './pages/Dashboard/Dashboard';
import MyAppointments from './pages/Dashboard/MyAppointments';
import MyReviews from './pages/Dashboard/MyReviews';
import Users from './pages/Dashboard/Users';
import RequireAdmin from './pages/hooks/RequireAdmin';

function App() {
  return (
    <div className='max-w-8xl mx-auto'>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="appointment" element={
          <RequireAuth>
            <Appointment />
          </RequireAuth>
        } />
        <Route path="dashboard" element={
          <RequireAuth>
            <Dashboard />
          </RequireAuth>
        }>
          <Route index element={<MyAppointments />}></Route>
          <Route path='reviews' element={<MyReviews />}></Route>
          <Route path='users' element={<RequireAdmin><Users></Users></RequireAdmin>}></Route>
        </Route>
        <Route path="reviews" element={<Reviews />} />
        <Route path="contactUs" element={<ContactUs />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
