import { createSlice } from '@reduxjs/toolkit'
import { MovieType, movies } from '../../components/Movie/movies'

type StateType = {
    leftMovieList: MovieType[],
    rightMovieList: MovieType[],
    search: string
}
const initialState: StateType = {
    leftMovieList: movies,
    rightMovieList: [],
    search: ""
}

export const movieSlice = createSlice({
    name: 'movie',
    initialState,
    reducers: {
        addMovie: (state, action) => {
            state.rightMovieList.push(action.payload.movie);
            const newLeftList = state.leftMovieList.filter((item) => item.id !== action.payload.movie.id);
            state.leftMovieList = newLeftList;
        },
        removeMovie: (state, action) => {
            state.leftMovieList.push(action.payload.movie);
            const newRightList = state.rightMovieList.filter((item) => item.id !== action.payload.movie.id);
            state.rightMovieList = newRightList
        },
        setSearch: (state, action) => {
            state.search = action.payload.search
        },
    }
})

export const { addMovie, removeMovie, setSearch } = movieSlice.actions