import {getAll} from '../BooksAPI';

const getBooks = (shelf) => async () => {
  try {
    const res = await getAll();
    return res.filter(r => r.shelf === shelf);
  } catch (error) {
    console.log(error)
  }
}

const getRead = getBooks('read');
const getWantToRead = getBooks('wantToRead');
const getCurrentlyReading = getBooks('currentlyReading');

export {
  getRead,
  getWantToRead,
  getCurrentlyReading,
}