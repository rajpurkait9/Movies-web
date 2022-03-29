import React, { useState } from "react";
import { paginate } from "../utils/paginate";
import Pagination from "./common/Pagination";
// import Like from "./common/Like";
// import Like from "./common/Like";
import { getMovies } from "./services/fakeMovieService";

const Movies = () => {
  const handleDelete = movie => {
    const newMovies = movies.filter(m => m._id !== movie._id);
    setMovies(newMovies);
  };
  const pageSize = 4;
  const [currentPage, setCurrentPage] = useState(1);
  const data = getMovies();
  const [movies, setMovies] = useState(data);

  const [like, setLike] = useState([]);

  const handleLike = index => {
    const updatedLike = [...like];
    updatedLike[index] = !updatedLike[index];
    setLike(updatedLike);
  };

  const handlePageChange = page => {
    setCurrentPage(page);
  };
  // console.log(movies);
  const allmovies = paginate(movies, currentPage, pageSize);
  console.log(allmovies);
  return (
    <>
      {movies.length === 0 ? (
        <p>there are no movies in the dataBase</p>
      ) : (
        <p>there are {movies.length} in the array</p>
      )}
      <table className='table'>
        <thead>
          <tr>
            <th>Title</th>
            <th>Genre</th>
            <th>Stock</th>
            <th>Rate</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {allmovies.map((movie, index) => {
            return (
              <tr key={movie._id}>
                <td>{movie.title}</td>
                <td>{movie.genre.name}</td>
                <td> {movie.numberInStock}</td>
                <td>{movie.dailyRentalRate}</td>
                <td>
                  <i
                    className={like[index] ? "fa fa-heart" : "fa fa-heart-o"}
                    aria-hidden='true'
                    style={{ cursor: "pointer" }}
                    onClick={() => handleLike(index)}
                  />
                  {/* <Like liked={movie.liked} onClick={() => handleLike(index)} /> */}
                </td>
                <td>
                  <button
                    className='btn btn-danger m-2'
                    onClick={() => handleDelete(movie)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <Pagination
        itemCount={movies.length}
        pageSize={pageSize}
        currentPage={currentPage}
        onPageChnage={handlePageChange}
      />
    </>
  );
};

export default Movies;
