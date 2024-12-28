import styled from "styled-components";

interface MoviePosterProps {
    posterPath: string;
    title: string;
}

const MoviePoster: React.FC<MoviePosterProps> = ({ posterPath, title }) => {
    const imageUrl = `https://image.tmdb.org/t/p/w500${posterPath}`;
    return <Poster src={imageUrl} alt={title} />;
};

export default MoviePoster;

// Styled Components
const Poster = styled.img`
    width: 300px;
    border-radius: 10px;
`;
