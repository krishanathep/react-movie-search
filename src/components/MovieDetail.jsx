import React, { Component } from "react";
import { Link } from 'react-router-dom'
import Moment from 'react-moment'

export class MovieDetail extends Component {
  constructor() {
    super();

    this.state = {
      detail: [],
    };
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=54cd1af69dd6dc43fcfdfc3a29bef89b&language=en-US&page=1`
    )
      .then((res) => res.json())
      .then((res) => this.setState({ detail: res }));
  }

  render() {
    const movie = this.state;
    return (
      <div className="Movie Detail container">
        <div className="card mt-5">
          <div className="card-body">
            <div className="row">
              <div className="col-md-6" align="center">
                <img
                  className="img-thumbnail mt-3 mb-3"
                  src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2${movie.detail.poster_path}`}
                  alt=""
                />
              </div>
              <div className="col-md-6">
                <div className="container">
                  <h3 className="card-title mt-3">
                    {movie.detail.title}
                  </h3>
                  <p className="card-text text-muted"><i class="far fa-calendar-alt"></i>&nbsp; <Moment fromNow>{movie.detail.release_date}</Moment></p>
                  <span class="badge badge-info mt-3"><i class="fas fa-heart"></i> {movie.detail.popularity}</span>
                  <span class="badge badge-info mt-3 ml-2 mr-2"><i class="fas fa-chart-pie"></i> {movie.detail.vote_count}</span>
                  <span class="badge badge-info mt-3"><i class="fas fa-clock"></i> {movie.detail.runtime}</span>
                  <span class="badge badge-info mt-3 ml-2 mr-2"><i class="fas fa-globe"></i> {movie.detail.original_language}</span>
                  <p className="card-text mt-3">{movie.detail.overview}</p>
                    <Link to='/' className='btn btn-primary btn-sm mt-5 mr-1'><i class="fas fa-arrow-circle-left"></i>&nbsp; GO TO HOME</Link>
                    <a href={movie.detail.homepage} className='btn btn-success btn-sm mt-5' target="blank">GO TO LINK&nbsp; <i class="fas fa-arrow-circle-right"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MovieDetail;
