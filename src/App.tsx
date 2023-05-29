import { addMovie, removeMovie, setSearch } from "./features/reducer/movies";
import { MovieType } from "./components/Movie/movies";
import Movie from "./components/Movie/Movie";
import "./App.css";
import { useAppDispatch, useAppSelector } from './hooks';

function App() {
  const dispatch = useAppDispatch()
  const { leftMovieList, rightMovieList } = useAppSelector(state => state.movies)
  const search = useAppSelector(state => state.movies.search)

  const onAddClick = (movie: MovieType) => {
    dispatch(addMovie({ movie }))
  };

  const onRemoveClick = (movie: MovieType) => {
    dispatch(removeMovie({ movie }))
  };

  return (
    <div className="App">
      <div id="search-movie-container">
        <input
          placeholder="Type for searching..."
          value={search}
          onChange={(e) => dispatch(setSearch({ search: e.target.value }))}
        />
        <hr />
      </div>
      <div id="movie-container">
        <div id="left-movie-container">
          {
            leftMovieList.map((movie: MovieType) => {
              if (!movie.title.toLowerCase().includes(search.toLowerCase())) {
                return false;
              }
              return (<Movie
                key={movie.id}
                movie={movie}
                clickHandler={onAddClick}
                buttonContent={"Add"}
                backgroundColor={"#64c864"}
                className="add"
              />);
            })
          }
        </div>
        <div id="right-movie-container">
          {
            rightMovieList.map((movie: MovieType) => {
              if (!movie.title.toLowerCase().includes(search.toLowerCase())) {
                return false;
              }
              return (<Movie
                key={movie.id}
                movie={movie}
                clickHandler={onRemoveClick}
                buttonContent={"Remove"}
                backgroundColor={"#c86464"}
                className="remove"
              />);
            })
          }
        </div>
      </div>
    </div>
  );
}

export default App;
