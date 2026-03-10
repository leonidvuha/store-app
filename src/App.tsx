import "./App.css";
import Greeting from "./components/Greeting/Greeting";
import Hero from "./components/Hero/Hero";
import ProfileCard from "./components/ProfileCard/ProfileCard";
import Tool from "./components/Tool/Tool";

function App() {
  return (
    <>
      <h1>Hello React</h1>
      <Tool />

      <Greeting name="John" />
      <Greeting name="Bob" />
      <Greeting name="Ioann" age={20} />
      
      <ProfileCard
        avatar="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
        name="Leonid"
        description="Frontend Developer in training"
        
      />
      <Hero />
    </>
  );
}

export default App;
