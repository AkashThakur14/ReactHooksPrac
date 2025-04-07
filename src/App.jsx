import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { HeroSection } from "./components/HeroSection";
import "./App.css"
import { RuleHooks } from "./components/RuleHooks";
import { UseStateArray } from "./components/UseStateArray";


const App = () => {
  return (
    <div>
      <Navbar />
      {/* <HeroSection /> */}
      {/* <RuleHooks /> */}
      <UseStateArray />
      <Footer />
    </div>
  )
}

export default App;