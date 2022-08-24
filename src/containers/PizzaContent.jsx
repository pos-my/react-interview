import { Divider, Typography, Button } from "@mui/material";
import { useState } from "react";
import AddIcon from "@mui/icons-material/Add";

const PizzaContent = ({ parentData }) => {
  const [data, setData] = useState([parentData]);

  const handleCloneData = (param) => {
    setData([...data, parentData]);
  };

  return (
    <div style={{ position: "relative", marginBottom: 20 }}>
      <div style={{ padding: "0px 0px 10px 0px" }}>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <Typography
            style={{ display: "flex", alignItems: "center" }}
            variant="body2"
          >
            {parentData?.name || "-"}
          </Typography>
          <div style={{ display: "flex", marginLeft: 20 }}>
            <div
              style={{
                border: "1px solid gray",
                borderRadius: 3,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: 50,
                height: 30,
                margin: "0px 5px 0px 5px",
              }}
            >
              <Typography variant="body2">{data ? data?.length : 0}</Typography>
            </div>
            <Button
              disableElevation
              style={{ minWidth: 20 }}
              variant="contained"
              onClick={handleCloneData}
            >
              <AddIcon fontSize="small" />
            </Button>
          </div>
        </div>
      </div>
      <Divider />
    </div>
  );
};

PizzaContent.defaultProps = {
  data: undefined,
};

export default PizzaContent;
