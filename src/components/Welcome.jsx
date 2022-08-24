import React, { memo } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { listService } from "../utils";

const Welcome = ({ buttonTitle, listItem, handleSelectType }) => {
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
              {buttonTitle}
            </Button>
          </CardActions>
        </Card>
      ))}
    </div>
  );
};

Welcome.defaultProps = {
  buttonTitle: "Order Now",
  handleSelectType: undefined,
  listItem: listService,
};

export default memo(Welcome);
