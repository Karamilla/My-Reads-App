import React from "react";
import BookList from "./bookList";

const FutureReadList = ({ futureBooks, HandleChangerButton, title }) => {
  return (
    <div>
      <div className="bookshelf">
        <h2 className="bookshelf-title">{title}</h2>
        <BookList
          futureReads={futureBooks}
          HandleChangerButton={HandleChangerButton}
        />
      </div>
    </div>
  );
};

export default FutureReadList;
