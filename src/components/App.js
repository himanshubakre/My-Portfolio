import "../styles.css";

import Navbar from "./Navbar";
import Hero from "./Hero";
import About from "./About";
import Skills from "./Skills";
import Timeline from "./Timeline";
import Projects from "./Projects";
import Publications from "./Publications";
import Freelance from "./Freelance";
import Contacts from "./Contacts";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Timeline />
      <Projects />
      <Publications />
      <Freelance />
      <Contacts />
      <Footer />
    </div>
  );
}

export default App;
