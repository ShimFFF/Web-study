// import {useEffect, useState} from "react";
// import {MovieResponse} from "../apis/dto/response/MoviesResponse.ts";
// import {getMovies} from "../apis/movie.ts";
//
//
// //todo: 텐스택 쿼리 (구 리엑트쿼리)로 커스텀 훅 만들어
// export const useCustomFetch = <T>(f: () => Promise<T | undefined>) => {
//     const [data, setData] = useState<T | undefined>(undefined);
//     const [error, setError] = useState(false);
//     const [loading, setLoading] = useState(false);
//
//     useEffect(() => {
//         const fetchData = async () => {
//             setLoading(true);
//             const data = await f();
//             if (data) {
//                 setData(data);
//             } else {
//                 console.error("Error");
//                 setError(true);
//             }
//             setLoading(false);
//         }
//         fetchData();
//     }, []); //[] -> 이게 의존성 배열, 의존성 배열이 비어있으면 컴포넌트가 마운트(첫렌더링)될 때 한번만 실행됨
//             // [a, b ...] -> a, b가 변경될 때마다 실행됨
//
//     return {data, error, loading};
// }