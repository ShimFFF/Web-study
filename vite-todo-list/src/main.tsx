import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

//이 아이를 통해서 root element를 찾아서 App component를 렌더링 함
// 리엑트가 싱글 페이지인데, 페이지 하나로 컴포넌트만 리렌더링 함
// 그래서 페이지가 바뀌어도 전체 페이지를 리렌더링 하지 않음
// 단점 초기 실행 시에 모든 요소를 다 불러와야 함 -> 초기 로딩이 느림
// 이를 보완하기 위해 코드 스플릿팅을 사용함, 서버 사이드 렌더링 사용
// 코드 스플릿팅: 필요한 컴포넌트만 불러와서 렌더링
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
