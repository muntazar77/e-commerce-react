import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import "./css/templatemo.css";
import "./css/custom.css";
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Category from './pages/Category';
import ShopSingle from './pages/ShopSingle';
import Shop from './pages/Shop';




function App() {
  return (
    <Router>
      <div className="App">
        <Header />
          <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route path="/shop" element={<Shop/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/Categories" element={<Category/>} />
            <Route path="/shop/:id" element={<ShopSingle/>} />

          </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
