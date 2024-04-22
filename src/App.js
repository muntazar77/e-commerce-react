import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import "./css/templatemo.css";
import "./css/custom.css";
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';



function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main className="container">
          <Switch>
            <Route exact path="/" component={Home} />
            {/* <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} /> */}
          </Switch>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
