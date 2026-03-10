import "./App.css";
import Greeting from "./components/Greeting/Greeting";
import Hero from "./components/Hero/Hero";

function App() {
  return (
    <>
      <h1>Hello React</h1>

      <Greeting name="John" />
      <Greeting name="Bob" />
      <Greeting name="Ioann" age={20} />
      <Hero />
    </>
  );
}

export default App;
