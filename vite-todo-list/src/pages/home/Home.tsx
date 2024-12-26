import MovieCardList from "../../compoenents/movie/MovieCardList.tsx";
import styled from "styled-components";

const Home = () => {
    return (
        <HomePage>
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