import styled from "styled-components";

interface MovieInfoProps {
    title: string;
    voteAverage: number;
    releaseDate: string;
    runtime: number;
}

const MovieInfo: React.FC<MovieInfoProps> = ({ title, voteAverage, releaseDate, runtime }) => {
    return (
        <InfoContainer>
            <Title>{title}</Title>
            <SubInfo>
                <span>평균 {voteAverage}</span>
                <span>{releaseDate}</span>
                <span>{runtime}분</span>
            </SubInfo>
        </InfoContainer>
    );
};

export default MovieInfo;

// Styled Components
const InfoContainer = styled.div`
    margin-bottom: 20px;
`;

const Title = styled.h1`
    font-size: 32px;
    margin-bottom: 10px;
`;

const SubInfo = styled.div`
    font-size: 16px;
    color: #aaa;
    span {
        margin-right: 10px;
    }
`;
