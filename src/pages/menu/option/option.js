import { useDispatch } from "react-redux";
import { pickup, delivery } from "../../../common/actions/index";

function Option() {
    const dispatch = useDispatch();
    return (
        <>
            <br />
            <h1>Welcome to ABC Restaurant</h1>
            <h3>Choose Your Prefered Method</h3>
            <button onClick={() => dispatch(pickup())}>Pickup</button>
            <button onClick={() => dispatch(delivery())}>Delivery</button>
        </>
    );
}

export default Option;
