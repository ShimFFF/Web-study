// src/apis/mock/categories.ts
export const MOVIECATEGORY : CategoryResponse[] = [
    {
        id: 1,
        title: '현재 상영중인',
        imageUrl: 'path-to-image-1.jpg',
    },
    {
        id: 2,
        title: '인기있는',
        imageUrl: 'path-to-image-2.jpg',
    },
    {
        id: 3,
        title: '높은 평가를 받은',
        imageUrl: 'path-to-image-3.jpg',
    },
    {
        id: 4,
        title: '개봉 예정중인',
        imageUrl: 'path-to-image-4.jpg',
    },
];

// interface CategoriesResponse {
//     results: CategoryResponse[]
// }

interface CategoryResponse {
    id: number;
    title: string;
    imageUrl: string;
}