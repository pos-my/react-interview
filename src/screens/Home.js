import React, { useState } from "react";
import { makeStyles, Grid, Button } from "../components/Material";
import { Card } from "../components";
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
    marginLeft: 5,
    marginRight: 5,
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
    let canCheckout = false;
    Object.values(state.items).forEach((item) => {
      if (item.quantity !== 0) {
        canCheckout = true;
      }
    });
    return canCheckout;
  });

  const handleOnClick = (shippingType) => {
    setShow(false);
    dispatch(setShippingType(shippingType));
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
              data-testid="pickup-button"
              color="primary"
              size="large"
              variant="contained"
              className={classes.button}
              onClick={() => handleOnClick(shippingTypes.PICK_UP)}
            >
              Pick Up
            </Button>
            <Button
              data-testid="delivery-button"
              color="secondary"
              size="large"
              variant="contained"
              className={classes.button}
              onClick={() => handleOnClick(shippingTypes.DELIVERY)}
            >
              Delivery
            </Button>
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
            {canCheckout ? (
              <Button
                color="secondary"
                variant="contained"
                fullWidth
                className={classes.checkoutButton}
                onClick={handleOnCheckout}
              >
                Checkout
              </Button>
            ) : null}
          </Grid>
        ) : null}
      </Grid>
    </>
  );
}

export default Home;
