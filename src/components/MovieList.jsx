import React, { Component } from "react";
import { Link } from "react-router-dom";

export class MovieList extends Component {
  state = {
    value: "",
  };

  timeout = null;

  doSearch = (event) => {
    this.setState({ value: event.target.value });
    clearTimeout(this.timeout);

    this.timeout = setTimeout(() => {
      this.props.callback(this.state.value);
    }, 500);
  };

  render() {
    return (
      <div className="Movie List container">
        <form>
          <div class="form-row">
            <div className="col-md-8"></div>
            <div class="col-md-4">
              <div class="input-group mt-5">
                <input
                  onChange={this.doSearch}
                  value={this.props.value}
                  type="text"
                  class="form-control"
                  placeholder="Search Movie"
                />
                <div class="input-group-append">
                  <span class="input-group-text">
                    <i class="fa fa-search"></i>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </form>
        <div className="row">
          {this.props.movies.map((movie) => (
            <div className="col-md-3 col-6" key={movie.id}>
              <Link to={{ pathname: `/moviedetail/${movie.id}` }}>
                <img
                  className="img-thumbnail mt-4"
                  src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2${movie.poster_path}`}
                  alt={movie.original_title}
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default MovieList;
