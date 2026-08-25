import Navbar from "./Layout/Navbar";
import Hero from "./Sections/Hero";
import About from "./Sections/About";
import Projects from "./Sections/Projects";
import Experience from "./Sections/Experience";
import Contact from "./Sections/Contact";
import Footer from "./Layout/Footer";
function App() {
  return (
    <div className="min-h-screen relative overflow-x-hidden">
      <Navbar />
      <main>
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Contact />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;
