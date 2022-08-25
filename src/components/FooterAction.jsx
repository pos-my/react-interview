import { Button } from "@mui/material";

const FooterAction = ({
  buttonTitle,
  disabledMainAction,
  handleCancel,
  handleClick,
  secondaryAction,
  secondaryTitle,
}) => {
  return (
    <div
      style={{
        display: "flex",
        position: "absolute",
        bottom: 10,
        left: 10,
        right: 10,
      }}
    >
      {secondaryAction ? (
        <>
          <Button
            fullWidth
            variant="contained"
            color="secondary"
            onClick={handleCancel}
          >
            {secondaryTitle}
          </Button>
          <div style={{ margin: 10 }} />
        </>
      ) : null}
      <Button
        disabled={disabledMainAction}
        fullWidth
        variant="contained"
        onClick={handleClick}
      >
        {buttonTitle}
      </Button>
    </div>
  );
};

FooterAction.defaultProps = {
  buttonTitle: "Checkout",
  disabledMainAction: false,
  handleCancel: undefined,
  handleClick: undefined,
  secondaryAction: false,
  secondaryTitle: "Cancel Order",
};

export default FooterAction;
