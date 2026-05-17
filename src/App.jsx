import './index.css';
import Footer from './layots/Footer';
import NavBar from './layots/NavBar';

import theme_context from './context/themeContext';
import HeroSection from './sections/heroSection';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import ContactMe from './sections/ContactMe';

function App() {
  return (
    <theme_context.Provider value>
      <div className="min-h-screen  ">
        <NavBar />
        <div className="px-20">
          <HeroSection />
          <About />
          <Skills />
          <Projects />
          <ContactMe />
        </div>
        <Footer />
      </div>
    </theme_context.Provider>
  );
}

export default App;
