import React from "react";
import CurrentReadList from "./currentReadList";
import FutureReadList from "./futureReadList";
import PreviousReadList from "./previousReadList";
import Header from "./header";
import PlusButton from "./plusButton";

const MainPage = (props) => {
  const currentBooks = props.books.filter(
    (book) => book.shelf === "currentlyReading"
  );
  const futureBooks = props.books.filter((book) => book.shelf === "wantToRead");
  const previousBooks = props.books.filter((book) => book.shelf === "read");
  return (
    <div className="list-books">
      <Header />
      <div className="list-books-content">
        <CurrentReadList
          currentBooks={currentBooks}
          HandleChangerButton={props.HandleChangerButton}
          title="Currently Reading"
        />
        <FutureReadList
          futureBooks={futureBooks}
          HandleChangerButton={props.HandleChangerButton}
          title="Want to Read"
        />
        <PreviousReadList
          previousBooks={previousBooks}
          HandleChangerButton={props.HandleChangerButton}
          title="Read"
        />
      </div>
      <PlusButton />
    </div>
  );
};

export default MainPage;
