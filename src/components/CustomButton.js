import React from "react";
import PropTypes from "prop-types";

import { Button } from "./Material";

function CustomButton({
  show,
  label,
  className,
  dataTestID,
  color,
  variant,
  size,
  fullWidth,
  onClick,
}) {
  return show ? (
    <Button
      data-testid={dataTestID}
      color={color}
      variant={variant}
      fullWidth={fullWidth}
      size={size}
      className={className}
      onClick={onClick}
    >
      {label}
    </Button>
  ) : null;
}

CustomButton.propTypes = {
  /**
   * Show button
   */
  show: PropTypes.bool,
  /**
   * Button label
   */
  label: PropTypes.string.isRequired,
  /**
   * CSS className for the button
   */
  className: PropTypes.string,
  /**
   * data-testid for the button
   */
  dataTestID: PropTypes.string.isRequired,
  /**
   * Button color
   */
  color: PropTypes.string,
  /**
   * Button variant
   */
  variant: PropTypes.string,
  /**
   * Button size
   */
  size: PropTypes.string,
  /**
   * Button fullWidth
   */
  fullWidth: PropTypes.bool,
  /**
   * onClick handler
   */
  onClick: PropTypes.func.isRequired,
};

CustomButton.defaultProps = {
  show: true,
  classes: "",
  color: "secondary",
  variant: "contained",
  size: "large",
  fullWidth: false,
};

export default CustomButton;
