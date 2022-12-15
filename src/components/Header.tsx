import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Conatainer = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  width: 100vw;
  left: 160px;
  top: 20px;
  box-sizing: border-box;
  position: fixed;
`;

const MainBtn = styled.a`
  background-color: black;
  font-weight: bold;
  display: flex;
  justify-content: center;
  padding: 5px 10px;
  border-radius: 15px;
  
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
