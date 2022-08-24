import { Paper, Typography } from "@mui/material";
import { memo } from "react";

const Cart = ({ data, handleClick, title }) => (
  <div
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      position: "absolute",
      bottom: 10,
      right: 10,
      left: 10,
    }}
  >
    <Paper
      style={{
        position: "relative",
        minWidth: "40.2%",
        padding: 15,
        cursor: "pointer",
      }}
      onClick={handleClick}
    >
      <Typography variant="body1">{title}</Typography>
      <div
        style={{
          position: "absolute",
          right: 10,
          top: 0,
          bottom: 0,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 50,
            width: 35,
            height: 35,
            backgroundColor: "#17bd5c",
          }}
          variant="body1"
        >
          {data?.length ? data?.length : 0}
        </Typography>
      </div>
    </Paper>
  </div>
);

Cart.defaultProps = {
  data: undefined,
  handleClick: undefined,
  title: "List of selected pizza",
};

export default memo(Cart);
