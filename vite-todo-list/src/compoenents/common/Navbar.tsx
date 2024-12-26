import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <Nav>
            <Logo to="/">YONGCHA</Logo>
            <Buttons>
                <Button to="/login">로그인</Button>
                <SignUpButton to="/signup">회원가입</SignUpButton>
            </Buttons>
        </Nav>
    );
};

export default Navbar;

// Styled Components
const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #1a1a1a;
  color: white;
`;

const Logo = styled(Link)`
  font-size: 24px;
  font-weight: bold;
  text-decoration: none;
  color: #ff4081;
`;

const Buttons = styled.div`
  display: flex;
  gap: 10px;
`;

const Button = styled(Link)`
  padding: 8px 16px;
  color: white;
  text-decoration: none;
  background: #333;
  border-radius: 4px;
  transition: background 0.3s;

  &:hover {
    background: #555;
  }
`;

const SignUpButton = styled(Button)`
  background: #ff4081;

  &:hover {
    background: #ff5c93;
  }
`;
