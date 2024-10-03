import Home from './pages/Home'
import Pricing from './pages/Pricing'
import About from './pages/About'

import Navbar from './components/navbar/navbar'
import './App.css';
import { Route, Routes } from "react-router-dom"
 
function App() {
  console.log(window.location)
  return (
    <div className="App">
      <Navbar/>
      <div className='container'>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/pricing" element={<Pricing />}></Route>
          <Route path="/about" element={<About />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
