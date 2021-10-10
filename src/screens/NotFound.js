import React from "react";
import { makeStyles, Grid, Typography } from "../components/Material";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
}));

function NotFound() {
  const classes = useStyles();
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      className={classes.root}
    >
      <Typography data-testid="not-found-text" variant="h3">
        Page not found!
      </Typography>
    </Grid>
  );
}

export default NotFound;
