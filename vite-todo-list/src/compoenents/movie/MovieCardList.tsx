import React from 'react';
import MovieCard from './MovieCard';
import './MovieCardList.css';
import {MOVIES} from "../../apis/mock/movies.ts";

const MovieCardList: React.FC = () => {
    return (
        <div className="movie-list-container">
            <div className="movie-list">
                {MOVIES.results.map((movie) => (
                    <MovieCard key={movie.id} movie={movie}/>
                ))}
            </div>
        </div>
    );
};

export default MovieCardList;
