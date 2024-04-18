 import 'bootstrap/dist/css/bootstrap.min.css';
import "./css/templatemo.css";
import "./css/custom.css";
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';



function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
