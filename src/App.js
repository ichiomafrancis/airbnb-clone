import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Cards from "./components/Cards/Cards";
import data from "./Data";
import "./App.css";

function App() {
  const cards = data.map((item) => {
    return (
      <Cards
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
