import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import ProductPage from './pages/ProductPage';
import AgeGate from './components/age-gate/AgeGate';

export default function App() {
  return (
    <Router>
      <AgeGate />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products/:id" element={<ProductPage />} />
      </Routes>
    </Router>
  );
}