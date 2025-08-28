import './App.css';
import View from './paths/view';
import { Navbar } from 'react-bootstrap';
import Home from './paths/home';
import Profile from './paths/profile';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Create from './paths/create';
import NavBar from './NavBar';

function App() {
  return (
    <div>
    <Router>
      <NavBar /> {/* <-- use your custom NavBar, not Navbar */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/paths/home" element={<Home />} />
        <Route path="/paths/view" element={<View />} />
        <Route path="/paths/create" element={<Create />} />
        <Route path="/paths/profile" element={<Profile />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;