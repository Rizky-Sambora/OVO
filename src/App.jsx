import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from '../src/Component/ScrollToTop';
import Home from './pages/Home';
import Features from './pages/Features';
import About from "./pages/About";
import Contact from "./pages/Contact";
import './App.css'; 
import './index.css'; 
function App() {
  return (
    <Router>

   <ScrollToTop />
      <Routes>

      
     
        <Route path="/" element={<Home />} />


        <Route path="/features" element={<Features />} />

        <Route path="/about" element={<About />} />


        <Route path="/contact" element={<Contact />} />
     
       
      </Routes>
     </Router>
  );
}

export default App;