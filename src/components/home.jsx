import React from 'react';
import {useDispatch} from "react-redux";
import {Button, Typography} from "@mui/material";
import {actionSetOrderType} from "../reducer/orderSlice";
import {DELIVERY, PICKUP} from "../utils/constants";
import {useNavigate} from "react-router-dom";

const Home = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onOrderTypeSelect = (orderType) => () => {
        dispatch(actionSetOrderType(orderType));
        navigate('/select');
    }

    return (
        <div>
            <Typography variant={"h3"}>Pizza</Typography>
            <br/>
            <Typography variant={"h6"}>Select Delivery Method</Typography>
            <Button variant={"contained"} onClick={onOrderTypeSelect(PICKUP)}>Pick Up</Button>&nbsp;&nbsp;OR&nbsp;&nbsp;
            <Button variant={"contained"} onClick={onOrderTypeSelect(DELIVERY)}>Delivery</Button>

        </div>
    );
};

export default Home;