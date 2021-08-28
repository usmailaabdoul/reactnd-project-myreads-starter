import {getAll} from '../BooksAPI';

export const getCurrentlyReading = async () => {
  try {
    const res = await getAll();
    const books = res.filter(r => r.shelf === "currentlyReading")
    return books
  } catch (error) {
    console.log(error)
  }
}

export const getWantToReading = async () => {
  try {
    const res = await getAll();
    const books = res.filter(r => r.shelf === "wantToRead")
    return books
  } catch (error) {
    console.log(error)
  }
}

export const getRead = async () => {
  try {
    const res = await getAll();
    const books = res.filter(r => r.shelf === "read")
    return books
  } catch (error) {
    console.log(error)
  }
}
