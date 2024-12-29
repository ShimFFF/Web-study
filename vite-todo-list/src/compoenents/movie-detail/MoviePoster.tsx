import styled from "styled-components";

interface MoviePosterProps {
    posterPath: string;
}

const MoviePoster: React.FC<MoviePosterProps> = ({ posterPath }) => {
    const imageUrl = `https://image.tmdb.org/t/p/w500${posterPath}`;
    return <Container>
        <Poster src={imageUrl} />
        <GradientOverlay />
    </Container>
        ;
};

export default MoviePoster;

// Styled Components
const Container = styled.div`
    position: relative;
    width: 100%;
    max-height: 30vh;
`;

const Poster = styled.img`
    width: 100%;
    height: 30vh;
    object-fit: cover;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const GradientOverlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 30vh;
    background-image: linear-gradient(90deg, rgba(0, 0, 0, 0.9) 5%, rgba(0, 0, 0, 0.9) 10%, rgba(0, 0, 0, 0.8) 30%, rgba(0, 0, 0, 0.7) 40%, rgba(0, 0, 0, 0.3) 70%, rgba(0, 0, 0, 0) 100%);
    border-radius: 10px;
`;
