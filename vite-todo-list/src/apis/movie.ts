import {axiosInstance} from "./axios-instance.ts";
import {MoviesResponse} from "./dto/response/MoviesResponse.ts";


// 무비 리스트 받아오기
export const getMovies = async (page:number, category?: string): Promise<MoviesResponse | undefined> => {

    const url = category ? category : 'popular';

    try {
        const res = await axiosInstance.get(`/movie/${url}?language=ko-US&page=${page}`);
        console.log(res);
        return res.data;
    } catch (error) {
        console.error(error);
    }
}