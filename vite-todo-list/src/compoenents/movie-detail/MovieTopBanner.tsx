import MoviePoster from "./MoviePoster.tsx";
import MovieInfo from "./MovieInfo.tsx";
import styled from "styled-components";

interface MovieTopBarProps {
    posterPath: string;
    title: string;
    voteAverage: number;
    releaseDate: string;
    runtime: number;
}

const MovieTopBanner: React.FC<MovieTopBarProps> = ({ title, voteAverage, releaseDate, runtime, posterPath }) => {
    return (
        <BannerContainer>
            <MoviePoster posterPath={posterPath}/>
            <MovieInfoContainer>
                <MovieInfo
                    title={title}
                    voteAverage={voteAverage}
                    releaseDate={releaseDate}
                    runtime={runtime}
                />
            </MovieInfoContainer>
        </BannerContainer>
    );
};

export default MovieTopBanner;

// Styled Components
const BannerContainer = styled.div`
    position: relative;
    width: 100%;
    max-height: 30vh;
    display: flex;
    align-items: flex-start;
`;

const MovieInfoContainer = styled.div`
    position: absolute;
    top: 10%;
    left: 5%;
    color: white;
    z-index: 2; /* Ensure MovieInfo is above the Poster */
`;

