import { useState, useEffect } from 'react';
import PropTypes from 'prop-types'
import { search, update, getAll } from './BooksAPI';
import { MovieCard } from './components';

const Search = ({ history }) => {
  const [items, setItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [allBooks, setAllBooks] = useState([]);

  useEffect(() => {
    getAll()
      .then(res => setAllBooks(res))
      .catch(error => console.log(error))
  }, []);

  const onSearch = async (value) => {
    setSearchTerm(value)
    try {
      const res = await search(value);
      setItems(res)
    } catch (error) {
      console.log(error)
    }
  }

  const moveBook = async (book, shelf) => {
    try {
      await update(book, shelf)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <button className="close-search" onClick={() => history.goBack()}>Close</button>
        <div className="search-books-input-wrapper">
          <input
            type="text"
            placeholder="Search by title or author"
            value={searchTerm}
            onChange={(e) => onSearch(e.target.value)}
          />
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
          {items && items.map((book, index) => {
            let i = allBooks.findIndex((b) => b.id === book.id);
            if (i > -1) {
              book.shelf = allBooks[i].shelf
            }

            return (
              <MovieCard
                book={book}
                key={index}
                moveBook={(book, shelf) => moveBook(book, shelf)}
                fromSearch={true}
              />
            )
          })}
        </ol>
      </div>
    </div>
  )
}

Search.propTypes = {
  history: PropTypes.shape({
    goBack: PropTypes.func.isRequired
  })
};

export default Search;
