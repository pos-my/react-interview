import { useHistory } from "react-router-dom";

export const Route = () => {

  const history = useHistory();

  const routeChange = (path) => {
    history.push(path);
  };

  return {routeChange}
}
