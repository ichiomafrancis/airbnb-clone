import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Cards from "./components/Cards/Cards";
import data from "./Data";
import "./App.css";

function App() {
  const cards = data.map((item) => {
    return <Cards key={item.id} {...item} />;
  });

  return (
    <div className="app">
      <Header />
      <Hero />
      <section className="cards-list">{cards}</section>
    </div>
  );
}

export default App;
