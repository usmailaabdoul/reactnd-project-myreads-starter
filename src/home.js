import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import { BookCard, BookSection } from './components';
import { update } from './BooksAPI'
import { getCurrentlyReading, getWantToReading, getRead } from './utils/helpers';

const Home = () => {
  const [currentlyReading, setCurrentlyReading] = useState([]);
  const [wantToRead, setWantToRead] = useState([]);
  const [read, setRead] = useState([]);

  useEffect(() => {
    getAll()
  }, []);

  const getAll = async () => {
    try {
      let resA = await getCurrentlyReading();
      setCurrentlyReading(resA)

      let resB = await getWantToReading();
      setWantToRead(resB)

      let resC = await getRead()
      setRead(resC);
    } catch (error) {
      console.log(error)
    }
  }

  const moveBook = async (book, shelf) => {
    try {
      await update(book, shelf)
      getAll()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          <BookSection title="Currently Reading">
            {currentlyReading && currentlyReading.map((book, index) => (
              <BookCard
                book={book}
                key={index}
                moveBook={(book, shelf) => moveBook(book, shelf)}
              />
            ))}
          </BookSection>
          <BookSection title="Want to Read">
            {wantToRead && wantToRead.map((book, index) => (
              <BookCard
                book={book}
                key={index}
                moveBook={(book, shelf) => moveBook(book, shelf)}
              />
            ))}
          </BookSection>
          <BookSection title="Read">
            {read && read.map((book, index) => (
              <BookCard
                book={book}
                key={index}
                moveBook={(book, shelf) => moveBook(book, shelf)}
              />
            ))}
          </BookSection>
        </div>
      </div>
      <div className="open-search">
        <Link to="/search">
          <button>Add a book</button>
        </Link>
      </div>
    </div>
  )
}

export default Home
