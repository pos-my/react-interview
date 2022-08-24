import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const Welcome = ({ listItem, handleSelectType }) => {
  const onHandleSelectType = (param) => () => {
    if (handleSelectType) handleSelectType(param);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
      }}
    >
      {listItem?.map((item) => (
        <Card key={item.id} sx={{ minWidth: 345, maxWidth: 345, margin: 10 }}>
          <CardMedia
            component="img"
            alt={item.imageAlt}
            height="140"
            image={item.imageSource}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {item.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {item.description}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" onClick={onHandleSelectType(item.actionValue)}>
              Order Now
            </Button>
          </CardActions>
        </Card>
      ))}
    </div>
  );
};

Welcome.defaultProps = {
  handleSelectType: undefined,
  listItem: [
    {
      id: 0,
      title: "Pick Up",
      imageSource: "/buyAtStore.jpg",
      imageAlt: "buyAtStore",
      actionValue: "pickUp",
      description:
        "Place orders online and then pick up their purchases in the brick-and-mortar store, often within the same day.",
    },
    {
      id: 1,
      title: "Delivery",
      imageSource: "/delivery.jpg",
      imageAlt: "deliveryToCustomer",
      actionValue: "delivery",
      description:
        "Retail food delivery is a courier service in which a restaurant, store, or independent food-delivery company delivers food to a customer.",
    },
  ],
};

export default Welcome;
