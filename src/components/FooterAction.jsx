import { Button } from "@mui/material";

const FooterAction = ({ handleClick, buttonTitle }) => {
  return (
    <div
      style={{
        position: "absolute",
        bottom: 10,
        left: 10,
        right: 10,
      }}
    >
      <Button fullWidth variant="contained" onClick={handleClick}>
        {buttonTitle}
      </Button>
    </div>
  );
};

FooterAction.defaultProps = {
  buttonTitle: "Checkout",
};

export default FooterAction;
