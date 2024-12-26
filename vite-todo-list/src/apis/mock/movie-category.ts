// src/apis/mock/categories.ts
export const MOVIECATEGORY : CategoryResponse[] = [
    {
        id: 1,
        title: '현재 상영중인',
        name: 'now_playing'
    },
    {
        id: 2,
        title: '인기있는',
        name: 'popular'
    },
    {
        id: 3,
        title: '높은 평가를 받은',
        name: 'top_rated'
    },
    {
        id: 4,
        title: '개봉 예정중인',
        name: 'upcoming'
    },
];

// interface CategoriesResponse {
//     results: CategoryResponse[]
// }

interface CategoryResponse {
    id: number;
    title: string;
    name: string;
}