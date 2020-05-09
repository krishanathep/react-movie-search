import React, { Component } from "react";
import Navbar from "./layouts/Navbar";
import MovieList from "./components/MovieList";
import { HashRouter, Switch, Route } from "react-router-dom";
import MovieDetail from "./components/MovieDetail";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: [],
      query: '',
      totalPages: 0,
      currentPage: 0,
      searchTerm: 0
    };
  }

  componentDidMount() {
      const endpoint =`https://api.themoviedb.org/3/movie/popular?api_key=54cd1af69dd6dc43fcfdfc3a29bef89b&language=en-US&page=1`
      this.fetchTerms(endpoint)
  }

  searchItems = searchTerm => {
    let endpoint = ''
    this.setState({
      movies: [],
      searchTerm
    })

    if(searchTerm === '') {
      endpoint = `https://api.themoviedb.org/3/movie/popular?api_key=54cd1af69dd6dc43fcfdfc3a29bef89b&language=en-US&page=1`
    } else {
      endpoint = `https://api.themoviedb.org/3/search/movie?query=${this.state.searchTerm}&api_key=54cd1af69dd6dc43fcfdfc3a29bef89b`
    }
    this.fetchTerms(endpoint)
  }

  fetchTerms = endpoint => {
    fetch(endpoint)
      .then(result => result.json())
      .then(result => this.setState({
        movies: [...this.state.movies, ...result.results],
        currentPage: result.page,
        totalPages: result.total_pages

      }))
  }

  render() {
    const { movies, query } = this.state
    const isSearched = query => item =>
      !query || item.title.toLowerCase().includes(query.toLowerCase())
    return (
      <div className="App">
        <HashRouter basename="/">
          <Navbar />
          <Switch>
            <Route
              exact
              path="/"
              render={(props) => (
                <MovieList {...props} movies={movies.filter(isSearched(query))} callback={this.searchItems} />
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
