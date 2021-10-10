import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  makeStyles,
  Grid,
  Card,
  CardHeader,
  CardContent,
  Typography,
} from "../components/Material";
import { CheckoutItem, Dialog, Button } from "../components";
import { shippingTypes } from "../data/constants";
import { useHistory } from "react-router-dom";
import { setShippingType } from "../reducers/shippingType";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  cardRoot: {
    minWidth: 320,
    width: 620,
  },
  title: {
    fontSize: 20,
    fontWeight: "bolder",
  },
  cardContent: {
    paddingTop: 0,
  },
  shippingType: {
    marginTop: 10,
  },
}));

function Checkout() {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();
  const [showConfirmation, setShowConfirmation] = useState(false);
  const items = useSelector((state) =>
    Object.values(state.items).filter((item) => item.quantity > 0)
  );
  const totalPrice = items.reduce(
    (prev, curr) => prev + curr.price * curr.quantity,
    0
  );

  const shippingType = useSelector((state) => state.shippingType);

  const getShippingTypeText = (type) =>
    type === shippingTypes.DELIVERY ? "Delivery" : "Pick Up";

  const getTotalText = (total) => "Total Amount: $" + total;

  const handleOnCancel = () => {
    dispatch(setShippingType(""));
    history.replace("/");
  };

  const handleOnProceed = () => {
    setShowConfirmation(true);
    setTimeout(() => {
      dispatch(setShippingType(""));
      history.replace("/");
    }, 2000);
  };

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      className={classes.root}
    >
      <Card className={classes.cardRoot}>
        <CardHeader
          title="Checkout Items:"
          titleTypographyProps={{ className: classes.title }}
          action={
            <Typography
              variant="body2"
              color="secondary"
              className={classes.shippingType}
            >
              Shipping Type: {getShippingTypeText(shippingType)}
            </Typography>
          }
        />
        <CardContent className={classes.CardContent}>
          {items.map((item) => (
            <CheckoutItem key={item.id} item={item} />
          ))}
          <Grid container justifyContent="flex-end">
            <Typography variant="body1">{getTotalText(totalPrice)}</Typography>
          </Grid>
        </CardContent>
        <CardContent>
          <Grid container justifyContent="space-between">
            <Grid item>
              <Button
                dataTestID="cancel-button"
                label="Cancel"
                color="default"
                fullWidth={true}
                className={classes.button}
                onClick={handleOnCancel}
              />
            </Grid>
            <Grid item>
              <Button
                label="Proceed"
                dataTestID="proceed-button"
                className={classes.button}
                onClick={handleOnProceed}
              >
                Proceed
              </Button>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
      <Dialog show={showConfirmation} onClose={setShowConfirmation}>
        <Typography variant="h2">Thank you!</Typography>
        <Typography variant="h5">Your order has been placed.</Typography>
      </Dialog>
    </Grid>
  );
}

export default Checkout;
