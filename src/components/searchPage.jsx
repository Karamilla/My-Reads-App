import React from "react";
import * as BooksAPI from "../BooksAPI";
import SearchInput from "./searchInput";
import SearchList from "./searchList";
import CloseSearchBtn from "./closeSearch";

class SearchPage extends React.Component {
  state = {
    searchResult: [],
    error: undefined,
  };
  searchSubmit = async (query) => {
    const searchResult = await BooksAPI.search(query);
    if (searchResult.error !== "empty query") {
      searchResult.forEach((result) => (result.shelf = "none"));
      searchResult.forEach((result) => {
        this.props.books.map((book) => {
          if (result.id === book.id) {
            result.shelf = book.shelf;
          }
          return book;
        });
        return result;
      });
      this.setState(() => ({
        searchResult,
      }));
    } else {
      this.setState(() => ({
        error: "No results please try another search term",
        searchResult: [],
      }));
    }
  };

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
