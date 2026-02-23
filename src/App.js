import './App.scss';
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Navbar from './components/Navbar';


function App() {
  return (
    <>
      <div className="header">
        <Navbar />
      </div>
      <div className="main">
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/About" element={<About />} />
        </Routes>
      </div>
      <div className="footer"></div>
    </>
  );
}

export default App;
