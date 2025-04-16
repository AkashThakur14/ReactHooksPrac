import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { HeroSection } from "./components/HeroSection";
import "./App.css"
import { RuleHooks } from "./components/RuleHooks";
import { UseStateArray } from "./components/UseStateArray";
import { UseStateObject } from "./components/UseStateObject";
import { ShortCirEval } from "./components/ShortCirEval";


const App = () => {
  return (
    <div>
      <Navbar />
      {/* <HeroSection /> */}
      {/* <RuleHooks /> */}
      {/* <UseStateArray /> */}
      {/* <UseStateObject /> */}
      <ShortCirEval />
      <Footer />
    </div>
  )
}

export default App;