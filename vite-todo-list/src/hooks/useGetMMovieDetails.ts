import {useQuery} from "@tanstack/react-query";
import {getMovieDetails} from "../apis/movie.ts";
import {MovieDetailResponse} from "../apis/dto/response/MovieDetailResponse.ts";

interface UseMovieDetailsOptions {
    movieId: string;
}

// 리엑트 쿼리 사용하는 방식
// MoviesResponse 타입을 정의
const useGetMovieDetails = ({ movieId }: UseMovieDetailsOptions) => {
    return useQuery<MovieDetailResponse>({
        queryKey: ["movies-details", { movieId }], // 캐싱 키
        queryFn: () => getMovieDetails(movieId), // 데이터를 가져오는 비동기 함수
        staleTime: 1000 * 60 * 10, // 캐시 유효 시간
    });
};

export default useGetMovieDetails;
