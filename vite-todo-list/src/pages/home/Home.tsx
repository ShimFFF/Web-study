import React from 'react';
import MovieCardList from "../../compoenents/movie/MovieCardList.tsx";

const Home: React.FC = () => {
    return (
        <div className="Home">
            <h1>영화 홈</h1>
            <MovieCardList />
        </div>
    );
};

export default Home;
