import "./styles.css";
import { useState } from "react";
import data from "./Data";

export default function App() {
  const [bookList, setBookList] = useState(data.javaScript);

  function clickEventHandler(event) {
    setBookList(event);
  }

  const books = bookList.map((book) => {
    return (
      <li key={book.name} id="fav-books">
        <div id="main-title">{book.name}</div>
        <div id="book-rating">{book.rating}</div>
        <div id="book-descp">{book.description}</div>
      </li>
    );
  });

  return (
    <div className="App">
      <h1>GoodBooks</h1>
      <p>Checkout my favourite Books. Select a genre to get started.</p>
      <button onClick={() => clickEventHandler(data.javaScript)}>
        JavaScript
      </button>
      <button onClick={() => clickEventHandler(data.fiction)}>Fiction</button>
      <button onClick={() => clickEventHandler(data.nonFiction)}>
        Non-fiction
      </button>
      <button onClick={() => clickEventHandler(data.sciFi)}>Sci-fi</button>
      <hr />
      <ul>{books}</ul>
    </div>
  );
}
