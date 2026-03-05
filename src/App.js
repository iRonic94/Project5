import { Routes, Route } from 'react-router-dom'
import './App.scss';
import Home from './pages/Home'
import About from './pages/About'
import Details from './pages/Details';
import Navbar from './components/Navbar';


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
      <div className="footer">
      </div>
    </>
  );
}

export default App;
