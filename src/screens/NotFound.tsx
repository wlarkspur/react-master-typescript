import { useRouteError } from "react-router-dom";

function NotFound() {
  const error = useRouteError();

  return (
    <div>
      <h1>404 Not found.😥 Don't Give up!</h1>
    </div>
  );
}

export default NotFound;
