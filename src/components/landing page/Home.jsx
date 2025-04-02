// src/pages/Home.jsx
import Hero from "../landing page/Hero";
import Services from "../Services";
import About from "../About";
import Contact from "../Contact";
import Blog from "../Blog page/BlogPage";
import EhrCompatibility from "../EhrCompatibility";
import DiscoverHelp from "../DiscoverHelp";
import CustomerReviews from "../CustomerReviews";

const Home = () => {
  return (
    <main>
      <section id="home">
        <Hero />
      </section>

      <section id="services">
        <Services />

        <EhrCompatibility />

        <DiscoverHelp />

        <CustomerReviews />
      </section>
      <section id="about">
        <About />
      </section>

      {/* <section id="blog">
        <Blog />
      </section> */}

      <section id="contact">
        <Contact />
      </section>
    </main>
  );
};

export default Home;
