import './App.css'
import Home from "./pages/home/Home.tsx";
import {Link, Route, BrowserRouter as Router, Routes} from "react-router-dom";
import About from "./pages/about/About.tsx";

// App component
// 가정 처음 진입점 파일이 App.tsx
// 이 위에서 모든 페이지와 컴포넌트들이 렌더링 됨
// App component는 루트 컴포넌트
// 그래서 라우트 세팅 등, 여러 프로바이더들을 세팅함

function App() {

    return (
        <Router>
            <div className="App">
                <nav>
                    {/*Link 컴포넌트를 사용하여 페이지 이동*/}
                    <Link to="/">Home</Link> | <Link to="/about">About</Link>
                </nav>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App
