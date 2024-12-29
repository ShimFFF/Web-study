import useGetMovieDetails from "../../hooks/useGetMMovieDetails.ts";
import MovieCastList from "./MovieCastList.tsx";
import {useParams} from "react-router-dom";
import styled from "styled-components";
import useGetMovieCredits from "../../hooks/useGetMovieCredits.ts";
import MovieTopBanner from "./MovieTopBanner.tsx";

const MovieDetails = () => {
    const { movieId } = useParams<{ movieId: string }>();

    // todo: 영화 상세, 영화 크레딧 API 호출 각각 다른 컴포넌트에서 호출하도록 변경

    // 영화 상세 정보 API 호출
    const { data: movieData, isLoading: movieLoading, isError: movieError } = useGetMovieDetails({
        movieId: movieId!,
    });

    // 영화 크레딧 API 호출
    const { data: creditsData, isLoading: creditsLoading, isError: creditsError } = useGetMovieCredits({
        movieId: movieId!,
    });

    if (movieLoading || creditsLoading) return <div>Loading...</div>;
    if (movieError || creditsError) return <div>Error loading movie details or credits!</div>;

    // `data`
    const movie = movieData || null;
    const credits = creditsData || null;
    console.log(creditsData)

    // movie가 null인 경우 기본값 처리
    if (!movie) {
        return <div>Error: Movie details not available.</div>;
    }

    // credits.cast를 빈 배열로 처리
    const cast = credits?.cast || [];

    return (
        <Container>
            <MovieTopBanner
                posterPath={movie.poster_path}
                title={movie.title}
                voteAverage={movie.vote_average}
                releaseDate={movie.release_date}
                runtime={movie.runtime}></MovieTopBanner>
            <Details>
                <MovieCastList cast={cast} />
            </Details>
        </Container>
    );
};

export default MovieDetails;

// Styled Components
const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px;
    color: white;
    background-color: #121212;
`;

const Details = styled.div`
    flex: 1;
    margin-left: 20px;
`;