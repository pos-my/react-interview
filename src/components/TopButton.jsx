import Button from "@mui/material/Button";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const TopButton = ({ buttonTitle, handleClick }) => {
  return (
    <div style={{ position: "absolute", top: 10, left: 10 }}>
      <Button
        variant="outlined"
        onClick={handleClick}
        startIcon={<ArrowBackIcon />}
      >
        {buttonTitle}
      </Button>
    </div>
  );
};

TopButton.defaultProps = {
  buttonTitle: "Back To Service",
  handleClick: undefined,
};

export default TopButton;
