import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom'
import './App.scss';
import Home from './pages/Home'
import About from './pages/About'
import Details from './pages/Details';
import Navbar from './components/Navbar';


function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('/data/data.json')
      .then(response => response.json())
      .then(data => setData(data))
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <div className="header">
        <Navbar />
      </div>
      <div className="main">
        <Routes>
          <Route path="/" element={<Home data={data} />} />
          <Route path="/About" element={<About />} />
          <Route path="/Details/:id" element={<Details data={data} />} />
        </Routes>
      </div>
      <div className="footer">
      </div>
    </>
  );
}

export default App;
