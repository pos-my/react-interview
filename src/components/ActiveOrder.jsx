import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

const ActiveOrder = ({
  imageSource = "buyAtStore.jpg",
  title = "Pick Up",
  description = "Place orders online and then pick up their purchases in the brick-and-mortar store, often within the same day.",
}) => (
  <Paper
    style={{
      position: "relative",
      height: 500,
      width: 800,
      borderRadius: 10,
      overflow: "hidden",
    }}
  >
    <img
      src={imageSource}
      alt="activeOrder"
      width="100%"
      height="100%"
      style={{ objectFit: "cover" }}
    />
    <div
      style={{
        position: "absolute",
        bottom: 0,
        right: 0,
        left: 0,
        backgroundColor: "#dcdcdc52",
        display: "flex",
        flexDirection: "column",
        padding: 10,
      }}
    >
      <Typography
        variant="h2"
        style={{ position: "relative", fontWeight: "bold" }}
      >
        {title}
      </Typography>
      <Typography
        variant="body1"
        style={{ position: "relative", color: "black" }}
      >
        {description}
      </Typography>
    </div>
  </Paper>
);

export default ActiveOrder;
