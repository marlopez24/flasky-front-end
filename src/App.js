import logo from "./logo.svg";
import "./App.css";
import DogList from "./components/DogList";
import Dog from "./components/Dog";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Otters Flasky</h1>
      </header>
      <main>
        <DogList />
        <Dog />
        <Dog />
        <Dog />
      </main>
    </div>
  );
}

export default App;
