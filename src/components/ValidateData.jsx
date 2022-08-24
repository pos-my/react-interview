import { CircularProgress } from "@mui/material";
import { memo } from "react";

const ValidateData = ({ loading }) => {
  return (
    <div style={{ paddingTop: 10 }}>
      {loading ? <CircularProgress /> : null}
    </div>
  );
};

export default memo(ValidateData);
