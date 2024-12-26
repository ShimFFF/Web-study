import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaSearch } from "react-icons/fa";
import { MdMovieCreation } from "react-icons/md";

const Sidebar = () => {
    return (
        <SideNav>
            <NavItem to="/search">
                <FaSearch /> 찾기
            </NavItem>
            <NavItem to="/movies">
                <MdMovieCreation /> 영화
            </NavItem>
        </SideNav>
    );
};

export default Sidebar;

// Styled Components
const SideNav = styled.div`
  width: 200px;
  padding: 20px;
  background-color: #1a1a1a;
  color: white;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const NavItem = styled(Link)`
  display: flex;
  align-items: center;
  gap: 10px;
  color: white;
  text-decoration: none;
  font-size: 18px;
  padding: 10px;
  border-radius: 4px;
  transition: background 0.3s;

  &:hover {
    background: #333;
  }
`;
