import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Conatainer = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  box-sizing: border-box;
  position: fixed;
`;

const MainBtn = styled.a`
  background-color: ${(props) => props.theme.accentColor};
  font-weight: bold;
  display: flex;
  justify-content: center;
  padding: 5px 10px;
  border-radius: 15px;
  z-index: 0;
`;

function Header() {
  return (
    <Conatainer>
      <MainBtn>
        <Link to={"/coins"}>Home</Link>
      </MainBtn>
    </Conatainer>
  );
}
export default Header;
