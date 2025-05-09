import Hero from '../components/Hero';
import Projects from '../components/Projects';
import About from '../components/About';
import Contact from '../components/Contact';

const HomePage = () => {
  return (
    <div className="relative">
      <section id="home">
        <Hero />
      </section>
      
      <section id="projects" className="py-20">
        <Projects />
      </section>
      
      <section id="about" className="py-20">
        <About />
      </section>
      
      <section id="contact" className="py-20">
        <Contact />
      </section>
    </div>
  );
};

export default HomePage;