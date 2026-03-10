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
      <div className="header">
        <Navbar />
      </div>
      <div className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Details/:id" element={<Details />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
