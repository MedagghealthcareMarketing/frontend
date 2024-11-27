// App.js
import './App.css';
import { Home } from './pages/Home';
import { GAE } from './pages/GAE';
import { PAE } from './pages/PAE'; 
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/genicular-artery-embolization-treatment" element={<GAE />} />
          <Route path="/pae" element={<PAE />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
