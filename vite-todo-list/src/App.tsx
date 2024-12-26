import './App.css'
import {Route, BrowserRouter as Router, Routes} from "react-router-dom";
import RootLayout from "./layout/RootLayout.tsx";
import Movie from "./pages/movie/Movie.tsx";
import Search from "./pages/search/Search.tsx";
import Login from "./pages/login/Login.tsx";
import Home from "./pages/home/Home.tsx";
import SignUp from "./pages/login/SignUp.tsx";

// App component
// 가정 처음 진입점 파일이 App.tsx
// 이 위에서 모든 페이지와 컴포넌트들이 렌더링 됨
// App component는 루트 컴포넌트
// 그래서 라우트 세팅 등, 여러 프로바이더들을 세팅함

function App() {

    return (
        <Router>
            <Routes>
                {/* RootLayout을 기준으로 자식 페이지 설정 */}
                <Route path="/" element={<RootLayout />}>
                    <Route index element={<Home />} />
                    <Route path="movies" element={<Movie />} />
                    <Route path="search" element={<Search />} />
                    <Route path="login" element={<Login />} />
                    <Route path="signup" element={<SignUp />} />
                </Route>
            </Routes>
        </Router>
    );
}

export default App
