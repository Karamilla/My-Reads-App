import React from "react";
import BookItem from "./bookItem";

const BookList = (props) => {
  let books;
  if (props.currentlyReading !== undefined) {
    books = props.currentlyReading.map((book) => (
      <BookItem
        key={book.id}
        title={book.title}
        author={book.authors && book.authors}
        imageURL={book.imageLinks && book.imageLinks.thumbnail}
        shelf={book.shelf}
        HandleChangerButton={props.HandleChangerButton}
        book={book}
      />
    ));
  } else if (props.futureReads !== undefined) {
    books = props.futureReads.map((book) => (
      <BookItem
        key={book.id}
        title={book.title}
        author={book.authors && book.authors}
        imageURL={book.imageLinks && book.imageLinks.thumbnail}
        shelf={book.shelf}
        HandleChangerButton={props.HandleChangerButton}
        book={book}
      />
    ));
  } else if (props.previousReads !== undefined) {
    books = props.previousReads.map((book) => (
      <BookItem
        key={book.id}
        title={book.title}
        author={book.authors && book.authors}
        imageURL={book.imageLinks && book.imageLinks.thumbnail}
        shelf={book.shelf}
        HandleChangerButton={props.HandleChangerButton}
        book={book}
      />
    ));
  }
  return (
    <div className="bookshelf-books">
      <ol className="books-grid">{books}</ol>
    </div>
  );
};

export default BookList;
