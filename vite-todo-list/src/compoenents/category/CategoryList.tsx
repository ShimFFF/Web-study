import styled from 'styled-components';
import CategoryCard from "./CategoryCard.tsx";
import {MOVIECATEGORY} from "../../apis/mock/movie-category.ts";

const CategoryList = () => {
    return (
        <Container>
            <Title>카테고리</Title>
            <CategoryListContainer>
                {MOVIECATEGORY.map((category) => (
                    <CategoryCard
                        key={category.id}
                        title={category.title}
                        imageUrl={category.imageUrl}
                    />
                ))}
            </CategoryListContainer>
        </Container>
    );
};

export default CategoryList;

// Styled Components
const Container = styled.div`
  padding: 20px;
  color: #fff;
`;

const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
    color: white;
`;

const CategoryListContainer = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
`;
