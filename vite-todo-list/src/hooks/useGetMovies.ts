import {MoviesResponse} from "../apis/dto/response/MoviesResponse.ts";
import {useQuery} from "@tanstack/react-query";
import {getMovies} from "../apis/movie.ts";

interface UseMoviesOptions {
    page: number;
    category?: string; // 카테고리 값은 선택적
}

// 리엑트 쿼리 사용하는 방식
// MoviesResponse 타입을 정의
const useGetMovies = ({ page, category }: UseMoviesOptions) => {
    return useQuery<MoviesResponse>({
        queryKey: ["movies", { page, category }], // 캐싱 키
        queryFn: () => getMovies(page, category), // 데이터를 가져오는 비동기 함수
        staleTime: 1000 * 60 * 10, // 캐시 유효 시간
    });
};

export default useGetMovies;
