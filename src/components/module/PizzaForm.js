import React from 'react';
import RadioSelection from '../card/RadioSelection';
import TextNumberInput from '../input/TextNumberInput';
import FormButton from '../button/FormButton';

class PizzaForm extends React.Component {
  constructor(props) {
    super(props);
    const {
      typeOption, sizeOption, cheeseOption
    } = props;
    this.state = {
      pizzaType: typeOption[0].id,
      pizzaSize: sizeOption[0].id,
      extraCheese: cheeseOption[0].id,
      quantity: 1
    };
  }

  onSelectType=(value)=>{
    this.setState({
      pizzaType: value
    });
  }

  onSelectSize=(value)=>{
    this.setState({
      pizzaSize: value
    });
  }

  onSelectExtraCheese=(value)=>{
    this.setState({
      extraCheese: value
    });
  }

  onChangeQuantity=(value)=>{
    this.setState({
      quantity: value
    });
  }

  addToList=()=>{
    const {
      addPizzaToList
    } = this.props;
    addPizzaToList(this.state);
  }

  render() {
    const {
      typeOption, sizeOption, cheeseOption
    } = this.props;
    const {
      pizzaType, pizzaSize, extraCheese, quantity
    } = this.state;

    return (
      <div className="container">
        <h3>Pizza Selection</h3>
        <RadioSelection
          title={"Select Pizza Type"}
          optionList={typeOption}
          currentValue={pizzaType}
          onSelect={this.onSelectType} />
        <RadioSelection
          title={"Select Pizza Size"}
          optionList={sizeOption}
          currentValue={pizzaSize}
          onSelect={this.onSelectSize} />
        <RadioSelection
          title={"Add Extra Cheese"}
          optionList={cheeseOption}
          currentValue={extraCheese}
          onSelect={this.onSelectExtraCheese} />
        <TextNumberInput
          title={"Quantity"}
          value={quantity}
          onChange={this.onChangeQuantity} />
        <div className="optionBottom">
          <FormButton
            title={"Add to List"}
            onClick={this.addToList} />
        </div>
      </div>
    );
  }
}

PizzaForm.defaultProps = {
  typeOption: [],
  sizeOption: [],
  cheeseOption: [],
  addPizzaToList: ()=>{}
};

export default PizzaForm;
