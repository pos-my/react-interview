import {Link} from "react-router-dom";
import Button from 'react-bootstrap/Button';

function Success() {
  return(
    <div className='Center'>
      <div>
        <h1>Order Completed!</h1>
        <h1>Thank You So Much~</h1>
      </div>
      <div>
        <Link to="/">
          <Button variant="primary" className='mt-4'>
            Back Home
          </Button>
        </Link>
      </div>
    </div>
    )
};

export default Success;