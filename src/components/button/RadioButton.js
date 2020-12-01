import React from 'react';

class RadioButton extends React.Component {
  handleClick=()=>{
    const {
      onSelect, value
    } = this.props;
    onSelect(value);
  }

  render() {
    const {
      id, title, subTitle, selected
    } = this.props;
    return (
      <div className="optionRadio">
        <input
          id={id}
          type="radio"
          checked={selected}
          onChange={this.handleClick} />
        <label htmlFor={id}>{title} {subTitle}</label>
      </div>
    );
  }
}

RadioButton.defaultProps = {
  id: "",
  title: "",
  subTitle: "",
  value: "",
  selected: false,
  onSelect: ()=>{}
}

export default RadioButton;
