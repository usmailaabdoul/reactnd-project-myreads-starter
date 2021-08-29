import { useEffect, useState } from 'react';
import PropTypes from 'prop-types'
import img from '../icons/404.png';

const BookCard = ({ book, moveBook }) => {
  const { imageLinks, authors, title, shelf } = book;
  const [activeValue, setActiveValue] = useState('none');

  useEffect(() => {
    setActiveValue(shelf)
  }, [shelf]);

  const onChange = (value) => {
    moveBook(book, value)
  }

  return (
    <li>
      <div className="book">
        <div className="book-top">
          {imageLinks ? (
            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${imageLinks.smallThumbnail})` }}></div>
          ) : (
            <img className="book-cover" src={img} alt="404-error" style={{ width: 128, height: 193 }} />
          )}
          <div className="book-shelf-changer">
            <select onChange={(e) => onChange(e.target.value)} value={activeValue}>
              <option value="move" disabled >Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{title}</div>
        <div className="book-authors">
          {authors && authors
            .map((author, index) => index === authors.length - 1 ? `${author}` : `${author}, `)}
        </div>
      </div>
    </li>
  )
}

BookCard.propTypes = {
  book: PropTypes.shape({
    shelf: PropTypes.string,
    title: PropTypes.string.isRequired,
    authors: PropTypes.array,
    imageLinks: PropTypes.shape({ smallThumbnail: PropTypes.string })
  }),
  moveBook: PropTypes.func.isRequired,
  fromSearch: PropTypes.bool
};

export default BookCard;
