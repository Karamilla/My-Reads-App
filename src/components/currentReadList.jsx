import React from "react";
import BookList from "./bookList";

const CurrentReadList = ({ currentBooks, shelfChangerButton, title }) => {
  return (
    <div>
      <div className="bookshelf">
        <h2 className="bookshelf-title">{title}</h2>
        <BookList
          currentlyReading={currentBooks}
          shelfChangerButton={shelfChangerButton}
        />
      </div>
    </div>
  );
};

export default CurrentReadList;
