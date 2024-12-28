import {useQuery} from "@tanstack/react-query";
import {getMovieCredits} from "../apis/movie.ts";
import {MovieCreditsResponse} from "../apis/dto/response/MovieCreditResponse.ts";

interface UseMovieCreditsOptions {
    movieId: string;
}

// 리엑트 쿼리 사용하는 방식
// MoviesResponse 타입을 정의
const useGetMovieCredits = ({ movieId }: UseMovieCreditsOptions) => {
    return useQuery<MovieCreditsResponse>({
        queryKey: ["movies-credits", { movieId }], // 캐싱 키
        queryFn: () => getMovieCredits(movieId), // 데이터를 가져오는 비동기 함수
        staleTime: 1000 * 60 * 10, // 캐시 유효 시간
    });
};

export default useGetMovieCredits;
