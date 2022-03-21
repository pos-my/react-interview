import { useSelector, useDispatch } from 'react-redux';
import { addCart, sumTotal } from '../../../common/actions/index';
import PropTypes from 'prop-types';
import "./Item.css";

function Item(probs) {

  const dispatch   = useDispatch(); 
  const itemList   = useSelector( (state) => state.itemReducer );

  const sumAll = (event) => {
    event.preventDefault();
    dispatch(sumTotal(itemList));
  }

  const addToCart = (event) => {
    event.preventDefault();
    
    const menuId      = event.target.querySelector("#menu-id").value;
    const pizzaSize   = event.target.querySelector("#pizza-size").value;
    const extraCheese = event.target.querySelector("#extra-cheese").checked;
    const quantity    = event.target.querySelector("#pizza-quantity").value;

    const orderDetail = {
      itemId: parseInt(menuId),
      size: pizzaSize,
      extraCheese: extraCheese,
      quantity: parseInt(quantity)
    }
    dispatch( addCart(orderDetail) );
  }
  return (
    <>
      <div className="card item-spacing" data-bs-toggle="modal" data-bs-target={"#cart"+probs.item.id}>
        <img src={probs.item.import} width="100%" height="auto" alt="Logo" />
        <div className="card-body">
          <h6 className="card-title">
            {probs.item.name} <b>(${probs.item.price})</b>
          </h6>
        </div>
      </div>

      {/* <!-- Modal --> */}
      <div className="modal fade" id={"cart"+probs.item.id} tabIndex={"-1"} aria-labelledby="orderModal" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="orderModal">{probs.item.name} (${probs.item.price})</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form style={{textAlign:'left'}} id={"order-form-"+probs.item.id} onSubmit={ (e) => [addToCart(e),sumAll(e)] }>

                <input data-test="menu-id-form" type={"number"} id="menu-id" defaultValue={probs.item.id} hidden/>
                {/* size */}
                <label htmlFor="pizza-size" className="form-label">Size:</label>
                <select data-test="size-form" id="pizza-size" className="form-select" aria-label="Default select example">
                  <option value="small">Small</option>
                  <option value="medium">Medium</option>
                  <option value="large">Large</option>
                </select>

                {/* extra cheese */}
                <div className="form-check">
                  <input data-test="extra-cheese-form" className="form-check-input" type="checkbox" id="extra-cheese"/>
                  <label className="form-check-label" htmlFor="extra-cheese">
                    Extra Cheese?
                  </label>
                </div>

                {/* quantity */}
                <label htmlFor="pizza-quantity" className="form-label">Quantity</label>
                <input data-test="quantity-form" type="number" className="form-control" id="pizza-quantity" defaultValue={1}></input>
              </form>
            </div>

            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button data-test="submit-form" type="submit" className="btn btn-primary" form={"order-form-"+probs.item.id}>Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

Item.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    price: PropTypes.number,
    imgurl: PropTypes.string,
    import: PropTypes.string,
  }),
};

export default Item;
