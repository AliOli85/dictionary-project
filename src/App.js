import book from "./book.png";
import './App.css';
import Dictionary from "./Dictionary";
import { SiInstagram } from "react-icons/si";
import { SiTwitter } from "react-icons/si";

function App() {
  return (
    <div className="App float-start">
      <header className="App-header">
        <img src={book} className="App-book" alt="book" />
      </header>
      <main className="float-start">
        <Dictionary defaultKeyword="rain"/>
      </main>
      <footer className="App-footer float-start col-12">
        <a href="https://github.com/AliOli85/dictionary-project" target="_blank" rel="noreferrer" className="coder">
          <small>  
            Coded by Alicia García
          </small>
        </a>
        <a href="https://twitter.com/alifa_califa" target="_blank" rel="noreferrer"><SiTwitter /></a>
        <a href="https://www.instagram.com/alibooh/" target="_blank" rel="noreferrer"><SiInstagram /></a>
      </footer>
    </div>
  );
}

export default App;
