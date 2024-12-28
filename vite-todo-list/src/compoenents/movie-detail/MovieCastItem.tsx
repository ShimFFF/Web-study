import styled from "styled-components";

interface MovieCastItemProps {
    name: string;
    character: string;
    profilePath: string;
}

const MovieCastItem: React.FC<MovieCastItemProps> = ({ name, character, profilePath }) => {
    const imageUrl = profilePath
        ? `https://image.tmdb.org/t/p/w500${profilePath}`
        : "https://via.placeholder.com/100";

    return (
        <CastItem>
            <CastImage src={imageUrl} alt={name} />
            <CastName>{name}</CastName>
            <CastRole>{character}</CastRole>
        </CastItem>
    );
};

export default MovieCastItem;

// Styled Components
const CastItem = styled.div`
    width: 120px;
    text-align: center;
`;

const CastImage = styled.img`
    width: 100px;
    height: 100px;
    border-radius: 50%;
    object-fit: cover;
    margin-bottom: 10px;
`;

const CastName = styled.div`
    font-size: 14px;
    font-weight: bold;
`;

const CastRole = styled.div`
    font-size: 12px;
    color: #aaa;
`;
