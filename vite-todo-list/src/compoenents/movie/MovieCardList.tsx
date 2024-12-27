import MovieCard from './MovieCard';
import './MovieCardList.css';
import styled from "styled-components";
import {MovieResponse} from "../../apis/dto/response/MoviesResponse.ts";

const MovieCardList = ({movieResponse}: CustomMovieCardListProps) => {
    return (
        <CardList>
            {movieResponse.map((movie) => (
                <MovieCard key={movie.id} {...movie}/>
            ))}
        </CardList>
    );
};

export default MovieCardList;

// Styled Components
const CardList = styled.div`
    display: flex;
    flex-wrap: wrap;
    /*justify-content: space-between;*/
    justify-content: center;
    padding: 20px;
    gap: 20px;
    box-sizing: border-box;    
`;


interface CustomMovieCardListProps {
    movieResponse: MovieResponse[];
}

