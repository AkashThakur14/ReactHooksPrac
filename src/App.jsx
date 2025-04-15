import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { HeroSection } from "./components/HeroSection";
import "./App.css"
import { RuleHooks } from "./components/RuleHooks";
import { UseStateArray } from "./components/UseStateArray";
import { UseStateObject } from "./components/UseStateObject";


const App = () => {
  return (
    <div>
      <Navbar />
      {/* <HeroSection /> */}
      {/* <RuleHooks /> */}
      <UseStateArray />
      {/* <UseStateObject /> */}
      <Footer />
    </div>
  )
}

export default App;