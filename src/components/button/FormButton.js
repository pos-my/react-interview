import React from 'react';

class FormButton extends React.Component {
  render() {
    const {
      title, onClick
    } = this.props;
    return (
      <button
        type="button"
        onClick={onClick}>{title}</button>
    );
  }
}

FormButton.defaultProps = {
  title: "",
  onClick: ()=>{}
};

export default FormButton;
