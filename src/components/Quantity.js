import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { makeStyles, Grid, Button, TextField, Typography } from "./Material";

const useStyles = makeStyles((theme) => ({
  textField: {
    width: 50,
    height: 30,
  },
  leftButton: {
    fontSize: 20,
    fontWeight: "bolder",
    marginRight: 5,
    height: 30,
  },
  rightButton: {
    fontSize: 20,
    fontWeight: "bolder",
    marginLeft: 5,
    height: 30,
  },
  label: {
    marginBottom: 5,
    color: "rgba(0, 0, 0, 0.54)",
  },
  input: { height: 10, textAlign: "center" },
}));

function Quantity({ id, onChange }) {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const [rendered, setRendered] = useState(false);

  useEffect(() => {
    if (rendered) {
      onChange(id, value);
    } else {
      setRendered(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  const handleOnClick = (type) => {
    if (type === "decrement") {
      if (value === 0) return;
      setValue(value - 1);
    } else {
      setValue(value + 1);
    }
  };

  return (
    <Grid container direction="column">
      <Grid container>
        <Typography variant="caption" className={classes.label}>
          Quantity
        </Typography>
      </Grid>
      <Grid container>
        <Button
          data-testid="decrement-button"
          size="small"
          color="secondary"
          variant="contained"
          className={classes.leftButton}
          onClick={() => handleOnClick("decrement")}
        >
          -
        </Button>
        <TextField
          data-testid="value"
          id={id.toString()}
          color="secondary"
          variant="outlined"
          className={classes.textField}
          size="small"
          inputProps={{ className: classes.input }}
          value={value}
        />
        <Button
          data-testid="increment-button"
          size="small"
          color="secondary"
          variant="contained"
          className={classes.rightButton}
          onClick={() => handleOnClick("increment")}
        >
          +
        </Button>
      </Grid>
    </Grid>
  );
}

Quantity.propTypes = {
  /**
   * id of the item
   */
  id: PropTypes.number.isRequired,
  /**
   * onChange handler
   */
  onChange: PropTypes.func.isRequired,
};

export default Quantity;
