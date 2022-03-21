import { useSelector, useDispatch } from 'react-redux';
import { addFromSummary, removeFromSummary, sumTotal } from '../../../common/actions/index';

import { Link } from "react-router-dom";

function SumContent() {
  const dispatch   = useDispatch();
  const cartStatus = useSelector( (state) => state.cartReducer );
  const itemList   = useSelector( (state) => state.itemReducer );

  const sumAll = () => {
    dispatch(sumTotal(itemList));
  }

  return (
    <>
    <ul data-test="summary-list" className="list-group list-group-flush">
      {
        cartStatus.cart.map((item) => (
          <li className="list-group-item" key={item.id}>
            <b>{itemList[item.itemId-1].name}</b>
            <p> {item.size} | <button onClick={() => [dispatch(removeFromSummary(item.id)),sumAll()]  }>-</button> {item.quantity} <button onClick={() => [dispatch(addFromSummary(item.id)),sumAll()] }>+</button> <br/>
                Extra Cheese : {item.extraCheese ? "Yes" : "No"}
            </p>
          </li>
        ))
      }
    </ul>
    <Link to="/checkout"><button className='btn btn-danger'>Check Out</button></Link>
    </>
  )
}

export default SumContent