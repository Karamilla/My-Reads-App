import React from "react";
import * as BooksAPI from "../BooksAPI";
// IMPORT SEARCH INPUT COMPONENT INTO SEARCH PAGE
import SearchInput from "./SearchInput";
// IMPORT SEARCH LIST COMPONENT INTO SEARCH PAGE.
import SearchList from "./SearchList";
// IMPORT CLOSE SEARCH BTN COMPONENT INTO SEARCH PAGE.
import CloseSearchBtn from "./CloseSearchBtn";

class SearchPage extends React.Component {
  state = {
    searchResult: [],
    error: undefined,
  };
  // Function for making Async search request to BooksAPI.
  searchSubmit = async (query) => {
    const searchResult = await BooksAPI.search(query);
    // Check whether search result array exists.
    if (searchResult.error !== "empty query") {
      // Loop through search results and compare each result's id property to the each book in books array id property.
      searchResult.forEach((result) => (result.shelf = "none"));
      searchResult.forEach((result) => {
        this.props.books.map((book) => {
          /* If result id property is = book's id property then set the result shelf property value equal to the that's 
                matching book's shelf property */
          if (result.id === book.id) {
            result.shelf = book.shelf;
          }
          return book;
        });
        return result;
      });
      // Set searchResult state to value returned from call to BooksAPI.search async function.
      this.setState(() => ({
        searchResult,
      }));
      // If searhc results comes back empty then set error state to string value and reset searchResult state property to an empty array.
    } else {
      this.setState(() => ({
        error: "No results please try another search term",
        searchResult: [],
      }));
    }
  };

  // Function to clear searchResults state prop when serach input field is empty.
  clearSearch = (query) => {
    this.setState(() => ({
      searchResult: [],
      error: undefined,
    }));
  };
  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <CloseSearchBtn />
          <SearchInput
            searchSubmit={this.searchSubmit}
            clearSearch={this.clearSearch}
          />
        </div>
        <SearchList
          className="search-books-results"
          searchResult={this.state.searchResult}
          books={this.props.books}
          changeShelfSearch={this.props.changeShelfSearch}
          errorMessage={this.state.error}
        />
      </div>
    );
  }
}

export default SearchPage;
