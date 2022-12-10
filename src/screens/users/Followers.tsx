import { useOutletContext } from "react-router-dom";

interface IFollwersContext {
  nameOfMyUser: string;
}

function Followers() {
  const { nameOfMyUser } = useOutletContext<IFollwersContext>();
  console.log(nameOfMyUser);
  return <h1>Here are {nameOfMyUser}'s followers</h1>;
}

export default Followers;
