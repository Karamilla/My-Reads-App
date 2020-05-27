import React from "react";
// IMPORT BOOK LIST COMPONENT INTO PREVIOUS READ BOOK LIST.
import BookList from "./bookList";

const PreviousReadList = ({ previousBooks, HandleChangerButton, title }) => {
  return (
    <div>
      <div className="bookshelf">
        <h2 className="bookshelf-title">{title}</h2>
        <BookList
          previousReads={previousBooks}
          HandleChangerButton={HandleChangerButton}
        />
      </div>
    </div>
  );
};

export default PreviousReadList;
