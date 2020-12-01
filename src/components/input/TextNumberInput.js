import React from 'react';

class TextNumberInput extends React.Component {
  onChange=(event)=>{
    const {
      onChange
    } = this.props;
    onChange(event.target.value);
  }

  render() {
    const {
      title, value, min, max
    } = this.props;
    return (
      <div className="optionContainer">
        <p className="optionTitle">{title}</p>
        <input
          type="number"
          min={min}
          max={max}
          value={value}
          onChange={this.onChange}
          aria-label={"quantityInput"} />
      </div>
    );
  }
}

TextNumberInput.defaultProps = {
  title: "",
  value: "0",
  min: 1,
  max: 1000,
  onChange: ()=>{}
};

export default TextNumberInput;
