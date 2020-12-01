import React from 'react';
import RadioButton from '../../components/button/RadioButton';

class RadioSelection extends React.Component {
  handleSelectOption=(value)=>{
    const {
      onSelect
    } = this.props;
    onSelect(value);
  }

  renderRadio=(item, index)=>{
    const {
      currentValue
    } = this.props;
    return (
      <RadioButton
        key={index}
        id={item.id}
        value={item.id}
        selected={currentValue === item.id}
        title={item.name}
        subTitle={item.price? item.price+"$" : ""}
        onSelect={this.handleSelectOption} />
    );
  }

  render() {
    const {
      title, optionList
    } = this.props;
    const options = optionList.map(this.renderRadio);
    return (
      <div className="optionContainer">
        <p className="optionTitle">{title}</p>
        <div className="optionSelectionRow">
          {options}
        </div>
      </div>
    );
  }
}

RadioSelection.defaultProps = {
  title: "",
  optionList: [],
  currentValue: "",
  onSelect: ()=>{}
};

export default RadioSelection;
