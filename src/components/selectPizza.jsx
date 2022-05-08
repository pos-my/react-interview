import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchPizza} from "../service/pizzaService";
import {
    Alert,
    Box,
    Button, Checkbox,
    CircularProgress,
    FormControl, FormControlLabel,
    InputLabel,
    Link,
    MenuItem,
    Select, TextField,
    Typography
} from "@mui/material";
import {LARGE, MEDIUM, SMALL} from "../utils/constants";
import {Order} from "../models/order";
import {addNewOrder, removeOrder} from "../service/orderService";
import {useNavigate} from "react-router-dom";

const SelectPizza = () => {
    const dispatch = useDispatch();
    const pizzaFetchStatus = useSelector((state) => state.pizza.status);
    const pizzas = useSelector((state) => state.pizza.data);
    const deliveryType = useSelector((state) => state.order.type);
    const orders = useSelector((state) => state.order.list);
    const [pizza, setPizza] = useState();
    const [size, setSize] = useState(SMALL);
    const [extraCheese, setExtraCheese] = useState(false);
    const [quantity, setQuantity] = useState(1);
    const navigate = useNavigate();

    React.useEffect(() => {
        dispatch(fetchPizza());
    }, [])

    const onSelectPizza = (pizza) => (event) => {
        setPizza(pizza);
        event.preventDefault();
    }

    const onQuantityChange = (e) => {
        setQuantity(e.target.value.replace(/[^0-9]/g, ''));
    }

    const resetSelect = () => {
        setPizza(undefined);
        setQuantity(1);
        setExtraCheese(false);
        setSize(SMALL)
    }

    const onAddOrder = () => {
        dispatch(addNewOrder(new Order(pizza.id, size, extraCheese, quantity)));
        resetSelect();
    }

    const getPizzaName = (pizzaId) => {
        const pizza = pizzas.find((pizza) => pizza.id === pizzaId);
        return pizza.name;
    }

    if (!deliveryType) {
        return (
            <Alert data-testid="no-delivery-method-alert" severity={"error"}>No delivery method selected, click <Link
                href="/">here</Link> to return home</Alert>
        )
    }

    return (
        <div>
            <Typography variant={"h3"}>Pizza</Typography>
            Delivery Method: {deliveryType}
            <br/>
            {!pizza ?
                <>
                    {pizzaFetchStatus === "STARTED" &&
                    <Box sx={{display: 'flex'}}>
                        <CircularProgress/>
                    </Box>
                    }
                    {pizzaFetchStatus === "COMPLETED" &&
                    <div>
                        <table border="1" cellPadding="5" cellSpacing="0">
                            <thead>
                            <tr>
                                <td><b>Name</b></td>
                                <td><b>Price</b></td>
                            </tr>
                            </thead>
                            <tbody>
                            {pizzas.map((pizza) => (
                                <tr key={pizza.id}>
                                    <td><Link role="select-pizza-link" href="/"
                                              onClick={onSelectPizza(pizza)}>{pizza.name}</Link></td>
                                    <td>{pizza.price}$</td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                        <br/>
                        <Typography variant={"h6"}>Cart</Typography>
                        <table border="1" cellPadding="3" cellSpacing="0">
                            <thead>
                            <tr>
                                <td><b>Name</b></td>
                                <td><b>Size</b></td>
                                <td><b>Extra Cheese</b></td>
                                <td><b>Quantity</b></td>
                                <td/>
                            </tr>
                            </thead>
                            <tbody>
                            {orders.map((order, index) => (
                                <tr role="cart-table-tr" key={index}>
                                    <td>{getPizzaName(order.pizzaId)}</td>
                                    <td>{order.size}</td>
                                    <td>{order.extraCheese ? 'Yes' : 'No'}</td>
                                    <td>{order.quantity}</td>
                                    <td><Button size={"small"} variant={"contained"}
                                                onClick={() => dispatch(removeOrder(index))}>Remove</Button></td>
                                </tr>
                            ))}
                            {orders.length === 0 &&
                            <tr>
                                <td colSpan={5}>
                                    <center>No item(s)</center>
                                </td>
                            </tr>
                            }
                            </tbody>
                        </table>
                        <br/>
                        {orders.length > 0 &&
                        <Button data-testid="checkout-button" variant={"contained"} onClick={() => navigate('/checkout')}>Checkout</Button>
                        }
                    </div>
                    }
                </>
                :
                <div>
                    Selected pizza: {pizza.name}
                    <br/>
                    <br/>
                    <div>
                        <FormControl>
                            <InputLabel id="size-select-label">Size</InputLabel>
                            <Select
                                data-testid="size-select"
                                labelId="size-select-label"
                                id="size-select"
                                value={size}
                                label="Size"
                                onChange={(event) => setSize(event.target.value)}
                                size="small"
                            >
                                <MenuItem value={SMALL}>Small</MenuItem>
                                <MenuItem value={MEDIUM}>Medium</MenuItem>
                                <MenuItem value={LARGE}>Large</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                    <div>
                        <FormControlLabel
                            control={
                                <Checkbox checked={extraCheese}
                                          data-testid="extra-cheese-checkbox"
                                          onChange={(event) => setExtraCheese(event.target.checked)}
                                          name="extraCheese"/>
                            }
                            label="Extra Cheese"
                        />
                    </div>
                    <div>
                        Quantity:&nbsp;
                        <TextField style={{marginTop: '-3px'}} size="small" value={quantity}
                                   data-testid="quantity-textfield"
                                   onChange={onQuantityChange}/>
                    </div>
                    <br/>
                    <Button variant={"contained"} data-testid="add-to-cart-button" onClick={onAddOrder}>Add To Cart</Button>&nbsp;&nbsp;
                    <Button variant={"contained"} onClick={() => resetSelect()}>Back</Button>
                </div>
            }

        </div>
    );
};

export default SelectPizza;