import {axiosInstance} from "./axios-instance.ts";
import {MoviesResponse} from "./dto/response/MoviesResponse.ts";


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