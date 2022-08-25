import { IconButton, Tooltip } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const DeleteAction = ({ handleClick }) => (
  <div
    style={{
      position: "absolute",
      right: 10,
      top: 0,
      bottom: 0,
      display: "flex",
      alignItems: "center",
    }}
  >
    <div>
      <Tooltip title="Delete" placement="right">
        <IconButton color="secondary" aria-label="delete" onClick={handleClick}>
          <DeleteIcon />
        </IconButton>
      </Tooltip>
    </div>
  </div>
);

DeleteAction.defaultProps = {
  handleClick: undefined,
};

export default DeleteAction;
