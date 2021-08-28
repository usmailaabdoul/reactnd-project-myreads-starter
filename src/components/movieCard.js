import { useEffect, useState } from 'react';
import PropTypes from 'prop-types'

const MovieCard = ({book, moveBook}) => {
  const {imageLinks, authors, title, shelf} = book;
  const [activeValue, setActiveValue] = useState(shelf);

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
          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${imageLinks.smallThumbnail})` }}></div>
          <div className="book-shelf-changer">
            <select onChange={(e) => onChange(e.target.value)} value={activeValue}>
              <option value="move" disabled >Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none" selected>None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{title}</div>
        <div className="book-authors">
          {authors && authors
            .map((author, index) => index === authors.length -1 ? `${author}` : `${author}, `)}
          </div>
      </div>
    </li>
  )
}

MovieCard.propTypes = {
  book: PropTypes.shape({
    shelf: PropTypes.string,
    title: PropTypes.string.isRequired,
    authors: PropTypes.array.isRequired,
    imageLinks: PropTypes.shape({ smallThumbnail: PropTypes.string.isRequired })
  }),
  moveBook: PropTypes.func.isRequired,
  fromSearch: PropTypes.bool
};

export default MovieCard;
