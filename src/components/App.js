import "../styles.css";
import { useEffect } from "react";

// Components
import Navbar from "./Navbar";
import Hero from "./Hero";
import About from "./About";
import Skills from "./Skills";
import Timeline from "./Timeline";
import Projects from "./Projects";
import Publications from "./Publications";
import Contacts from "./Contacts";

// ✅ Custom Cursor Component
function Cursor() {
  useEffect(() => {
    const cursor = document.querySelector(".cursor");

    const moveCursor = (e) => {
      if (cursor) {
        cursor.style.left = e.clientX + "px";
        cursor.style.top = e.clientY + "px";
      }
    };

    document.addEventListener("mousemove", moveCursor);

    // cleanup (important)
    return () => {
      document.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return <div className="cursor"></div>;
}

// ✅ Main App Component
function App() {
  return (
    <div className="App">
      {/* Custom Cursor */}
      <Cursor />

      {/* Navbar */}
      <Navbar />

      {/* Sections */}
      <Hero />
      <About />
      <Skills />
      <Timeline />
      <Projects />
      <Publications />
      <Contacts />
    </div>
  );
}

export default App;
