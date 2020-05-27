import React from "react";
import ShelfChangerButton from "./shelfChangerButton";

const BookCategory = (props) => {
  const { shelf, imageURL, shelfChangerButton, book, title, author } = props;
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
          <ShelfChangerButton
            shelf={shelf}
            shelfChangerButton={shelfChangerButton}
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
