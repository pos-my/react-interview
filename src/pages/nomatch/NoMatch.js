import { Link } from "react-router-dom";

function NoMatch() {
  return (
    <div>
      <br />
      <h1>Page not found!</h1>
      <h3>Are you lost?</h3>
      <p>
        Back to <Link to="/">Order</Link> Page
      </p>
    </div>
  );
}

export default NoMatch;
