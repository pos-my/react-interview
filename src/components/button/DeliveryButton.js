import React from 'react';

class DeliveryButton extends React.Component {
  handleClick=()=>{
    const {
      value, onClick
    } = this.props;
    onClick(value);
  }

  render() {
    const {
      title
    } = this.props;
    return (
      <button
        type="button"
        onClick={this.handleClick}>{title}</button>
    );
  }
}

DeliveryButton.defaultProps = {
  title: "",
  value: "",
  onClick: ()=>{}
};

export default DeliveryButton;
