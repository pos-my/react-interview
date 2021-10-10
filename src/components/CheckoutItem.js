import React from "react";
import PropTypes from "prop-types";
import {
  makeStyles,
  Grid,
  List,
  ListItem,
  ListItemText,
  Avatar,
  Divider,
} from "../components/Material";

const useStyles = makeStyles((theme) => ({
  image: {
    height: 100,
    width: 150,
  },
  list: {
    width: "100%",
    backgroundColor: theme.palette.background.paper,
  },
  avatar: {
    height: 50,
    width: 50,
  },
  itemTexts: {
    marginLeft: 10,
    width: "100%",
  },
  listItem: {
    paddingLeft: 0,
    paddingRight: 0,
  },
  listItemText: {
    textAlign: "right",
  },
}));

function CheckoutItem({ item }) {
  const classes = useStyles();
  const { id, name, image, size, cheese, quantity } = item;
  return (
    <Grid container direction="column" key={id}>
      <List className={classes.list}>
        <ListItem data-testid="item" className={classes.listItem}>
          <Grid item xs={3}>
            <Avatar
              variant="rounded"
              src={image}
              className={classes.avatar}
            ></Avatar>
          </Grid>
          <Grid item xs={3}>
            <ListItemText data-testid="name" primary={name} />
          </Grid>
          <Grid item xs={6} className={classes.itemTexts}>
            <Grid container justifyContent="flex-end">
              <ListItemText
                data-testid="size"
                primary="Size"
                secondary={size}
                className={classes.listItemText}
              />
              <ListItemText
                data-testid="cheese"
                primary="Cheese"
                secondary={cheese ? "Yes" : "No"}
                className={classes.listItemText}
              />
              <ListItemText
                data-testid="quantity"
                primary="Qty"
                secondary={quantity}
                className={classes.listItemText}
              />
            </Grid>
          </Grid>
        </ListItem>
        <Divider />
      </List>
    </Grid>
  );
}

CheckoutItem.propTypes = {
  /**
   * item to display
   */
  item: PropTypes.object.isRequired,
};

export default CheckoutItem;
