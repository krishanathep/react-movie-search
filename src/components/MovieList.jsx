import React, { Component } from "react";

export class MovieList extends Component {
  render() {
    return (
      <div className="Movie List container">
        <div className="row">
            {this.props.movies.map(movie => (
          <div className="col-md-3 col-6" key={movie.id}>
            <img
              className='img-thumbnail mt-5'
              src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2${movie.poster_path}`}
              alt=""
            />
          </div>
          ))}
        </div>
      </div>
    );
  }
}

export default MovieList;
