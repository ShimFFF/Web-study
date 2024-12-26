import styled from 'styled-components';
import { Outlet } from 'react-router-dom';
import Navbar from "../compoenents/common/Navbar.tsx";
import Sidebar from "../compoenents/common/Sidebar.tsx";

const RootLayout = () => {
    return (
        <Layout>
            <Navbar />
            <Main>
                <Sidebar />
                <Content>
                    <Outlet />
                </Content>
            </Main>
        </Layout>
    );
};

export default RootLayout;

// Styled Components
const Layout = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const Main = styled.div`
  display: flex;
  flex: 1;
  overflow: hidden;
`;

const Content = styled.div`
  flex: 1;
  padding: 20px;
  overflow-y: auto;
  background-color: #121212;
`;
