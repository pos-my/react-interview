import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { memo } from "react";

const ActiveOrder = ({
  customPaperStyle,
  description,
  handleSelectedItem,
  imageSource,
  itemId,
  subtitleConfig,
  title,
  titleConfig,
}) => {
  const formattedTitle = title.charAt(0).toUpperCase() + title.slice(1);

  const onHandleClick = (param) => () => {
    if (handleSelectedItem) handleSelectedItem(param);
  };

  return (
    <Paper
      style={{
        position: "relative",
        borderRadius: 10,
        overflow: "hidden",
        ...customPaperStyle,
      }}
      onClick={onHandleClick(itemId)}
    >
      {imageSource && imageSource?.length > 0 ? (
        <img
          src={imageSource}
          alt="activeOrder"
          width="100%"
          height="100%"
          style={{ objectFit: "cover" }}
        />
      ) : null}
      <div
        style={{
          position: "absolute",
          top: imageSource && imageSource?.length > 0 ? "unset" : 0,
          bottom: 0,
          right: 0,
          left: 0,
          backgroundColor: "#dcdcdc52",
          display: "flex",
          justifyContent:
            imageSource && imageSource?.length > 0 ? "unset" : "center",
          alignItems:
            imageSource && imageSource?.length > 0 ? "unset" : "center",
          flexDirection: "column",
          padding: 10,
        }}
      >
        {title && title?.length > 0 ? (
          <Typography
            variant={titleConfig.variant}
            style={{
              position: "relative",
              fontWeight: "bold",
              ...titleConfig.style,
            }}
          >
            {formattedTitle}
          </Typography>
        ) : null}
        {description && description?.length > 0 ? (
          <Typography
            variant={subtitleConfig.variant}
            style={{
              position: "relative",
              color: "black",
              ...subtitleConfig.style,
            }}
          >
            {description}
          </Typography>
        ) : null}
      </div>
    </Paper>
  );
};

ActiveOrder.defaultProps = {
  customPaperStyle: {
    height: 500,
    width: 800,
  },
  description:
    "Place orders online and then pick up their purchases in the brick-and-mortar store, often within the same day.",
  handleSelectedItem: undefined,
  itemId: 0,
  imageSource: "/images/buyAtStore.jpg",
  subtitleConfig: { variant: "body1" },
  titleConfig: { variant: "h2" },
  title: "Pick Up",
};

export default memo(ActiveOrder);
