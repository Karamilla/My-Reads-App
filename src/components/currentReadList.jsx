import React from "react";
import BookList from "./bookList";

const CurrentReadList = ({ currentBooks, HandleChangerButton, title }) => {
  return (
    <div>
      <div className="bookshelf">
        <h2 className="bookshelf-title">{title}</h2>
        <BookList
          currentlyReading={currentBooks}
          HandleChangerButton={HandleChangerButton}
        />
      </div>
    </div>
  );
};

export default CurrentReadList;
