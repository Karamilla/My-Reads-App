import React from "react";
import shelfChangerButton from "./shelfChangerButton";

const BookCategory = (props) => {
  const { shelf, imageURL, ShelfChangerButton, book, title, author } = props;
  return (
    <li>
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url("${imageURL}")`,
            }}
          />
          <shelfChangerButton
            shelf={shelf}
            ShelfChangerButton={ShelfChangerButton}
            book={book}
          />
        </div>
        <div className="book-title">{title}</div>
        <div className="book-authors">{author}</div>
      </div>
    </li>
  );
};

export default BookCategory;
