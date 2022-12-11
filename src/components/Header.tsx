import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  const onCoinsClick = () => {
    navigate("/coins");
  };
  return (
    <header>
      <ul />
      <li>
        <Link to={"/"}>Home</Link>
      </li>
      <li>
        <button onClick={onCoinsClick}> Coins</button>
      </li>
    </header>
  );
}
export default Header;
