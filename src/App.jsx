import "./App.css";
import Hero from "./components/landing page/Hero";
import Navbar from "./components/landing page/Navbar";
import Services from "../../medical-billing/src/components/Services";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";


function App() {
  return (
    <>
      <div className="font-sans antialiased text-gray-800">
        <Navbar />
        <Hero />
        <Services  />
        <About />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
