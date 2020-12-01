import React from 'react';

class CheckoutItem extends React.Component {
  render() {
    const {
      index, data
    } = this.props;
    const background = index % 2 === 0? "checkoutItemBg" : "checkoutItem";
    return (
      <div className={background}>
        <h4 className="checkoutItemTxt">Name: {data.name}</h4>
        <p className="checkoutItemTxt">Size: {data.pizzaSize}</p>
        <p className="checkoutItemTxt">Extra Cheese: {data.extraCheese}</p>
        <p className="checkoutItemTxt">Quantity: {data.quantity}</p>
        <p className="checkoutItemTxt">Total: {data.price * data.quantity}$</p>
      </div>
    );
  }
}

CheckoutItem.defaultProps = {
  index: 0,
  data: {}
};

export default CheckoutItem;
