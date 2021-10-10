import React from "react";
import PropTypes from "prop-types";
import {
  makeStyles,
  Grid,
  Typography,
  Card,
  CardHeader,
  CardMedia,
  CardActions,
  CardActionArea,
  Currency,
} from "../components/Material";
import { RadioGroup, Quantity } from "./index";
import { sizes, cheeseOptions } from "../data";
import { cheeseTypes } from "../data/constants";

const useStyles = makeStyles((theme) => ({
  root: {
    width: 320,
    height: 350,
  },
  media: {
    height: 0,
    paddingTop: "35%",
  },
  title: {
    fontSize: 15,
  },
  price: {
    marginTop: 8,
  },
}));

function CustomCard({ item, onChange }) {
  const classes = useStyles();
  const { id, name, price, size, cheese, image } = item;

  const handleSizeChange = (id, value) => {
    onChange({
      id,
      size: value,
    });
  };

  const handleCheeseOptionsChange = (id, value) => {
    onChange({
      id,
      cheese: value === cheeseTypes.YES ? true : false,
    });
  };

  const handleQuantityChange = (id, value) => {
    onChange({
      id,
      quantity: value,
    });
  };

  return (
    <Card data-testid="card" className={classes.root}>
      <CardHeader
        data-testid="card-title"
        title={name}
        titleTypographyProps={{ className: classes.title }}
        action={
          <Grid container alignItems="center" className={classes.title}>
            <Currency fontSize="small" />
            <Typography variant="body1">{price}</Typography>
          </Grid>
        }
      />
      <CardActionArea>
        <CardMedia className={classes.media} image={image} title={name} />
      </CardActionArea>
      <CardActions disableSpacing>
        <Grid container direction="column">
          <Grid container alignItems="center">
            <RadioGroup
              id={id}
              label="Size"
              controls={sizes}
              defaultValue={size}
              onChange={handleSizeChange}
            />
          </Grid>
          <Grid container alignItems="center">
            <RadioGroup
              id={id}
              label="Extra Cheese?"
              controls={cheeseOptions}
              defaultValue={cheese}
              onChange={handleCheeseOptionsChange}
            />
          </Grid>
          <Grid container alignItems="center">
            <Quantity id={id} onChange={handleQuantityChange} />
          </Grid>
        </Grid>
      </CardActions>
    </Card>
  );
}

CustomCard.propTypes = {
  /**
   * item to display
   */
  item: PropTypes.object.isRequired,
  /**
   * onChange handler
   */
  onChange: PropTypes.func.isRequired,
};

export default CustomCard;
