import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import Booking from './pages/Booking';
import Temple from './pages/Temple';
import Contact from './pages/Contact';
import './styles.css';
import Footer from './components/Footer';

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login/>}/>
        <Route path="/Register" element={<Register/>}/>
        <Route path="/booking" element={<Booking />} />
        <Route path="/temple" element={<Temple />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}
