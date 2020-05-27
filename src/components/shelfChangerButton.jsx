import React from "react";

const ShelfChangerButton = (props) => {
  const handleShelfChange = (e) => {
    const shelfValue = e.target.value;
    props.ShelfChangerButton(props.book, shelfValue);
  };
  return (
    <div className="book-shelf-changer">
      <select value={props.shelf} onChange={handleShelfChange}>
        <option value="move" disabled>
          Move to...
        </option>
        <option value="currentlyReading">Currently Reading</option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
        <option value="none">None</option>
      </select>
    </div>
  );
};

export default ShelfChangerButton;
