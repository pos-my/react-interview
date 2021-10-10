import React, { useState } from "react";
import { makeStyles, Grid } from "../components/Material";
import { Card, Button } from "../components";
import { useSelector, useDispatch } from "react-redux";
import { updateItem } from "../reducers/items";
import { setShippingType } from "../reducers/shippingType";
import { useHistory } from "react-router-dom";
import { shippingTypes } from "../data/constants";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  vh: {
    height: "100vh",
  },
  checkoutButton: {
    marginBottom: 10,
  },
  button: {
    marginTop: 10,
  },
}));

function Home() {
  const classes = useStyles();
  const [show, setShow] = useState(true);
  const shippingType = useSelector((state) => state.shippingType);
  const dispatch = useDispatch();
  const history = useHistory();

  const items = useSelector((state) => state.items);
  const itemsArray = Object.values(items);
  const canCheckout = useSelector((state) => {
    let isAbleToCheckout = false;
    Object.values(state.items).forEach((item) => {
      if (item.quantity !== 0) {
        isAbleToCheckout = true;
      }
    });
    return isAbleToCheckout;
  });

  const handleOnClick = (shippingMethod) => {
    setShow(false);
    dispatch(setShippingType(shippingMethod));
  };

  const handleOnItemChange = (item) => {
    dispatch(updateItem(item));
  };

  const handleOnCheckout = () => {
    history.replace("checkout");
  };

  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        className={classes.vh}
      >
        {show ? (
          <Grid>
            <Button
              dataTestID="pickup-button"
              label="Pick Up"
              color="primary"
              size="large"
              fullWidth={true}
              className={classes.button}
              onClick={() => handleOnClick(shippingTypes.PICK_UP)}
            />
            <Button
              dataTestID="delivery-button"
              label="Delivery"
              size="large"
              fullWidth={true}
              className={classes.button}
              onClick={() => handleOnClick(shippingTypes.DELIVERY)}
            />
          </Grid>
        ) : null}

        {shippingType ? (
          <Grid
            container
            className={classes.root}
            spacing={2}
            justifyContent="center"
            alignItems="center"
          >
            <Grid item xs={12}>
              <Grid container justifyContent="center" spacing={2}>
                {itemsArray.map((item) => (
                  <Grid key={item.id} item>
                    <Card item={item} onChange={handleOnItemChange} />
                  </Grid>
                ))}
              </Grid>
            </Grid>
            <Button
              show={canCheckout}
              size="large"
              fullWidth={true}
              label="Checkout"
              className={classes.checkoutButton}
              dataTestID="checkout-button"
              onClick={handleOnCheckout}
            />
          </Grid>
        ) : null}
      </Grid>
    </>
  );
}

export default Home;
