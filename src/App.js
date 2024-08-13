import NavBar from "./componenets/NavBar";
import Home from "./componenets/Home";
import SocialLinks from "./componenets/SocialLinks";
import About from "./componenets/About";
import Portfolio from "./componenets/Portfolio";
import Experience from "./componenets/Experience";
import Contact from "./componenets/Contact";


function App() {
  return (
    <div>
      <NavBar/>
      <Home/>
      <About/>
      <Portfolio/>
      <Experience/>
      <Contact/>
      <SocialLinks/>
    </div>
  );
}

export default App;
