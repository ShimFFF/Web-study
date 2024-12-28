import MovieCardList from "../../compoenents/movie/MovieCardList.tsx";
import {getMovies} from "../../apis/movie.ts";
import {MoviesResponse} from "../../apis/dto/response/MoviesResponse.ts";
import {useQuery} from "@tanstack/react-query";

const Home = () => {
    // 리엑트 쿼리 사용 안하는 방식
    // const [movieList, setMoviesList] = useState<MovieResponse[] | undefined>(undefined);
    // const [error, setError] = useState(false);
    // const [loading, setLoading] = useState(false);
    // console.log(movieList);
    //
    // useEffect(() => {
    //     const fetchData = async () => {
    //         setLoading(true);
    //         try {
    //             const data = await getMovies(1);
    //             console.log(data);
    //             setMoviesList(data?.results);
    //         } catch (error) {
    //             console.error(error);
    //             setError(true);
    //         } finally {
    //             setLoading(false);
    //         }
    //     }
    //     fetchData();
    // }, []); //[] -> 이게 의존성 배열, 의존성 배열이 비어있으면 컴포넌트가 마운트(첫렌더링)될 때 한번만 실행됨
    //         // [a, b ...] -> a, b가 변경될 때마다 실행됨
    //
    // if (loading) return <div>Loading...</div>;
    // if (error) return <div>Error!</div>;

    // 리엑트 쿼리 사용하는 방식
    // MoviesResponse 타입을 정의
    const { data, isLoading, isError } = useQuery<MoviesResponse>({
        queryKey: ["movies", { page: 1 }], // 캐싱 키
        queryFn: () => getMovies(1), // 데이터를 가져오는 비동기 함수
        staleTime: 1000 * 60 * 10, // 캐시 유효 시간
    });

    if (isLoading) return <div>Loading...</div>;

    if (isError) return <div>Error!</div>;

    // `data`에서 `results`를 추출
    const movieList = data?.results || []; // `data.results`가 없으면 빈 배열 사용

    return (
        <MovieCardList movieResponse={movieList!} />
    );
};

export default Home;
