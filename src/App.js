// import logo from "./logo.svg";
import "./App.css";
import DogList from "./components/DogList";
import Dog from "./components/Dog";

function App() {
  const dogData = [
    {
      id: 1,
      name: "Kiki the Dog",
      speak: "woof",
      age: 4,
      color: "Light brown",
    },
    { id: 2, name: "Canelo", speak: "Ruuf", age: 2, color: "Brown" },
  ];

  return (
    <div className="App">
      <header className="App-header">
        <h1>Otters Flasky</h1>
      </header>
      <main>
        <DogList dogData={dogData} />
        <Dog />
        <Dog />
        <Dog />
      </main>
    </div>
  );
}

export default App;
