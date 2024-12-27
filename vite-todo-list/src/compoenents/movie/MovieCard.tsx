import './MovieCard.css';
import styled from "styled-components";
// import styled from "styled-components";

// 컴포넌트에 전달해야 할 데이터의 모양을 정의
// MovieCardProps라는 이름으로 타입을 정의
// movie라는 이름으로 객체를 전달받아야 함
// movie 객체는 title, poster_path, overview 프로퍼티를 가지고 있어야 함
interface MovieCardProps {
    movie: {
        title: string; // 영화 제목
        poster_path: string; // 포스터 이미지 경로
        overview: string; // 영화 줄거리
    };
}

//영화 정보를 받아서 카드 형태로 보여주는 컴포넌트
// 컴포넌트란? -> 재사용 가능한 조각
// React.FC<MovieCardProps>
// -> 이 컴포넌트가 MovieCardProps라는 것에 맞는 데이터를 받아야 한다고 알려주는 부분
const MovieCard = ({ movie } : MovieCardProps) => {
    const imageUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

    // 화면에 보이는 부분
    return (
        <Card>
            <CustomPoster src={imageUrl} alt={movie.title} />
            <Overlay>
                <MovieName>{movie.title}</MovieName>
                <MovieOverview>{movie.overview}</MovieOverview>
            </Overlay>
        </Card>
    );
};

export default MovieCard;

// Styled Components
const Card = styled.div`
    position: relative;
    width: 200px;
    margin: 10px;
    overflow: hidden;
    border-radius: 20px;
    cursor: pointer;

    &:hover img {
        transform: scale(1.1);
    }

    &:hover div {
        opacity: 1;
    }
`;

// 포스터 관련
interface CustomPosterProps {
    src: string; // 이미지 경로
    alt: string; // 이미지 대체 텍스트
}

// CustomPoster 컴포넌트
const CustomPoster: React.FC<CustomPosterProps> = ({ src, alt }) => {
    return <Poster src={src} alt={alt} />;
};

// Poster 스타일 정의
const Poster = styled.img`
    width: 100%;
    height: 100%;
    transition: transform 0.3s ease-in-out;
`;


const Overlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 10px;
    box-sizing: border-box;
    background-color: rgba(0, 0, 0, 0.8);
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    text-align: center;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
`;

const MovieName = styled.p`
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 5px;
`;

const MovieOverview = styled.p`
    font-size: 12px;
    line-height: 1.4;
    overflow: hidden;
    text-overflow: ellipsis;
`;

// 커스텀 버튼 예제
// interface CustomButtonProps {
//     label: '로그인' | '회원가입' | '다음' | '이전';
//     onClick: () => void;
// }
//
// const CustomButton = ({ label, onClick }: CustomButtonProps) => {
//     return (
//         <Button $color={'#000000'} onClick={onClick}>{label}</Button>
//     )
// }
//
// const Button = styled.button<{ $color: string }>`
//     color: wheat;
//     background-color: $color;
// `;
