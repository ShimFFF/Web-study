import styled from "styled-components";
import MovieCastItem from "./MovieCastItem";
import {CastMember} from "../../apis/dto/response/MovieCreditResponse.ts";

interface MovieCastListProps {
    cast: CastMember[];
}

const MovieCastList: React.FC<MovieCastListProps> = ({ cast }) => {
    return (
        <CastContainer>
            <SectionTitle>감독/출연</SectionTitle>
            <CastList>
                {cast?.slice(0, 12).map((castMember) => (
                    <MovieCastItem
                        key={castMember.id}
                        name={castMember.name}
                        character={castMember.character}
                        profilePath={castMember.profile_path ?? ""}
                    />
                ))}
            </CastList>
        </CastContainer>
    );
};

export default MovieCastList;

// Styled Components
const CastContainer = styled.div`
    margin-top: 20px;
`;

const SectionTitle = styled.h2`
    font-size: 24px;
    margin-bottom: 20px;
`;

const CastList = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
`;
