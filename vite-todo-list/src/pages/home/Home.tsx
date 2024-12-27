import MovieCardList from "../../compoenents/movie/MovieCardList.tsx";
import {useEffect, useState} from "react";
import {getMovies} from "../../apis/movie.ts";
import {MovieResponse} from "../../apis/dto/response/MoviesResponse.ts";

const Home = () => {
    const [movieList, setMoviesList] = useState<MovieResponse[] | undefined>(undefined);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    console.log(movieList);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const data = await getMovies(1);
                console.log(data);
                setMoviesList(data?.results);
            } catch (error) {
                console.error(error);
                setError(true);
            } finally {
                setLoading(false);
            }
        }
        fetchData();
    }, []); //[] -> 이게 의존성 배열, 의존성 배열이 비어있으면 컴포넌트가 마운트(첫렌더링)될 때 한번만 실행됨
            // [a, b ...] -> a, b가 변경될 때마다 실행됨

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error!</div>;

    return (
        <MovieCardList movieResponse={movieList!} />
    );
};

export default Home;
