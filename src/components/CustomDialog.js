import React from "react";
import PropTypes from "prop-types";
import { Dialog } from "./Material";
function CustomDialog({ show, onClose, children }) {
  return (
    <Dialog
      data-testid="dialog"
      onClose={onClose}
      open={show}
      PaperProps={{
        style: { padding: 40 },
      }}
    >
      {children}
    </Dialog>
  );
}

CustomDialog.propTypes = {
  /**
   * Dialog close handler
   */
  onClose: PropTypes.func.isRequired,
  /**
   * Pass true to show dialog
   */
  show: PropTypes.bool.isRequired,
  /**
   * React element to show inside dialog
   */
  children: PropTypes.node,
};

export default CustomDialog;
