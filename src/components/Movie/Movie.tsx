import { differenceInDays, fromUnixTime } from "date-fns";

import { MovieType } from "./movies";

interface Props {
    movie: MovieType,
    clickHandler: Function,
    buttonContent: String,
    backgroundColor: String,
    className: string
}

const Movie = (props: Props) => {
    const {
        movie,
        clickHandler,
        buttonContent,
        className
    } = props
    const blockStyle = { width: 400, height: 100, border: "1px solid black" }
    return <div
        id="movie"
        style={blockStyle}
        className={className}
    >
        <div id="movie-title">{movie.title}</div>
        <div>
            Release date:{" "}
            {differenceInDays(new Date(), fromUnixTime(movie.release_date))}{" "}
            days ago
        </div>
        <button
            id="add-button"
            onClick={() => clickHandler(movie)}
        >
            {buttonContent}
        </button>
    </div>
}
export default Movie;