// src/pages/Home.jsx
import Hero from "../components/landing page/Hero";
import Services from "../../medical-billing/src/components/Services";
import About from "../components/About";
import Contact from "../components/Contact";
import Blog from "../components/Blog";

const Home = () => {
  return (
    <main>
      <section id="home">
        <Hero />
      </section>
      
      <section id="services">
        <Services />
      </section>
      
      <section id="about">
        <About />
      </section>
      
      <section id="blog">
        <Blog />
      </section>
      
      <section id="contact">
        <Contact />
      </section>
    </main>
  );
};

export default Home;