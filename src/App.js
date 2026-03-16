import { Routes, Route } from 'react-router-dom'
import './App.scss';
import Navbar from './components/Navbar';
import Home from './pages/Home'
import About from './pages/About'
import Details from './pages/Details';
import Footer from './pages/Footer'


function App() {
  return (
    <>
      <header>
        <div className="container">
          <Navbar />
        </div>
      </header>
      <main>
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Details/:id" element={<Details />} />
          </Routes>
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
