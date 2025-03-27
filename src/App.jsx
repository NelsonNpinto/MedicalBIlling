// src/App.jsx
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./components/landing page/Navbar";
import Home from './pages/Home';
import BlogPage from './pages/BlogPage';
import BlogPost from './pages/BlogPost';
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div className="font-sans antialiased text-gray-800">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:postId" element={<BlogPost />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;