import './App.css'
import Home from './Pages/Home'
import Header from './component/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Blogs from './Pages/Blogs';

function App() {

  return (
    
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blogs" element={<Blogs />} />
        </Routes>
      </BrowserRouter>
    
  );
}

export default App
