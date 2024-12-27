export interface MoviesResponse {
    dates: { maximum: string, minimum: string },
    page: number,
    results: MovieResponse[],
    total_pages: number,
    total_results: number
}

export interface MovieResponse {
    adult: boolean;                // 성인 콘텐츠 여부
    backdrop_path: string;         // 영화 배경 이미지 경로
    genre_ids: number[];           // 장르 ID 배열
    id: number;                    // 영화 고유 ID
    original_language: string;     // 영화의 원래 언어
    original_title: string;        // 영화의 원래 제목
    overview: string;              // 영화 설명
    popularity: number;            // 영화 인기 점수
    poster_path: string;           // 영화 포스터 이미지 경로
    release_date: string;          // 영화 개봉일
    title: string;                 // 영화 제목
    video: boolean;                // 비디오 여부
    vote_average: number;          // 평균 평점
    vote_count: number;            // 평점 수
}