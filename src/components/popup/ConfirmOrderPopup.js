import React from 'react';
import Popup from 'reactjs-popup';
import FormButton from '../../components/button/FormButton';

class ConfirmOrderPopup extends React.Component {
  render() {
    const {
      isShowing, handleClose
    } = this.props;
    return (
      <Popup
        open={isShowing}
        onClose={handleClose}>
        <div className="confirmPopup">
          <h4 className="confirmPopupText">Thank you for your order.</h4>
          <div className="confirmPopupButtonRow">
            <FormButton
              title={"Close"}
              onClick={handleClose} />
          </div>
        </div>
      </Popup>
    );
  }
}

ConfirmOrderPopup.defaultProps = {
  isShowing: false,
  handleClose: ()=>{}
};

export default ConfirmOrderPopup;
