// src/apis/mock/categories.ts
export const MOVIECATEGORY : CategoryResponse[] = [
    {
        id: 1,
        title: '현재 상영중인',
        url: 'now-playing',
        name: 'now_playing'
    },
    {
        id: 2,
        title: '인기있는',
        url: 'popular',
        name: 'popular'
    },
    {
        id: 3,
        title: '높은 평가를 받은',
        url: 'top-rated',
        name: 'top_rated'
    },
    {
        id: 4,
        title: '개봉 예정중인',
        url: 'upcoming',
        name: 'upcoming'
    },
];

// interface CategoriesResponse {
//     results: CategoryResponse[]
// }

interface CategoryResponse {
    id: number;
    title: string;
    url: string;
    name: string;
}