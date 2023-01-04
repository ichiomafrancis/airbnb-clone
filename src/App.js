import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import OptionCards from "./components/OptionCards/OptionCards";
import data from "./Data";
import "./App.css";

function App() {
  const cards = data.map((item) => {
    return (
      <OptionCards
        key={item.id}
        img={item.coverImg}
        rating={item.stats.rating}
        reviewCount={item.stats.reviewCount}
        location={item.location}
        title={item.title}
        price={item.price}
      />
    );
  });

  return (
    <div className="app">
      <Header />
      <Hero />
      {cards}
    </div>
  );
}

export default App;
