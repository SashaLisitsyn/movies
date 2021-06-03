import Movie from './Movie';

import './Movies.css';

export default function Movies(props) {
  const { movies = [] } = props;

  return (
    <div className="movies">
      {movies.length ? (
        movies.map((movie) => <Movie key={movie.imdbID} {...movie} />)
      ) : (
        <h4></h4>
      )}
    </div>
  );
}
