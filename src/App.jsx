import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Metrics from './components/Metrics';
import Experience from './components/Experience';
import Projects from './components/Projects';
import TechStack from './components/TechStack';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#080808]">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Metrics />
        <Experience />
        <Projects />
        <TechStack />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
