import { memo } from "react";
import { Typography, Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

const ItemSummary = ({ handleClick, options, parentData }) => {
  return (
    <div>
      <Typography variant="body2">
        <span style={{ fontWeight: "bold" }}>Name</span>: {parentData?.name}
      </Typography>
      <Typography variant="body2">
        <span style={{ fontWeight: "bold" }}>Price</span>: $
        {parentData?.price * options?.length || 0}
      </Typography>
      <div
        style={{
          position: "relative",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Typography variant="body2">
          <span style={{ fontWeight: "bold" }}>Quantity</span>:{" "}
          {options?.length}
        </Typography>
        <div style={{ marginLeft: 10 }}>
          <Button
            variant="contained"
            style={{ minWidth: 20, width: 20, height: 20, minHeight: 20 }}
            onClick={handleClick}
          >
            <AddIcon />
          </Button>
        </div>
      </div>
    </div>
  );
};

ItemSummary.defaultProps = {
  handleClick: undefined,
  options: [],
  parentData: { name: "Name", price: "$100" },
};

export default memo(ItemSummary);
