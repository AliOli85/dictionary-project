import book from "./book.png";
import './App.css';
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={book} className="App-book" alt="book" />
      </header>
      <main>
        <Dictionary />
      </main>
      <footer className="App-footer">
        <small>
          Coded by Alicia
        </small>
      </footer>
    </div>
  );
}

export default App;
