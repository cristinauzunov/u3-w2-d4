import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Welcome from "./components/Welcome";
import BookList from "./components/BookList";
import scifi from "./data/scifi.json";
import fantasy from "./data/fantasy.json";
import horror from "./data/horror.json";
import romance from "./data/romance.json";
import history from "./data/history.json";

const dataMap = {
  scifi,
  fantasy,
  horror,
  romance,
  history,
};

function App() {
  const [genre, setGenre] = useState("scifi");

  return (
    <div className="app-wrapper">
      <Navbar setGenre={setGenre} />  {/* ← passa setGenre alla navbar */}
      <main>
        <Welcome />
        <BookList books={dataMap[genre]} />  {/* ← cambia in base al genere */}
      </main>
      <Footer />
    </div>
  );
}

export default App;