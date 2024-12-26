import MovieCard from './MovieCard';
import './MovieCardList.css';
import {MOVIES} from "../../apis/mock/movies.ts";
import styled from "styled-components";

const MovieCardList = () => {
    return (
        <CardList>
            {MOVIES.results.map((movie) => (
                <MovieCard key={movie.id} movie={movie}/>
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