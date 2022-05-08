import React from 'react';
import {
    Alert,
    Button, Link,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography
} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {fetchPizza} from "../service/pizzaService";
import {cancelOrder} from "../service/orderService";
import {useNavigate} from "react-router-dom";

const Checkout = () => {
    const orders = useSelector((state) => state.order.list);
    const pizzas = useSelector((state) => state.pizza.data);
    const pizzaFetchStatus = useSelector((state) => state.pizza.status);
    const deliveryType = useSelector((state) => state.order.type);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    React.useEffect(() => {
        if (pizzaFetchStatus === 'NOT_STARTED') {
            dispatch(fetchPizza());
        }
    }, [])

    const onConfirmOrder = () => {
        dispatch(cancelOrder())
        navigate('/thankyou');
    }

    const onCancelOrder = () => {
        dispatch(cancelOrder())
        navigate('/');
    }

    const getTotalPrice = () => {
        let totalPrice = 0;
        orders.forEach((order) => {
            const pizza = pizzas.find((pizza) => pizza.id === order.pizzaId);
            totalPrice += pizza.price * order.quantity;
        })
        return totalPrice;
    }

    if (orders.length === 0) {
        return (
            <Alert severity={"error"}>No order selected, click <Link href="/">here</Link> to return home</Alert>
        )
    }

    function renderRow(order, index) {
        const pizza = pizzas.find((pizza) => pizza.id === order.pizzaId);

        return (
            <TableRow
                key={order.pizzaId + "_" + index}
                sx={{'&:last-child td, &:last-child th': {border: 0}}}
            >
                <TableCell component="th" scope="row">
                    {pizza.name}
                </TableCell>
                <TableCell>{order.size}</TableCell>
                <TableCell>{order.extraCheese ? 'Yes' : 'No'}</TableCell>
                <TableCell>{order.quantity}</TableCell>
                <TableCell>{order.quantity * pizza.price}$</TableCell>
            </TableRow>
        );
    }

    return (
        <div>
            <Typography variant={"h3"}>Pizza</Typography>
            <Typography variant={"h6"}>Checkout</Typography>
            <TableContainer component={Paper}>
                <Table width="100" size="small" aria-label="a dense table">
                    <TableHead>
                        <TableRow>
                            <TableCell><b>Name</b></TableCell>
                            <TableCell><b>Size</b></TableCell>
                            <TableCell><b>Cheese</b></TableCell>
                            <TableCell><b>Quantity</b></TableCell>
                            <TableCell><b>Price</b></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {orders.map((order, index) => renderRow(order, index))}
                    </TableBody>
                </Table>
            </TableContainer>
            <Alert severity={"info"}>
                <div><b>Method of Delivery:</b> {deliveryType}</div>
                <div><b>Total Price:</b> {getTotalPrice()}$</div>
            </Alert>
            <br/>
            <Button variant={"contained"} onClick={onConfirmOrder}>Confirm Order</Button>&nbsp;&nbsp;OR&nbsp;&nbsp;
            <Button variant={"contained"} onClick={onCancelOrder}>Cancel Order</Button>
        </div>
    );
};

export default Checkout;