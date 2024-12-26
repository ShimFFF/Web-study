import './App.css'
import {GlobalStyle, router} from "./global";
import {RouterProvider} from "react-router-dom";

// App component
// 가정 처음 진입점 파일이 App.tsx
// 이 위에서 모든 페이지와 컴포넌트들이 렌더링 됨
// App component는 루트 컴포넌트
// 그래서 라우트 세팅 등, 여러 프로바이더들을 세팅함

function App() {

    return (
        <>
            <GlobalStyle />
            <RouterProvider router={router} />
        </>
    );
}

export default App
