import MovieCardList from "../../compoenents/movie/MovieCardList.tsx";
import useMovies from "../../hooks/useMovies.ts";
import {useLocation} from "react-router-dom";

const MovieCategory = () => {

    const location = useLocation();
    const { categoryName, title } = location.state as {categoryName: string, title: string};
      //
    //
    // const [movieList, setMoviesList] = useState<MovieResponse[] | undefined>(undefined);
    // const [error, setError] = useState(false);
    // const [loading, setLoading] = useState(false);
    //
    // useEffect(() => {
    //     const fetchData = async () => {
    //         setLoading(true);
    //         const data = await getMovies(1, categoryName);
    //         if (data) {
    //             setMoviesList(data.results);
    //         } else {
    //             console.error("Error");
    //             setError(true);
    //         }
    //         setLoading(false);
    //     }
    //     fetchData();
    // }, []); //[] -> 이게 의존성 배열, 의존성 배열이 비어있으면 컴포넌트가 마운트(첫렌더링)될 때 한번만 실행됨
    //         // [a, b ...] -> a, b가 변경될 때마다 실행됨
    //
    // if (loading) return <div>Loading...</div>;
    // if (error) return <div>Error!</div>;

    // 리엑트 쿼리 사용하는 방식
    const { data, isLoading, isError } = useMovies({ page: 1, category: categoryName });

    if (isLoading) return <div>Loading...</div>;

    if (isError) return <div>Error!</div>;

    // `data`에서 `results`를 추출
    const movieList = data?.results || []; // `data.results`가 없으면 빈 배열 사용

    return (
        <><h1>{title}</h1><MovieCardList movieResponse={movieList}/>
        </> //todo: category별로 API 호출
    );
};

export default MovieCategory;

