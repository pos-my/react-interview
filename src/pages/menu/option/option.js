import { useDispatch } from "react-redux";
import { pickup, delivery } from "../../../common/actions/index";
import "./Option.css";

function Option() {

    const dispatch = useDispatch();
    return (
        <div className="option-center">
            <br />
            <h1>WELCOME!</h1>
            <h3>Choose Your Prefered Method</h3>
            <button data-test="pickupButton" className="btn btn-outline-primary option-spacing" onClick={() => dispatch(pickup())}>Pickup</button>
            <button data-test="deliveryButton" className="btn btn-outline-success option-spacing" onClick={() => dispatch(delivery())}>Delivery</button>
        </div>
    );
}

export default Option;
