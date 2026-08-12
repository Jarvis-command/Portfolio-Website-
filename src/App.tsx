import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Insights from './components/Insights';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Insights />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
