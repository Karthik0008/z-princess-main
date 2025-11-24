
import './App.css'
import Home from './components/Home'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Contact from './components/Contact';
import About from './components/About';
import Features from './components/Services';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {


  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/features" element={<Features />} />
          {/* Add more routes here as needed */}
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
