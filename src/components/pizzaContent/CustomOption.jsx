import { memo } from "react";
import { Button, Typography } from "@mui/material";

const CustomOption = ({ handleUpdatePizza, item, parentData, title }) => {
  return (
    <div
      style={{
        display: "flex",
        position: "relative",
        alignItems: "center",
        marginBottom: 10,
      }}
    >
      <Typography variant="body2">
        <span style={{ fontWeight: "bold" }}>{title}</span>:
      </Typography>
      <div
        style={{
          marginLeft: 10,
          display: "flex",
          position: "relative",
        }}
      >
        {parentData?.map((listOfSize) => (
          <div key={listOfSize} style={{ marginRight: 5 }}>
            <Button
              elevation={0}
              variant={
                item.size?.toLowerCase() === listOfSize
                  ? `contained`
                  : "outline"
              }
              style={{
                color: item.size?.toLowerCase() === listOfSize ? "" : "gray",
              }}
              onClick={handleUpdatePizza(item.id, listOfSize, "size")}
            >
              {listOfSize}
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

CustomOption.defaultProps = {
  title: "Size",
};

export default memo(CustomOption);
