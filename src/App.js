import React from "react";
import * as BooksAPI from "./BooksAPI";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import SearchPage from "./components/searchPage";
import MainPage from "./components/mainPage";
import NotFoundPage from "./components/notFoundPage";

class BooksApp extends React.Component {
  state = {
    books: [],
  };

  HandleChangerButton = async (book, shelf) => {
    await BooksAPI.update(book, shelf);
    const updatedBooks = await BooksAPI.getAll();
    this.setState({ books: updatedBooks });
  };

  async componentDidMount() {
    const updatedBooks = await BooksAPI.getAll();
    this.setState(() => ({ books: updatedBooks }));
  }

  render() {
    return (
      <div className="app">
        <Switch>
          {/*Main page route */}
          <Route
            path="/"
            exact
            render={() => (
              <MainPage
                books={this.state.books}
                changeShelf={this.changeShelf}
              />
            )}
          />
          {/*Search page route */}
          <Route
            path="/search"
            exact
            render={() => (
              <SearchPage
                books={this.state.books}
                changeShelfSearch={this.changeShelf}
              />
            )}
          />
          {/*404 page not found route*/}
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    );
  }
}

export default BooksApp;
