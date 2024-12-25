import './MovieCard.css';

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
        <div className="movie-card">
            <img src={imageUrl} alt={movie.title} />
            <div className="overlay">
                <p className="movie-name">{movie.title}</p>
                <p className="movie-overview">{movie.overview}</p>
            </div>
        </div>
    );
};

export default MovieCard;
