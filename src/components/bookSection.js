import PropTypes from 'prop-types'

const BookSection = ({ children, title }) => {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{title}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {children}
        </ol>
      </div>
    </div>
  )
}

BookSection.propTypes = {
  children: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
};

export default BookSection
