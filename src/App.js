import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Education from "./components/Education";
import SocialLinks from "./components/SocialLinks";
import Footer from "./components/Footer"

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <Education />
      <Experience />
      <Contact />
      <Footer />
      <SocialLinks />
    </div>
  );
}

export default App;
