import MovieCardList from "../../compoenents/movie/MovieCardList.tsx";
import styled from "styled-components";

const Home = () => {
    return (
        <HomePage>
            <h1>영화 홈</h1>
            <MovieCardList />
        </HomePage>
    );
};

export default Home;

// styled-components
const HomePage = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`;