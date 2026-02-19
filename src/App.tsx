import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Register from './pages/Register';
import ProblemStatements from './pages/ProblemStatements';
import Contact from './pages/Contact';
import ScrollToHash from './components/ScrollToHash';

import Background from './components/Background';

function App() {
  return (
    <Router>
      <ScrollToHash />
      <Background />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/problems" element={<ProblemStatements />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
