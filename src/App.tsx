import "./App.css";
import Book from "./components/Book/Book";
import { Counter } from "./components/Counter/Counter";
import GoldPriceCalculator from "./components/GoldPriceCalculator";
import Greeting from "./components/Greeting/Greeting";
import Hero from "./components/Hero/Hero";
import ProfileCard from "./components/ProfileCard/ProfileCard";
import Tool from "./components/Tool/Tool";

function App() {
  return (
    <>
      <h1>Hello React</h1>
      <Tool />
      <Greeting name="Ioann" age={20} />
      <Hero />
      <Counter />
      <GoldPriceCalculator />
      <Book title="Harry Potter" author="J.K. Rowling" year={1997} />
      <ProfileCard
        avatar="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
        name="John Doe"
        description="Fake person"
      />
    </>
  );
}

export default App;
