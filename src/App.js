import "./App.css";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<BookList />} />
        <Route path="/search" element={<BookSearch />} />
      </Routes>
    </div>
  );
}

const BookList = () => {
  return (
    <div>
      <ListBooks />
    </div>
  );
};
const BookSearch = () => {
  return <div>Hello Search</div>;
};

const ListBooks = (props) => {
  const { bookshelves } = props;

  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>My Reads</h1>
      </div>
      <Bookcase bookshelves={bookshelves} />
      <OpenSearchButton />
    </div>
  );
};

const OpenSearchButton = () => {
  return (
    <div className="open-search">
      <Link to="search">
        <button>Add a book</button>
      </Link>
    </div>
  );
};

const Bookcase = (props) => {
  const { bookshelves } = props;

  return (
    <div className="list-books-content">
      <div>
        {bookshelves.map((shelf) => {
          <Bookshelf key={shelf.key} shelf={shelf} />;
        })}
      </div>
    </div>
  );
};

const Bookshelf = (props) => {
  const { shelf } = props;

  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{shelf.name}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          <Book book={{}} />
        </ol>
      </div>
    </div>
  );
};

const Book = (props) => {
  const { book } = props;
  return (
    <li>
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage:
                'url("http://books.google.com/books/content?id=PGR2Aw...")',
            }}
          />
          <BookshelfChanger />
        </div>
        <div className="book-title">To Kill a Mockingbird</div>
        <div className="book-authors">Harper Lee</div>
      </div>
    </li>
  );
};

const BookshelfChanger = () => {
  return (
    <div className="book-shelf-changer">
      <select>
        <option value="move" disabled>
          Move to...
        </option>
        <option value="currentlyReading">Currently Reading</option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
        <option value="none">None</option>
      </select>
    </div>
  );
};

export default App;
