import React from 'react';
import styled from 'styled-components';

interface CategoryCardProps {
    title: string;
    imageUrl: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ title }) => {
    return (
        <Card>
            {/*<Image src={imageUrl} alt={title} />*/}
            <Title>{title}</Title>
        </Card>
    );
};

export default CategoryCard;

// Styled Components
const Card = styled.div`
  position: relative;
  width: 300px;
  height: 120px;
  overflow: hidden;
  border-radius: 10px;
  cursor: pointer;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    background-color: #f5f5f5;

  &:hover {
    transform: scale(1.05);
    transition: transform 0.3s ease;
  }
`;

// const Image = styled.img`
//   width: 100%;
//   height: 100%;
//   object-fit: cover;
// `;

const Title = styled.div`
    position: absolute;
    bottom: 10px;
    left: 10px;
    color: white;
    font-weight: bold;
    font-size: 16px;
    background-color: rgba(0, 0, 0, 0.6);
    padding: 5px 10px;
    border-radius: 5px;
`;
