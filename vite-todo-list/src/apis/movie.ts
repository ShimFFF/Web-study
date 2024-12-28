import {axiosInstance} from "./axios-instance.ts";
import {MoviesResponse} from "./dto/response/MoviesResponse.ts";
import {MovieDetailResponse} from "./dto/response/MovieDetailResponse.ts";
import {MovieCreditsResponse} from "./dto/response/MovieCreditResponse.ts";


// 무비 리스트 받아오기
export const getMovies = async (
    page: number,
    category: string = "popular" // 기본값 popular 설정
): Promise<MoviesResponse> => {
    const url = `/movie/${category}?language=ko-US&page=${page}`;

    try {
        const { data } = await axiosInstance.get<MoviesResponse>(url); //  Axios 요청의 반환값 타입을 명확히 지정
        console.log(data);
        return data;
    } catch (error) {
        console.error("Failed to fetch movies:", error);
        throw new Error("Failed to fetch movies"); // 에러 발생, 에러 핸들링은 컴포넌트에서
    }
};

// 무비 디테일 받아오기
export const getMovieDetails = async (
    id: string
):Promise<MovieDetailResponse> => {
    const url = `/movie/${id}?language=ko-US`;

    try {
        const { data } = await axiosInstance.get<MovieDetailResponse>(url);
        console.log(data);
        return data;
    } catch ( error ) {
        console.error("Failed to fetch movie detail:", error);
        throw new Error("Failed to fetch movie detail"); // 에러 발생, 에러 핸들링은 컴포넌트에서
    }
}

// 무비 크레딧 받아오기
export const getMovieCredits = async (
    id: string
):Promise<MovieCreditsResponse> => {
    const url = `/movie/${id}/credits?language=ko-US`;

    try {
        const { data } = await axiosInstance.get<MovieCreditsResponse>(url);
        console.log(data);
        return data;
    } catch ( error ) {
        console.error("Failed to fetch movie credits:", error);
        throw new Error("Failed to fetch movie credits"); // 에러 발생, 에러 핸들링은 컴포넌트에서
    }
}