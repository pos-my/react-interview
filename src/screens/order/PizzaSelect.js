import React from 'react';
import PizzaForm from '../../components/module/PizzaForm';
import FormButton from '../../components/button/FormButton';
import SelectionSummary from '../../components/card/SelectionSummary';
import {
  PIZZA_TYPE,
  PIZZA_SIZE,
  PIZZA_EXTRA_CHEESE
} from '../../configs/selectionOptions';

class PizzaSelect extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pizzaList: []
    };
  }

  addPizzaToList=(pizzaData)=>{
    const {
      pizzaList
    } = this.state;
    const selectedType = PIZZA_TYPE.find((item) => {
      return item.id === pizzaData.pizzaType;
    });
    const pizza = {
      name: selectedType.name,
      price: selectedType.price,
      ...pizzaData
    };
    this.setState({
      pizzaList: [...pizzaList, pizza]
    });
  }

  removePizza=(index)=>{
    let {
      pizzaList
    } = this.state;
    pizzaList.splice(index, 1);
    this.setState({
      pizzaList
    });
  }

  handleCheckout=()=>{
    const {
      history, location
    } = this.props;
    const {
      pizzaList
    } = this.state;
    history.push("checkout", {
      deliveryType: location.state.deliveryType,
      pizzaList: pizzaList
    });
  }

  render() {
    const {
      pizzaList
    } = this.state;
    return (
      <div className="container">
        <PizzaForm
          typeOption={PIZZA_TYPE}
          sizeOption={PIZZA_SIZE}
          cheeseOption={PIZZA_EXTRA_CHEESE}
          addPizzaToList={this.addPizzaToList} />
        <div className="optionBottom">
          <SelectionSummary
            pizzaList={pizzaList}
            handleRemove={this.removePizza} />
        </div>
        <FormButton
          title={"Checkout"}
          onClick={this.handleCheckout} />
      </div>
    );
  }
}

export default PizzaSelect;
