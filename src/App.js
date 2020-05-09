import React, { Component } from "react";
import Navbar from "./layouts/Navbar";
import MovieList from "./components/MovieList";
import { HashRouter, Switch, Route } from "react-router-dom";
import MovieDetail from "./components/MovieDetail";

class App extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
    };
  }

  componentDidMount() {
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=54cd1af69dd6dc43fcfdfc3a29bef89b&language=en-US&page=1`
    )
      .then((res) => res.json())
      .then((res) => this.setState({ movies: res.results }));
  }

  render() {
    return (
      <div className="App">
        <HashRouter basename="/">
          <Navbar />
          <Switch>
            <Route
              exact
              path="/"
              render={(props) => (
                <MovieList {...props} movies={this.state.movies} />
              )}
            />
            <Route path="/moviedetail/:id" component={MovieDetail} />
          </Switch>
        </HashRouter>
      </div>
    );
  }
}
export default App;
