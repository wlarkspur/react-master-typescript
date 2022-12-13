import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Header() {
  return (
    <header>
      <Link to={"/coins"}>Home</Link>
    </header>
  );
}
export default Header;
