import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Register from './pages/Register';

import Background from './components/Background';
import CustomCursor from './components/CustomCursor';
import Preloader from './components/Preloader';

const App = () => {
  return (
    <Router>
      <div className="app-wrapper">
        <Preloader />
        <CustomCursor />
        <Background />
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
