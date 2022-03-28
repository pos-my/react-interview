import {Link} from "react-router-dom";
import Button from 'react-bootstrap/Button';

function NotFound() {
  return(
    <div className='Center'>
      <div>
        <h1>404 page not found</h1>
        <h2>We are sorry but the page you are looking for does not exist.</h2>
      </div>
      <div>
        <Link to="/">
          <Button variant="primary">
            Back Home
          </Button>
        </Link>
      </div>
    </div>
    )
};

export default NotFound;